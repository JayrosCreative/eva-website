import Reveal from '../components/Reveal'
import ImageFallback from '../components/ImageFallback'
import NewsletterForm from '../components/NewsletterForm'

export default function Community() {
  return (
    <>
      <section className="full-hero">
        <ImageFallback
          src="/images/women-community.png"
          alt="Three women laughing together"
          label="women-community.png"
          className="full-hero-img full-hero-img--community"
          loading="lazy"
        />
        <div className="full-hero-overlay" />
        <div className="full-hero-content">
          <h1 className="full-hero-h lora-italic">You're not doing this alone.</h1>
        </div>
      </section>

      <section className="community-body">
        <Reveal className="community-body-inner">
          <p className="label-caps accent-label">The Community</p>
          <h2 className="section-h section-h--center lora">
            A community of <em className="lora-italic">intention.</em>
          </h2>
          <p className="section-intro body-muted">
            EVĀ is more than apps. It's a community of women choosing to live with
            intention, sharing stories, supporting each other, and growing together.
            Real women, real journeys, moving forward side by side.
          </p>
          <div className="community-cta-buttons">
            <a href="https://www.instagram.com/eva.circle/" target="_blank" rel="noopener noreferrer" className="btn-outline btn-outline--burgundy">Follow on Instagram</a>
            <a href="mailto:info@evā.com?subject=Join%20the%20EV%C4%80%20Newsletter" className="btn-burgundy">Join the Newsletter</a>
          </div>
        </Reveal>
      </section>

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
    </>
  )
}
