import { Aperture } from '@/lib/aperture';
import FAQ from '@/components/FAQ';

const PLAY_STORE_URL = '#'; // Replace with actual Google Play Store URL

// ─── Inline SVG icons ───────────────────────────────────────────────────────

function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v8M5 7l3 3 3-3M3 12h10" stroke="#10141F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="7" r="6" stroke="#0090C0" strokeWidth="1.25" />
      <path d="M7 6.5v3M7 4.5v.5" stroke="#0090C0" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Feature icons
function IconSun() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="4" stroke="#FFD000" strokeWidth="1.5" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#FFD000" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBracket() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="3" height="10" rx="1" fill="#0090C0" opacity="0.4" />
      <rect x="8.5" y="3" width="3" height="14" rx="1" fill="#0090C0" />
      <rect x="15" y="7" width="3" height="6" rx="1" fill="#0090C0" opacity="0.6" />
    </svg>
  );
}

function IconMonitorX() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="11" rx="2" stroke="#6B6B6B" strokeWidth="1.5" />
      <path d="M8 17h4M10 14v3" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#FF4D4D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconAndroid() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 13V9a6 6 0 0112 0v4" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="2" y="9" width="2" height="5" rx="1" fill="#2DCE7A" />
      <rect x="16" y="9" width="2" height="5" rx="1" fill="#2DCE7A" />
      <path d="M4 13a2 2 0 002 2h8a2 2 0 002-2" stroke="#6B6B6B" strokeWidth="1.5" />
      <circle cx="7.5" cy="11" r="1" fill="#2DCE7A" />
      <circle cx="12.5" cy="11" r="1" fill="#2DCE7A" />
      <path d="M7 6.5L5.5 4.5M13 6.5L14.5 4.5" stroke="#2DCE7A" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function IconHouse() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#6B6B6B" strokeWidth="1.5" />
      <rect x="7.5" y="9" width="5" height="4" rx="0.5" fill="#FFD000" opacity="0.7" />
    </svg>
  );
}

