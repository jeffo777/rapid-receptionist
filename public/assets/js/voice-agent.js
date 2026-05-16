/**
 * Rapid Receptionist — Deepgram Voice Agent
 * ⚠️ CACHE-BUST: bump ?v= in HeroSection/FloatingWidget when editing this file
 * Current version: ?v=20260516a
 */
(function () {
  'use strict';

  /* ── Constants ── */
  const INPUT_SAMPLE_RATE = 48000;
  const OUTPUT_SAMPLE_RATE = 24000;
  const PLAYBACK_RATE = 1.1;
  const WS_URL = 'wss://agent.deepgram.com/v1/agent/converse';
  const TOKEN_URL = '/api/deepgram-token';

  /* ── System Prompt ── */
  function buildPrompt(tradeName) {
    const tradeCtx = tradeName
      ? `The visitor is on the AI receptionist page for ${tradeName} businesses. They likely run a ${tradeName} business. Relate your answers to their trade — the kinds of calls they get, missing enquiries while on site, and how an AI receptionist handles things specific to their line of work.`
      : 'The visitor is browsing the Rapid Receptionist website.';

    return `#Role
You are the Rapid Receptionist — an AI receptionist demo — on the Rapid Receptionist website. You are here to show UK construction tradesmen how the service works and help them decide if it is right for their business. You are NOT the actual deployed receptionist. You are the sales assistant for the Rapid Receptionist service itself.

#Context
${tradeCtx}
Rapid Receptionist is a done-for-you managed AI receptionist service built exclusively for 46 UK construction trades. It answers calls, messages, and enquiries across up to 8 communication channels, 24/7/365. Built by UK tradesmen who experienced the problems of missing leads because they could not answer the phone or respond to messages fast enough.

#Conversational Flow Rules
1. ONE SENTENCE AT A TIME. Never give more than one sentence before pausing for a response.
2. Keep responses under 120 characters unless the caller asks for more detail. Maximum 300 characters.
3. Ask questions to understand their trade and situation.
4. Do not use markdown formatting, code blocks, quotes, bold, links, or italics.
5. Use varied phrasing. Avoid repetition.
6. If the user's message is empty, respond with an empty message.
BAD: "We offer an AI receptionist service that answers calls 24/7 across 8 channels including phone, WhatsApp, SMS, email, website chat, Facebook, Instagram, and missed call text-back, all for just 49 pounds a month with a 295 pound setup fee that is fully refundable within 30 days."
GOOD: "We answer your calls and messages 24/7 so you never miss a lead. What trade are you in?"

#Demo Context
This is a live demo on the website. You are showing visitors what the AI receptionist sounds like and how it works.
You CANNOT take personal details, book appointments, send links, or perform any actions.
If someone asks you to take their details or sign them up, say: "This is a demo, but if you would like to get started, just click Get Started at the top of this page."
If they want to speak to a human, say: "You can reach the team directly through the Contact page, or email hello at rapidreceptionist dot co dot uk."

#Website Awareness
The visitor is ALREADY on the Rapid Receptionist website. NEVER say "visit our website."
Key pages: Get Started (sign up, top of every page), Pricing (full breakdown), Construction Trades (all 46 trades), About (the company story), Contact (get in touch).

#About the Company
UK-owned and run. Built by tradesmen who know what it costs to miss a call while working. The team handles ALL setup, configuration, and ongoing maintenance. Tradesmen do not install or manage anything. Done for you is the core principle. Fully UK GDPR compliant, data stored on UK and EU servers.

#Pricing — GIVE ACTUAL PRICES, never say check the pricing page
Core Plan: 49 pounds a month. Includes AI phone answering with 120 minutes of talk time, unlimited website chat, human emergency escalation, trade-specific AI training, and free business info updates.
Add-on channels: 23 pounds a month each. Available: WhatsApp, SMS, Email, Facebook Messenger, Instagram DMs, Missed Call Text-Back.
Setup fee: 295 pounds, one-time. Fully refundable within 30 days.
Overage: 20 pence per minute beyond 120 minutes. All text channels are unlimited.
30-day full money-back guarantee covering BOTH setup fee AND monthly fee. No questions asked.
No contracts. Cancel anytime.

#How It Works
The tradesman signs up via the website. The Rapid Receptionist team configures everything: AI training, phone routing, chat widget, messaging accounts. Typically live within 48 hours. The AI answers calls using the tradesman's business name. It captures name, number, location, job type, and urgency. It escalates emergencies to the tradesman or a human operator. Routine business info updates like pricing changes, new services, and updated hours are done for free.

#Channels — 8 available
Tier 1 Conversational: Phone and Website Chat. Full back-and-forth conversation, captures details, assesses urgency, escalates emergencies.
Tier 2 One Reply: WhatsApp, SMS, Email, Facebook, Instagram. One professional reply acknowledging the enquiry. No back-and-forth.
Tier 3 Fallback: Missed Call Text-Back. Safety net text if a call is missed. No conversation.

#Trades Served
46 UK construction trades across 7 categories: Groundwork and Structure, Roofing and Weatherproofing, Mechanical and Electrical, Finishing Trades, External and Landscaping, Building Services, and Specialist trades. If someone asks about a specific construction trade, confirm we serve it.

#Value Proposition
78 percent of customers hire the first business to respond. 62 percent of calls to trade businesses go unanswered. 85 percent of callers who reach voicemail never call back. The average UK tradesperson loses 24 thousand pounds a year from missed calls. One captured emergency call pays for a full year of the service.

#Human Escalation
The AI escalates to a real human when the customer is frustrated, requests a human, or there is an emergency. Escalation goes first to the tradesman, then to a Rapid Receptionist human operator. Most competitors do not offer human backup. This is a key differentiator.

#Call Objectives
Help the visitor understand what Rapid Receptionist does. Answer their questions directly with actual prices and facts. Relate the service to their specific trade. Guide interested visitors to click Get Started. Be warm, helpful, and honest.

#DO NOT Rules
Never promise to do things you cannot do. Never say visit our website. Never use gendered pronouns for the AI — use it, the AI, or Rapid Receptionist. Never mention founder names or personal details. Never claim the AI books appointments, provides quotes, or diagnoses faults. Never mention competitors by name. Never say we have a pricing page instead of giving the actual price. Never give long monologues.`;
  }

  function getGreeting() {
    return "Hi there! Welcome to Rapid Receptionist. I'm the AI — what can I help you with?";
  }

  function buildSettings(tradeName) {
    return {
      type: 'Settings',
      audio: {
        input: { encoding: 'linear16', sample_rate: INPUT_SAMPLE_RATE },
        output: { encoding: 'linear16', sample_rate: OUTPUT_SAMPLE_RATE, container: 'none' },
      },
      agent: {
        language: 'en',
        listen: { provider: { type: 'deepgram', version: 'v2', model: 'flux-general-en' } },
        think: { provider: { type: 'google', model: 'gemini-2.5-flash' }, prompt: buildPrompt(tradeName) },
        speak: { provider: { type: 'deepgram', model: 'aura-2-pandora-en' } },
        greeting: getGreeting(),
      },
    };
  }

  /* ── Voice Agent Class ── */
  class VoiceAgent {
    constructor() {
      this._ws = null;
      this._mediaStream = null;
      this._audioContext = null;
      this._playbackContext = null;
      this._sourceNode = null;
      this._processorNode = null;
      this._activeSources = [];
      this._nextPlayTime = 0;
      this._status = 'idle';
      this._transcript = [];
      this._modal = null;
      this._els = {};
    }

    /* ── Public API ── */
    async start(tradeName) {
      if (this._status !== 'idle') return;
      this._ensureModal();
      this._showModal();
      this._setStatus('connecting');

      try {
        const res = await fetch(TOKEN_URL, { method: 'POST' });
        if (!res.ok) throw new Error('Token request failed');
        const { token } = await res.json();

        this._mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        });

        this._ws = new WebSocket(WS_URL, ['token', token]);
        this._ws.binaryType = 'arraybuffer';
        this._ws.onopen = () => this._ws.send(JSON.stringify(buildSettings(tradeName)));
        this._ws.onmessage = (e) => this._onMessage(e);
        this._ws.onerror = () => { this._setStatus('error'); setTimeout(() => this.stop(), 3000); };
        this._ws.onclose = () => { if (this._status !== 'idle') this.stop(); };
      } catch (err) {
        console.error('VoiceAgent start failed:', err);
        this._setStatus('error');
        setTimeout(() => this.stop(), 3000);
      }
    }

    stop() {
      if (this._mediaStream) { this._mediaStream.getTracks().forEach(t => t.stop()); this._mediaStream = null; }
      if (this._processorNode) { this._processorNode.disconnect(); this._processorNode = null; }
      if (this._sourceNode) { this._sourceNode.disconnect(); this._sourceNode = null; }
      if (this._audioContext) { this._audioContext.close().catch(() => {}); this._audioContext = null; }
      this._stopPlayback();
      if (this._playbackContext) { this._playbackContext.close().catch(() => {}); this._playbackContext = null; }
      if (this._ws) { this._ws.close(); this._ws = null; }
      this._setStatus('idle');
      this._hideModal();
      this._transcript = [];
    }

    /* ── WebSocket ── */
    _onMessage(event) {
      if (event.data instanceof ArrayBuffer) { this._playAudioChunk(event.data); return; }
      const msg = JSON.parse(event.data);
      switch (msg.type) {
        case 'SettingsApplied': this._startMic(); this._setStatus('listening'); break;
        case 'UserStartedSpeaking': this._stopPlayback(); this._setStatus('listening'); break;
        case 'ConversationText': this._addMsg(msg.role, msg.content); break;
        case 'AgentThinking': this._setStatus('thinking'); break;
        case 'AgentStartedSpeaking': this._setStatus('speaking'); break;
        case 'AgentAudioDone': this._setStatus('listening'); break;
        case 'Error': console.error('Agent error:', msg); break;
      }
    }

    /* ── Microphone ── */
    _startMic() {
      this._audioContext = new AudioContext({ sampleRate: INPUT_SAMPLE_RATE });
      this._sourceNode = this._audioContext.createMediaStreamSource(this._mediaStream);
      this._processorNode = this._audioContext.createScriptProcessor(4096, 1, 1);
      this._processorNode.onaudioprocess = (e) => {
        if (this._ws?.readyState !== WebSocket.OPEN) return;
        const f = e.inputBuffer.getChannelData(0);
        const pcm = new Int16Array(f.length);
        for (let i = 0; i < f.length; i++) {
          const s = Math.max(-1, Math.min(1, f[i]));
          pcm[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }
        this._ws.send(pcm.buffer);
      };
      this._sourceNode.connect(this._processorNode);
      this._processorNode.connect(this._audioContext.destination);
    }

    /* ── Playback (gapless) ── */
    _playAudioChunk(buffer) {
      if (!this._playbackContext) {
        this._playbackContext = new AudioContext({ sampleRate: OUTPUT_SAMPLE_RATE });
        this._nextPlayTime = 0;
      }
      const int16 = new Int16Array(buffer);
      const float32 = new Float32Array(int16.length);
      for (let i = 0; i < int16.length; i++) float32[i] = int16[i] / 32768;

      const ab = this._playbackContext.createBuffer(1, float32.length, OUTPUT_SAMPLE_RATE);
      ab.getChannelData(0).set(float32);
      const src = this._playbackContext.createBufferSource();
      src.buffer = ab;
      src.playbackRate.value = PLAYBACK_RATE;
      src.connect(this._playbackContext.destination);

      const now = this._playbackContext.currentTime;
      const t = Math.max(now, this._nextPlayTime);
      src.start(t);
      this._nextPlayTime = t + (ab.duration / PLAYBACK_RATE);

      this._activeSources.push(src);
      src.onended = () => { const i = this._activeSources.indexOf(src); if (i > -1) this._activeSources.splice(i, 1); };
    }

    _stopPlayback() {
      this._activeSources.forEach(s => { try { s.stop(); } catch (_) {} });
      this._activeSources = [];
      this._nextPlayTime = 0;
    }

    /* ── Modal UI ── */
    _ensureModal() {
      if (this._modal) return;
      const m = document.createElement('div');
      m.className = 'va-modal';
      m.id = 'va-modal';
      m.setAttribute('aria-hidden', 'true');
      m.innerHTML = `
        <div class="va-modal__overlay" data-va-close></div>
        <div class="va-modal__content">
          <div class="va-modal__header">
            <div class="va-modal__avatar-wrap">
              <img src="/assets/images/ai-receptionist.webp" alt="Rapid Receptionist AI" class="va-modal__avatar" width="80" height="80" />
              <div class="va-modal__avatar-ring"></div>
            </div>
            <div class="va-modal__info">
              <p class="va-modal__name">Rapid Receptionist</p>
              <p class="va-modal__status" id="va-status">Connecting…</p>
            </div>
            <button class="va-modal__close" data-va-close aria-label="End conversation">&times;</button>
          </div>
          <div class="va-modal__transcript" id="va-transcript">
            <p class="va-modal__placeholder">Your conversation will appear here…</p>
          </div>
          <div class="va-modal__footer">
            <button class="va-modal__end-btn" id="va-end-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.3 1.58.57 2.33a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.26 1.53.45 2.33.57A2 2 0 0 1 22 16.92z"/></svg>
              End Conversation
            </button>
          </div>
        </div>`;
      document.body.appendChild(m);
      this._modal = m;
      this._els.status = m.querySelector('#va-status');
      this._els.transcript = m.querySelector('#va-transcript');

      // Close handlers
      m.querySelectorAll('[data-va-close]').forEach(el => el.addEventListener('click', () => this.stop()));
      m.querySelector('#va-end-btn').addEventListener('click', () => this.stop());
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && this._status !== 'idle') this.stop(); });
    }

    _showModal() {
      this._modal.classList.add('active');
      this._modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Reset transcript
      this._els.transcript.innerHTML = '<p class="va-modal__placeholder">Your conversation will appear here…</p>';
    }

    _hideModal() {
      if (!this._modal) return;
      this._modal.classList.remove('active', 'va-modal--listening', 'va-modal--speaking', 'va-modal--error');
      this._modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    _setStatus(status) {
      this._status = status;
      if (!this._modal) return;
      const labels = { connecting: 'Connecting…', listening: 'Listening…', thinking: 'Thinking…', speaking: 'Speaking…', error: 'Connection failed', idle: '' };
      if (this._els.status) this._els.status.textContent = labels[status] || '';
      this._modal.classList.remove('va-modal--listening', 'va-modal--speaking', 'va-modal--error');
      if (status === 'listening') this._modal.classList.add('va-modal--listening');
      if (status === 'speaking') this._modal.classList.add('va-modal--speaking');
      if (status === 'error') this._modal.classList.add('va-modal--error');
    }

    _addMsg(role, content) {
      if (!content) return;
      this._transcript.push({ role, content });
      // Remove placeholder
      const ph = this._els.transcript.querySelector('.va-modal__placeholder');
      if (ph) ph.remove();
      const div = document.createElement('div');
      div.className = `va-msg va-msg--${role}`;
      div.textContent = content;
      this._els.transcript.appendChild(div);
      this._els.transcript.scrollTop = this._els.transcript.scrollHeight;
    }
  }

  /* ── Global API ── */
  const agent = new VoiceAgent();
  window.RapidVoiceAgent = {
    start: (tradeName) => agent.start(tradeName),
    stop: () => agent.stop(),
  };
})();
