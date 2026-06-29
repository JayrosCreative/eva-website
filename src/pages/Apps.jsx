import { useState, useEffect, useCallback } from 'react'
import Reveal from '../components/Reveal'
import Logo from '../components/Logo'
import AppStoreButtons from '../components/AppStoreButtons'
import WaitingListForm from '../components/WaitingListForm'

const HEALTH_FEATURES = [
  'Build healthy habits',
  'Track your cycle across 4 phases',
  'Nutrition and hydration tracking',
  'Cycle-aware AI coaching',
  'Smart streaks to stay consistent',
  'Sustainable daily routines',
]

const SCREENS = [
  {
    label: 'Home',
    src: '/images/1apppage.png',
    alt: 'EVĀ Health home screen',
    title: 'Your day, at a glance',
    desc: 'Wake up to your cycle phase, calorie summary, and a personalized coaching tip. Everything you need, without the noise.',
  },
  {
    label: 'Cycle Tracker',
    src: '/images/2apppage.png',
    alt: 'Cycle tracker calendar',
    title: 'Know where you are in your cycle',
    desc: 'A full calendar view with logged and predicted periods, ovulation, fertile window, and phase details tailored to you.',
  },
  {
    label: 'AI Coach',
    src: '/images/3apppage.png',
    alt: 'Ask EVĀ AI coaching chat',
    title: 'Ask EVĀ anything',
    desc: 'Your AI wellness coach knows your cycle, your goals, and what you have logged. Ask about nutrition, hormones, or how you\'re feeling.',
  },
  {
    label: 'Progress',
    src: '/images/4apppage.png',
    alt: 'Progress charts and stats',
    title: 'See your patterns over time',
    desc: 'Track your nutrition, sleep, movement, and water across days, weeks, and months. Real data, real insight.',
  },
  {
    label: 'Food Log',
    src: '/images/5apppage.png',
    alt: 'Food photo logging',
    title: 'Log meals with a photo',
    desc: 'Snap a photo of your meal and EVĀ analyses it for you. Logging that actually fits into real life.',
  },
  {
    label: 'Tips',
    src: '/images/6apppage.png',
    alt: 'Wellness library and personalised tips',
    title: 'Science-backed tips, personalised for you',
    desc: 'A wellness library that updates with your cycle phase. Articles on nutrition, movement, mindset, and more, written for where you actually are.',
  },
]

const PLANS = [
  {
    label: 'FREE FOREVER',
    accent: false,
    name: 'EVĀ Free',
    price: 'Free',
    per: '',
    save: null,
    badge: null,
    featured: false,
    cta: 'Download Free',
    ctaStyle: 'btn-outline btn-outline--burgundy',
    ctaNote: null,
    features: [
      'Cycle tracking',
      'Food, water & sleep logging',
      '5 AI interactions per day',
      'Tips & wellness library',
      'Progress dashboard',
    ],
  },
  {
    label: 'MONTHLY',
    accent: true,
    name: 'EVĀ Monthly',
    price: '€7.99',
    per: '/ month',
    save: null,
    badge: null,
    featured: false,
    cta: 'Get Monthly',
    ctaStyle: 'btn-outline btn-outline--burgundy',
    ctaNote: null,
    features: [
      'Everything in Free',
      'Unlimited AI coaching',
      'Photo food analysis',
      'Personalized weekly tips',
      'Priority support',
    ],
  },
  {
    label: 'QUARTERLY',
    accent: true,
    name: 'EVĀ Quarterly',
    price: '€16.95',
    per: '/ 3 months',
    save: 'Save 29%',
    badge: 'MOST POPULAR',
    featured: true,
    cta: 'Get Quarterly',
    ctaStyle: 'btn-burgundy',
    ctaNote: null,
    features: [
      'Everything in Free',
      'Unlimited AI coaching',
      'Photo food analysis',
      'Personalized weekly tips',
      'Priority support',
    ],
  },
  {
    label: 'ANNUAL',
    accent: true,
    name: 'EVĀ Annual',
    price: '€37.95',
    per: '/ year',
    save: 'Save 60%',
    badge: null,
    featured: false,
    cta: 'Get Annual',
    ctaStyle: 'btn-outline btn-outline--burgundy',
    ctaNote: 'Best value',
    features: [
      'Everything in Free',
      'Unlimited AI coaching',
      'Photo food analysis',
      'Personalized weekly tips',
      'Priority support',
    ],
  },
]

