import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import ImageFallback from '../components/ImageFallback'
import AppStoreButtons from '../components/AppStoreButtons'
import WaitingListForm from '../components/WaitingListForm'
import NewsletterForm from '../components/NewsletterForm'
import Carousel from '../components/Carousel'

const APP_SLIDES = [
  { src: '/images/1.png', alt: 'EVĀ Health home screen' },
  { src: '/images/2.png', alt: 'Cycle tracker calendar' },
  { src: '/images/3.png', alt: 'Ask EVĀ AI coaching chat' },
  { src: '/images/4.png', alt: 'Progress charts and stats' },
  { src: '/images/5.png', alt: 'Food photo logging' },
  { src: '/images/6.png', alt: 'Wellness library and tips' },
]

/* ── Section 1: Hero ──────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="label-caps hero-eyebrow">A Growing Ecosystem for Women</p>
        <h1 className="hero-wordmark" aria-label="EVĀ">
          <Logo variant="burgundy" className="hero-logo" />
        </h1>
        <p className="hero-headline lora-italic">Your Life, Aligned.</p>
        <p className="hero-sub">
          A growing ecosystem of apps helping women live healthier, more
          intentional lives, starting with EVĀ Health.
        </p>
        <div className="hero-buttons">
          <a href="#meet-health" className="btn-burgundy">Download EVĀ Health</a>
          <Link to="/about" className="btn-outline btn-outline--dark">Explore the EVĀ Vision</Link>
        </div>
        <p className="hero-price-note">
          Free to download · Premium from €7.99/month · Cancel anytime
        </p>
        <p className="hero-fineprint">
          Free on iOS · Android coming soon · EVĀ Focus &amp; Scripture coming soon
        </p>

        <div className="hero-cards" aria-hidden="true">
          <div className="ui-card ui-card--left">
            <span className="card-label label-caps">EVĀ Health</span>
            <span className="card-value">Day 14 of cycle</span>
            <span className="card-detail">Ovulation phase</span>
          </div>
          <div className="ui-card ui-card--rt">
            <span className="card-label label-caps">Daily Intention</span>
            <span className="card-italic lora-italic">Move with clarity, not pressure.</span>
          </div>
          <div className="ui-card ui-card--rb ui-card--muted">
            <span className="card-label label-caps">EVĀ Focus</span>
            <span className="card-value card-value--muted">Coming soon</span>
          </div>
        </div>
      </div>

      {/* Hero banner strip removed — reserved for an upcoming video banner. */}
    </section>
  )
}