function IconCard() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="11" rx="2" stroke="#6B6B6B" strokeWidth="1.5" />
      <path d="M2 9h16" stroke="#6B6B6B" strokeWidth="1.5" />
      <circle cx="6" cy="13" r="1.5" fill="#2DCE7A" />
    </svg>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Navigation ───────────────────────────────────────────────── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <a href="/" className="logo" aria-label="Shotly home">
          <Aperture size={22} color="#1A1A1A" />
          <span className="logo-wordmark">shotly</span>
        </a>
        <a href="#final-cta" className="btn-cta-nav">
          Get on Google Play
        </a>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        {/* Background watermark */}
        <div className="hero-bg" aria-hidden="true">
          <Aperture size={500} color="#1A1A1A" />
        </div>

        <div className="container">
          {/* Badge */}
          <div className="hero-badge" aria-label="Platform: Android — Real Estate Photography">
            <span className="hero-badge-dot" aria-hidden="true" />
            Android · Real Estate Photography
          </div>

          {/* Headline */}
          <h1 id="hero-heading">
            HDR photos.<br />
            From your<br />
            <span className="accent">phone.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub">
            Shotly automatically brackets exposures and merges them into balanced,
            window-lit interior shots — no desktop editing required.
          </p>

          {/* Primary CTA */}
          <a href={PLAY_STORE_URL} className="btn-cta-primary" rel="noopener">
            <IconDownload />
            Download on Google Play
          </a>

          {/* Fine print */}
          <p className="hero-fine-print">
            <IconInfo />
            Android only · Free to try · Pay per enhanced shot
          </p>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section aria-labelledby="problem-heading">
        <div className="container">
          <p className="eyebrow">The Problem</p>

          <p className="problem-statement" id="problem-heading">
            Your phone camera can&apos;t see what you see.<br />
            <span className="strike">Expose for the window — the room goes dark.</span><br />
            <span className="strike">Expose for the room — the window blows out.</span>
          </p>

          <p className="problem-body">
            Standard smartphone cameras capture a single exposure. Interior real estate
            shots have extreme lighting — bright windows alongside shaded rooms — and no
            single frame can cover both. The result looks unprofessional and undersells
            every property.
          </p>

          <div className="two-col-cards">
            <div className="card">
              <p className="card-label">Exposed for the window</p>
              <p className="card-title">The room looks like a cave</p>
              <p className="card-body">
                Walls, furniture, and floors go dark and muddy. The space looks smaller
                and less inviting than it really is.
              </p>
            </div>
            <div className="card">
              <p className="card-label">Exposed for the room</p>
              <p className="card-title">Windows blow out to white</p>
              <p className="card-body">
                Natural light disappears. Any view, garden, or streetscape outside is
                lost. The photo looks flat and artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <section aria-labelledby="how-heading">
        <div className="container">
          <p className="eyebrow">How It Works</p>
          <h2 id="how-heading">Three steps. Done.</h2>
          <p className="section-intro steps-intro">
            No computer. No Lightroom. No sending files anywhere.
            The whole workflow lives on your phone.
          </p>

          <div className="steps-grid" role="list">
            <div className="step-cell" role="listitem">
              <span className="step-num">01</span>
              <p className="step-title">Shoot</p>
              <p className="step-body">
                Open Shotly and point it at the room. The app automatically fires a
                bracket of exposures — dark, mid, and bright — in rapid succession.
              </p>
            </div>
            <div className="step-cell" role="listitem">
              <span className="step-num">02</span>
              <p className="step-title">Merge</p>
              <p className="step-body">
                Shotly&apos;s HDR engine blends the bracket into a single image, pulling
                detail from shadows and highlights simultaneously.
              </p>
            </div>
            <div className="step-cell" role="listitem">
              <span className="step-num">03</span>
              <p className="step-title">Done</p>
              <p className="step-body">
                Your balanced, professional-looking interior shot is ready. Export it
                directly to your gallery or listing platform in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────── */}
      <section aria-labelledby="features-heading">
        <div className="container">
          <p className="eyebrow">Features</p>
          <h2 id="features-heading">Everything you need. Nothing you don&apos;t.</h2>
          <p className="section-intro features-intro">
            Built specifically for interior real estate photography — not a
            general-purpose camera app.
          </p>

          <div className="features-grid">
            <div className="feature-cell">
              <div className="feature-icon"><IconSun /></div>
              <p className="feature-title">On-device HDR merging</p>
              <p className="feature-body">
                Multiple exposures are combined directly on your phone using a
                tone-mapping algorithm tuned for interiors. No cloud upload, no waiting,
                no subscription tiers based on processing.
              </p>
            </div>

            <div className="feature-cell">
              <div className="feature-icon"><IconBracket /></div>
              <p className="feature-title">Automatic exposure bracketing</p>
              <p className="feature-body">
                Shotly captures your bracket in one tap. You set the scene; it handles
                the timing and exposure values. No manual shutter adjustments, no tripod
                required.
              </p>
            </div>

            <div className="feature-cell">
              <div className="feature-icon"><IconMonitorX /></div>
              <p className="feature-title">No desktop software needed</p>
              <p className="feature-body">
                Forget exporting RAWs to Lightroom or sending files to a retoucher.
                Shotly produces a listing-ready JPEG on the device, at the shoot. Agents
                can post directly from the property.
              </p>
            </div>

            <div className="feature-cell">
              <div className="feature-icon"><IconAndroid /></div>
              <p className="feature-title">Android-native, Camera2 API</p>
              <p className="feature-body">
                Shotly is built exclusively for Android using the native Camera2 API. It
                uses the full sensor capability of your device — not a workaround. iOS
                is not supported.
              </p>
            </div>

            <div className="feature-cell">
              <div className="feature-icon"><IconHouse /></div>
              <p className="feature-title">Tuned for interior real estate</p>
              <p className="feature-body">
                The merge algorithm is specifically calibrated for rooms: it preserves
                window views, avoids halo artifacts around door frames, and keeps skin
                tones in staging shots natural.
              </p>
            </div>

            <div className="feature-cell">
              <div className="feature-icon"><IconCard /></div>
              <p className="feature-title">Free preview · pay only to export</p>
              <p className="feature-body">
                Preview every merged result before committing. You&apos;re only charged when
                you export a finished shot — so you never pay for a photo that doesn&apos;t
                meet your standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────────────── */}
      <section aria-labelledby="who-heading">
        <div className="container">
          <p className="eyebrow">Who It&apos;s For</p>
          <h2 id="who-heading">Built for the people who shoot properties.</h2>
          <p className="section-intro who-intro">
            If you photograph interiors for a living — or just need one good shot
            of your rental — Shotly is for you.
          </p>

          <div className="who-cards">
            <div className="who-card">
              <p className="who-role">Real Estate Agents</p>
              <p className="who-title">Shoot listings yourself. Look like you hired a pro.</p>
              <p className="who-body">
                Skip the scheduling and the photography fee. Shotly gives agents the
                ability to shoot any listing on the spot — at open house, after a
                renovation, or on a spontaneous walkthrough — and post it the same day.
              </p>
            </div>

            <div className="who-card">
              <p className="who-role">Airbnb &amp; Short-Term Rental Hosts</p>
              <p className="who-title">Better photos mean more bookings.</p>
              <p className="who-body">
                Guests decide in seconds. A bright, well-balanced photo of your living
                room or bedroom makes a direct difference to click-through rates. Shotly
                lets you refresh your listing photos any time a room changes.
              </p>
            </div>

            <div className="who-card">
              <p className="who-role">Property Photographers</p>
              <p className="who-title">A faster on-site workflow.</p>
              <p className="who-body">
                Professional photographers can use Shotly as a quick-capture tool for
                smaller jobs, or as a backup when conditions change. Process brackets
                on-device while still on location instead of waiting for desktop post.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before / After ───────────────────────────────────────────── */}
      <section aria-labelledby="ba-heading">
        <div className="container">
          <p className="eyebrow">Before &amp; After</p>
          <h2 id="ba-heading">The difference is obvious.</h2>
          <p className="section-intro ba-intro">
            Same room. Same phone. Same window. One exposure vs. a Shotly HDR merge.
          </p>

          <div className="ba-pair">
            {/* Before */}
            <div className="ba-frame ba-before" role="img" aria-label="Before: single exposure — dark room">
              <span className="ba-badge ba-badge-before">Before</span>
            </div>

            {/* Divider */}
            <div className="ba-divider" aria-hidden="true">
              <div className="ba-divider-line" />
              <div className="ba-divider-icon">
                <IconArrow />
              </div>
              <div className="ba-divider-line" />
            </div>

            {/* After */}
            <div className="ba-frame ba-after" role="img" aria-label="After: Shotly HDR merge — balanced exposure">
              <span className="ba-badge ba-badge-after">After</span>
            </div>
          </div>

          <p className="ba-caption">
            Drop in your own photos here — these placeholders show the layout.
          </p>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────────────── */}
      <section aria-labelledby="comparison-heading">
        <div className="container">
          <p className="eyebrow">Comparison</p>
          <h2 id="comparison-heading">Shotly vs. the manual workflow.</h2>
          <p className="section-intro comparison-intro">
            Here&apos;s what the old way costs you — and what Shotly eliminates.
          </p>

          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="col-shotly">Shotly</th>
                  <th scope="col">Manual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-feature">Shoot bracketed exposures</td>
                  <td className="col-shotly"><span className="check">✓</span> One tap, automatic</td>
                  <td className="col-manual">Manual shutter + tripod</td>
                </tr>
                <tr>
                  <td className="col-feature">Merge exposures</td>
                  <td className="col-shotly"><span className="check">✓</span> On device, instantly</td>
                  <td className="col-manual">Lightroom / Photoshop on desktop</td>
                </tr>
                <tr>
                  <td className="col-feature">Desktop computer required</td>
                  <td className="col-shotly"><span className="cross">✗</span> Not needed</td>
                  <td className="col-manual">Required</td>
                </tr>
                <tr>
                  <td className="col-feature">File transfer step</td>
                  <td className="col-shotly"><span className="cross">✗</span> Skipped entirely</td>
                  <td className="col-manual">USB / cloud sync</td>
                </tr>
                <tr>
                  <td className="col-feature">Time from shoot to deliverable</td>
                  <td className="col-shotly"><span className="check">✓</span> Seconds, on location</td>
                  <td className="col-manual">Minutes to hours at desk</td>
                </tr>
                <tr>
                  <td className="col-feature">Works for Airbnb / quick jobs</td>
                  <td className="col-shotly"><span className="check">✓</span> Ideal use case</td>
                  <td className="col-manual">Overkill for small shoots</td>
                </tr>
                <tr>
                  <td className="col-feature">Cost</td>
                  <td className="col-shotly"><span className="check">✓</span> Pay per exported shot</td>
                  <td className="col-manual">Software subscription + time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading">Questions people actually ask.</h2>
          <p className="section-intro faq-intro">
            Straight answers. No marketing language.
          </p>
          <FAQ />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="final-cta" id="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">
            Every listing deserves<br />
            a <span className="accent">bright room.</span>
          </h2>
          <p className="final-cta-sub">
            Download Shotly and shoot your first HDR interior in under two minutes.
          </p>
          <a href={PLAY_STORE_URL} className="btn-cta-large" rel="noopener">
            <IconDownload />
            Download on Google Play
          </a>
          <p className="cta-fine-print">Free to try · Android only · No subscription</p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer role="contentinfo">
        <a href="/" className="logo" aria-label="Shotly home">
          <Aperture size={16} color="#AAAAAA" />
          <span className="footer-logo-wordmark">shotly</span>
        </a>
        <p className="footer-copy">
          © 2026 Shotly · Android app for real estate photography
        </p>
      </footer>
    </>
  );
}
