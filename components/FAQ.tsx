'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Does this work on my phone, or do I need a specific camera model?',
    a: 'Shotly uses the Android Camera2 API, which is available on virtually all Android phones running Android 7 or later. You don\'t need a flagship device — mid-range phones with decent sensors work well. The better the camera hardware, the cleaner the merge result.',
  },
  {
    q: 'How is this different from my phone\'s built-in HDR mode?',
    a: 'Built-in HDR is optimised for outdoor scenes and faces. It aggressively tone-maps for punchy results that look good on a screen. Shotly\'s algorithm is tuned specifically for interior real estate: it preserves the view through windows, keeps wall and floor colours accurate, and avoids the artificial \'HDR look\' that makes listing photos look edited.',
  },
  {
    q: 'Do I need a tripod to get a good result?',
    a: 'A tripod always helps with any bracketed HDR — it removes alignment error between frames. That said, Shotly includes automatic alignment correction that handles small handheld movements reasonably well. For most interior shots in average light, handheld results are perfectly usable.',
  },
  {
    q: 'Is there an iPhone version?',
    a: 'No — Shotly is Android only. The Camera2 API on Android gives us the low-level shutter and sensor control we need for precise exposure bracketing. iOS restricts that kind of camera access, so an iOS version is not currently planned.',
  },
  {
    q: 'How much does it cost? Is there a subscription?',
    a: 'No subscription. You download the app for free and can preview your merged shots at no cost. You only pay when you export a final image. There\'s no monthly fee and no credits that expire.',
  },
  {
    q: 'Will the photos look over-processed or fake?',
    a: 'That was a deliberate design decision. Shotly aims for natural-looking results — not the heavy tone-mapped look common to consumer HDR apps. The goal is a photo that looks like it was shot on a bright, well-lit day, not one that looks like it passed through five filters.',
  },
  {
    q: 'Can I use this for commercial real estate, not just homes?',
    a: 'Yes. The HDR merging works on any interior space — office lobbies, retail units, warehouses, showrooms. The algorithm doesn\'t know the difference between a living room and a conference room. As long as the challenge is managing window light versus interior exposure, Shotly applies.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="faq-list" role="list">
      {faqs.map((item, i) => (
        <div
          key={i}
          className={`faq-item${openIndex === i ? ' open' : ''}`}
          role="listitem"
        >
          <button
            className="faq-question"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <svg
              className="faq-chevron"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4.5 6.75L9 11.25L13.5 6.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="faq-answer">
            <p className="faq-answer-inner">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