/* ── Section 2: Meet EVĀ Health ───────────────────────────── */
function MeetHealth() {
  const features = [
    'Build healthy habits',
    'Track your cycle and wellbeing',
    'Stay consistent with smart streaks',
    'Create sustainable daily routines',
    'Live with intention, not pressure',
  ]
  return (
    <section className="meet-health" id="meet-health">
      <div className="meet-health-inner">
        <Reveal className="meet-health-img-col">
          <Carousel slides={APP_SLIDES} className="meet-health-carousel" />
        </Reveal>
        <Reveal className="meet-health-text" delay={80}>
          <Logo health variant="burgundy" height={48} className="section-logo" />
          <span className="badge badge--available">Available Now on iOS</span>
          <h2 className="section-h lora">
            Finally understand <em className="lora-italic">your</em> body.
          </h2>
          <p className="body-muted">
            EVĀ Health is the first app in the EVĀ ecosystem. It helps women build
            healthy habits, track their wellbeing, stay consistent, and create
            sustainable routines, all guided by cycle-aware AI coaching.
          </p>
          <ul className="feature-list">
            {features.map((f) => (
              <li key={f}>
                <span className="feature-check" aria-hidden="true">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="stat-dots">
            <span className="stat-item"><span className="stat-dot" />4 cycle phases</span>
            <span className="stat-item"><span className="stat-dot" />AI coaching</span>
            <span className="stat-item"><span className="stat-dot" />Built for real life</span>
          </div>
          <AppStoreButtons />
          <p className="form-fine">Free to download · iOS available now · Android coming soon</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Section 3: Philosophy ────────────────────────────────── */
function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="philosophy-inner">
        <Reveal className="philosophy-left">
          <p className="label-caps accent-label">The Philosophy</p>
          <h2 className="section-h lora">
            EVĀ is a <em className="lora-italic">way of life.</em>
          </h2>
          <ImageFallback
            src="/images/women-overhead.png"
            alt="Three women lying with heads together, smiling up"
            label="women-overhead.png"
            className="philosophy-img"
            loading="lazy"
          />
        </Reveal>
        <Reveal className="philosophy-right" delay={80}>
          <p className="philosophy-body">
            EVĀ is a digital ecosystem of focused apps designed to support every area
            of a woman's life. From spiritual growth and daily structure to health and
            self-care, each part of EVĀ helps you live with intention instead of chaos.
          </p>
          <p className="philosophy-body body-muted">
            We believe a strong life is not built in extremes, but in daily alignment.
            Small acts. Repeated. With purpose.
          </p>
          <div className="value-pills">
            {['Faith', 'Focus', 'Health', 'Community'].map((v) => (
              <span key={v} className="value-pill">{v}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Section 4: Four Pillars ──────────────────────────────── */
function FourPillars() {
  const pillars = [
    {
      title: 'Faith', sub: 'Spiritual growth',
      body: 'Growing through Scripture, reflection, and community. Your faith, deepened daily.',
      link: 'EVĀ Scripture · Coming Soon →', linkClass: 'card-link--muted', to: '/apps',
    },
    {
      title: 'Focus', sub: 'Clarity & tasks',
      body: 'Intentional routines and healthy discipline, built for the way your mind actually works.',
      link: 'EVĀ Focus · Coming Soon →', linkClass: 'card-link--muted', to: '/apps',
    },
    {
      title: 'Health', sub: 'Body balance',
      body: 'Cycle-aware coaching, nutrition tracking, and AI-powered insights for how you actually live.',
      link: 'Download EVĀ Health →', linkClass: 'card-link--burgundy', to: '/apps',
    },
    {
      title: 'Community', sub: 'Shared journey',
      body: "You're not doing this alone. Real women, real stories, moving forward together.",
      link: 'Join Community →', linkClass: 'card-link--burgundy', to: '/community',
    },
  ]
  return (
    <section className="pillars">
      <Reveal className="section-head">
        <p className="label-caps accent-label">The Four Pillars</p>
        <h2 className="section-h section-h--center lora">
          Every area of your life, <em className="lora-italic">supported.</em>
        </h2>
      </Reveal>
      <div className="pillars-grid">
        {pillars.map((p, i) => (
          <Reveal key={p.title} className="pillar-card" delay={i * 70}>
            <span className="pillar-icon" aria-hidden="true" />
            <h3 className="pillar-title lora">{p.title}</h3>
            <p className="pillar-sub lora-italic">{p.sub}</p>
            <p className="pillar-body body-muted">{p.body}</p>
            <Link to={p.to} className={`card-link ${p.linkClass}`}>{p.link}</Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ── Section 5: The EVĀ Ecosystem ─────────────────────────── */
function Ecosystem() {
  const apps = [
    {
      name: 'EVĀ Health', badge: 'Available Now', badgeType: 'available',
      body: 'Healthy habits, cycle tracking, nutrition, movement, and AI-powered wellbeing coaching.',
      cta: 'Download App', ctaClass: 'btn-burgundy', cardClass: 'eco-card--feature', note: null,
    },
    {
      name: 'EVĀ Focus', badge: 'Coming Soon', badgeType: 'soon',
      body: 'Build routines, stay organized, and create a life of purpose. Designed for the way women think.',
      cta: 'Join Waiting List', ctaClass: 'btn-outline btn-outline--muted', cardClass: 'eco-card--soft', note: null,
    },
    {
      name: 'EVĀ Scripture', badge: 'Coming Soon', badgeType: 'soon',
      body: 'Study Scripture deeply, journal your reflections, and grow together. Free forever, because Scripture should always be accessible.',
      cta: 'Join Waiting List', ctaClass: 'btn-outline btn-outline--muted', cardClass: 'eco-card--soft', note: 'Free forever',
    },
  ]
  return (
    <section className="ecosystem" id="ecosystem">
      <Reveal className="section-head">
        <p className="label-caps accent-label">The Ecosystem</p>
        <h2 className="section-h section-h--center lora">
          One vision. <em className="lora-italic">Three apps. Growing together.</em>
        </h2>
        <p className="section-intro body-muted">
          EVĀ is built as a growing ecosystem. Start with EVĀ Health today. As each
          new app launches, your ecosystem grows with you.
        </p>
      </Reveal>
      <div className="eco-grid">
        {apps.map((app, i) => (
          <Reveal key={app.name} className={`eco-card ${app.cardClass}`} delay={i * 80}>
            <span className={`badge badge--${app.badgeType}`}>{app.badge}</span>
            <span className="eco-icon" aria-hidden="true" />
            <h3 className="eco-title lora">{app.name}</h3>
            <p className="eco-body body-muted">{app.body}</p>
            {app.cta === 'Download App' ? (
              <a href="#meet-health" className={app.ctaClass}>{app.cta}</a>
            ) : (
              <a href="#waiting-list" className={app.ctaClass}>{app.cta}</a>
            )}
            {app.note && <p className="eco-note lora-italic">{app.note}</p>}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ── Section 6: Stats Bar ─────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: '4', label: 'Cycle Phases tracked' },
    { value: '3', label: 'Apps in the ecosystem' },
    { value: 'Free', label: 'To get started' },
    { value: '1', label: 'Ecosystem for life' },
  ]
  return (
    <section className="stats-bar">
      {stats.map((s, i) => (
        <div key={s.label} className="stats-item">
          <span className="stats-value lora-italic">{s.value}</span>
          <span className="stats-label label-caps">{s.label}</span>
          {i < stats.length - 1 && <span className="stats-divider" aria-hidden="true" />}
        </div>
      ))}
    </section>
  )
}

/* ── Section 7: Testimonials ──────────────────────────────── */
function Testimonials() {
  const items = [
    { quote: 'EVĀ helped me finally connect the dots between my cycle and my energy. I stopped fighting my body and started working with it.', author: 'Amara K.', role: 'Cycle tracking user' },
    { quote: 'The AI coaching feels personal, not generic. It actually knows where I am in my cycle and adjusts its advice.', author: 'Priya S.', role: 'EVĀ Health beta user' },
    { quote: "I've tried every wellness app. EVĀ is the first one that made me feel understood, not optimized.", author: 'Lena M.', role: 'Amsterdam' },
    { quote: 'Simple, beautiful, and it actually works. I check EVĀ before I check anything else in the morning.', author: 'Yasmine R.', role: 'EVĀ Health user' },
  ]
  return (
    <section className="testimonials" id="community">
      <Reveal className="section-head">
        <p className="label-caps testimonials-label">What Women Are Saying</p>
        <h2 className="section-h section-h--center lora testimonials-h">
          Thousands of women. <em className="lora-italic">One intentional life.</em>
        </h2>
      </Reveal>
      <div className="testimonials-grid">
        {items.map((t, i) => (
          <Reveal key={t.author} className="testimonial-card" delay={i * 70}>
            <span className="testimonial-stars" aria-hidden="true">★★★★★</span>
            <p className="testimonial-quote">"{t.quote}"</p>
            <p className="testimonial-author">
              {t.author} <span className="testimonial-role">· {t.role}</span>
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal className="testimonials-img-wrap">
        <ImageFallback
          src="/images/women-community.png"
          alt="Three women laughing together"
          label="women-community.png"
          className="testimonials-img"
          loading="lazy"
        />
      </Reveal>
    </section>
  )
}

/* ── Section 8: Waiting List ──────────────────────────────── */
function WaitingList() {
  return (
    <section className="waitlist" id="waiting-list">
      <Reveal className="waitlist-inner">
        <p className="label-caps accent-label">Be the First to Know</p>
        <h2 className="section-h section-h--center lora">
          EVĀ Focus and EVĀ Scripture <em className="lora-italic">are coming.</em>
        </h2>
        <p className="section-intro body-muted">
          Join the waiting list and be the first to know when the next EVĀ apps launch.
          Your feedback shapes what we build next.
        </p>
        <WaitingListForm />
      </Reveal>
    </section>
  )
}

/* ── Section 9: Community ─────────────────────────────────── */
function CommunityCTA() {
  return (
    <section className="community-cta">
      <Reveal className="community-cta-inner">
        <p className="label-caps accent-label">The Community</p>
        <h2 className="section-h section-h--center lora">
          You're not doing <em className="lora-italic">this alone.</em>
        </h2>
        <p className="section-intro body-muted">
          EVĀ is more than apps. It's a community of women choosing to live with
          intention, sharing stories, supporting each other, and growing together.
        </p>
        <div className="community-cta-buttons">
          <a href="https://www.instagram.com/eva.circle/" target="_blank" rel="noopener noreferrer" className="btn-outline btn-outline--burgundy">Follow on Instagram</a>
          <a href="#newsletter" className="btn-burgundy">Join the Newsletter</a>
        </div>
      </Reveal>
    </section>
  )
}

/* ── Section 10: Newsletter ───────────────────────────────── */
function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <Reveal className="newsletter-inner">
        <p className="label-caps accent-label">Stay in Your Rhythm</p>
        <h2 className="section-h section-h--center lora">
          Wellness inspiration, <em className="lora-italic">delivered with intention.</em>
        </h2>
        <p className="section-intro body-muted">
          Cycle insights, app updates, and mindful living. Straight to your inbox.
          No noise. Just clarity.
        </p>
        <NewsletterForm />
        <p className="form-fine">
          No spam. Unsubscribe anytime. Your privacy is safe with us.
        </p>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <MeetHealth />
      <Philosophy />
      <FourPillars />
      <Ecosystem />
      <StatsBar />
      <Testimonials />
      <WaitingList />
      <CommunityCTA />
      <Newsletter />
    </>
  )
}