function AppScreenShowcase() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive(a => (a + 1) % SCREENS.length)
  }, [])

  useEffect(() => {
    const t = setInterval(next, 4500)
    return () => clearInterval(t)
  }, [next])

  const screen = SCREENS[active]

  return (
    <section className="app-showcase">
      <Reveal className="app-showcase-inner">
        <p className="label-caps accent-label">See It in Action</p>
        <div className="app-showcase-tabs">
          {SCREENS.map((s, i) => (
            <button
              key={s.label}
              className={`app-showcase-tab ${i === active ? 'app-showcase-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="app-showcase-display">
          {SCREENS.map((s, i) => (
            <div
              key={s.label}
              className={`app-showcase-frame ${i === active ? 'app-showcase-frame--active' : ''}`}
              aria-hidden={i !== active}
            >
              <img src={s.src} alt={s.alt} className="app-showcase-img" loading="lazy" />
            </div>
          ))}
          <div className="app-showcase-caption">
            <h3 className="app-showcase-title lora">{screen.title}</h3>
            <p className="app-showcase-desc body-muted">{screen.desc}</p>
          </div>
        </div>
        <div className="app-showcase-dots">
          {SCREENS.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === active ? 'carousel-dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${SCREENS[i].label}`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Pricing() {
  return (
    <section className="pricing">
      <Reveal className="pricing-inner">
        <p className="label-caps accent-label">Simple Pricing</p>
        <h2 className="pricing-h lora-italic">
          Start free. <em className="lora-italic">Upgrade when you're ready.</em>
        </h2>
        <p className="pricing-sub body-muted">
          EVĀ Health is free to download on iOS. Premium plans unlock unlimited
          AI coaching and full access to every feature.
        </p>
        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
            >
              {plan.badge && (
                <div className="price-popular-badge">{plan.badge}</div>
              )}
              <p className={`price-label label-caps ${plan.accent ? 'accent-label' : ''}`}>
                {plan.label}
              </p>
              <div className="price-amount-row">
                <span className="price-amount">{plan.price}</span>
                {plan.per && <span className="price-per">{plan.per}</span>}
              </div>
              {plan.save && (
                <span className="price-save">{plan.save}</span>
              )}
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="price-check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`${plan.ctaStyle} price-cta`}>{plan.cta}</a>
              {plan.ctaNote && (
                <p className="price-cta-note">{plan.ctaNote}</p>
              )}
            </div>
          ))}
        </div>
        <p className="pricing-fine">
          All prices include VAT · Cancel anytime · iOS subscriptions managed via Apple · Web subscriptions via Stripe
        </p>
      </Reveal>
    </section>
  )
}

export default function Apps() {
  return (
    <>
      <section className="page-hero">
        <Reveal>
          <p className="label-caps accent-label">The Ecosystem</p>
          <h1 className="page-hero-h lora-italic">The EVĀ Ecosystem</h1>
          <p className="page-hero-sub body-muted">
            One app available now. Two more on the way. Your intentional life,
            growing with you.
          </p>
        </Reveal>
      </section>

      {/* EVĀ Health intro */}
      <section className="app-detail app-detail--health">
        <Reveal className="app-health-intro">
          <Logo health variant="burgundy" height={52} className="section-logo" />
          <span className="badge badge--available">Available Now on iOS</span>
          <p className="body-muted app-health-sub">
            The first app in the EVĀ ecosystem. Build healthy habits, track your
            wellbeing, and create sustainable routines guided by cycle-aware AI coaching.
          </p>
          <ul className="feature-list feature-list--inline">
            {HEALTH_FEATURES.map((f) => (
              <li key={f}><span className="feature-check" aria-hidden="true">✓</span>{f}</li>
            ))}
          </ul>
          <AppStoreButtons />
          <p className="form-fine">Free to download · iOS available now · Android coming soon</p>
        </Reveal>
      </section>

      {/* Screenshots first — build desire before price */}
      <AppScreenShowcase />

      {/* Pricing */}
      <Pricing />

      {/* EVĀ Focus — coming soon */}
      <section className="app-detail app-detail--white">
        <Reveal className="app-coming-inner">
          <span className="badge badge--soon">Coming Soon</span>
          <h2 className="section-h lora">EVĀ Focus</h2>
          <p className="body-muted section-intro">
            Build routines, stay organized, and create a life of purpose. Designed for
            the way women think. Intentional structure without the overwhelm.
          </p>
          <WaitingListForm />
        </Reveal>
      </section>

      {/* EVĀ Scripture — coming soon */}
      <section className="app-detail">
        <Reveal className="app-coming-inner">
          <span className="badge badge--soon">Coming Soon</span>
          <h2 className="section-h lora">EVĀ Scripture</h2>
          <p className="body-muted section-intro">
            Study Scripture deeply, journal your reflections, and grow together.
          </p>
          <p className="eco-note lora-italic">Free forever, because Scripture should always be accessible.</p>
          <WaitingListForm />
        </Reveal>
      </section>
    </>
  )
}
