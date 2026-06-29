import Reveal from '../components/Reveal'
import ImageFallback from '../components/ImageFallback'

const PILLARS = [
  { title: 'Faith', sub: 'Spiritual growth', body: 'Growing through Scripture, reflection, and community.' },
  { title: 'Focus', sub: 'Clarity & tasks', body: 'Intentional routines and healthy discipline.' },
  { title: 'Health', sub: 'Body balance', body: 'Cycle-aware coaching and AI-powered insights.' },
  { title: 'Community', sub: 'Shared journey', body: 'Real women, real stories, moving forward together.' },
]

export default function About() {
  return (
    <>
      <section className="full-hero">
        <ImageFallback
          src="/images/women-overhead.png"
          alt="Three women lying with heads together, smiling up"
          label="women-overhead.png"
          className="full-hero-img"
          loading="lazy"
        />
        <div className="full-hero-overlay" />
        <div className="full-hero-content">
          <h1 className="full-hero-h lora-italic">EVĀ · Your Life, Aligned.</h1>
        </div>
      </section>

      <section className="about-body">
        <Reveal className="about-body-inner">
          <p className="label-caps accent-label">The Philosophy</p>
          <h2 className="section-h lora">
            Helping women live <em className="lora-italic">with intention.</em>
          </h2>
          <p className="philosophy-body">
            EVĀ is a digital ecosystem of focused apps designed to support every area
            of a woman's life. From spiritual growth and daily structure to health and
            self-care, each part of EVĀ helps you live with intention instead of chaos.
          </p>
          <p className="philosophy-body body-muted">
            We believe a strong life is not built in extremes, but in daily alignment.
            Small acts. Repeated. With purpose. EVĀ means "life", and our promise is to
            help women build a life of faith, focus, health, and purpose, one intentional
            day at a time.
          </p>
        </Reveal>
      </section>

      <section className="about-pillars">
        <Reveal className="section-head">
          <p className="label-caps accent-label">The Four Pillars</p>
          <h2 className="section-h section-h--center lora">
            Every area of your life, <em className="lora-italic">supported.</em>
          </h2>
        </Reveal>
        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} className="pillar-card" delay={i * 70}>
              <span className="pillar-icon" aria-hidden="true" />
              <h3 className="pillar-title lora">{p.title}</h3>
              <p className="pillar-sub lora-italic">{p.sub}</p>
              <p className="pillar-body body-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="founder" id="founder">
        <div className="founder-story">
          <Reveal className="founder-head">
            <p className="label-caps accent-label">The Founder</p>
            <h2 className="founder-hook lora-italic">
              I didn't build EVĀ because I saw a gap in the market.
              I built it because I lived the gap.
            </h2>
          </Reveal>

          <Reveal className="story-body" delay={80}>
            <p className="story-lead">
              I built these apps because I felt short. I missed structure. I missed
              balance. I wanted to create an ecosystem where <em className="lora-italic">life itself</em> is
              at the core. Not productivity, not performance, not perfection. Life.
            </p>

            <h3 className="story-h lora-italic">The moment everything made sense.</h3>
            <p>
              In 2025, at 35 years old, I came to understand something that changed
              everything.
            </p>
            <p>
              I have complex PTSD. And I had lived with it my entire life without knowing
              what it was, or even what to call it.
            </p>
            <p>
              After six months of EMDR therapy, things that had never made sense suddenly
              did. Why I couldn't focus. Why I carried what looked like ADHD. Why reading
              scripture gave me a clarity and peace I couldn't find anywhere else. Why my
              cortisol was always elevated. Why, no matter how hard I trained or how
              disciplined I was, my body held on to weight. Why my hormones felt like they
              were working against me. Because for years, in many ways, my nervous system
              had been in survival mode.
            </p>
            <p className="story-emph lora-italic">
              Therapy didn't just heal me. It taught me.
            </p>
            <p>
              I began to understand my body not as something broken, but as something that
              had been responding, intelligently, to everything it had been through.
            </p>

            <h3 className="story-h lora-italic">That understanding became EVĀ Health.</h3>
            <p>
              EVĀ is a cycle-aware wellness app built for women who want to understand
              themselves. Not just track symptoms, but develop real <em className="lora-italic">body literacy</em>.
              To understand why your energy shifts. Why some weeks you can move mountains
              and other weeks you need stillness. To stop fighting your rhythm and start
              flowing with it.
            </p>
            <p>
              I have so many more ideas for what EVĀ can become: tools, features, and a
              community where women support each other through the same kind of journey
              I've been on. Because I know I'm not alone in this.
            </p>

            <blockquote className="pull-quote lora-italic">
              Our bodies are not meant to be consistent.<br />
              They are meant to flow, and there is a consistency in that flow,<br />
              if we learn to read it.
            </blockquote>

            <h3 className="story-h lora-italic">Still building. Still becoming.</h3>
            <p>
              I came to this with a background in design, teaching, and coding. I built
              these apps myself, with AI as my co-builder, because I had the skills, the
              vision, and now, finally, the self-knowledge to bring them to life.
            </p>
            <p>
              I am still on this journey. Still learning. Still healing. Still building.
            </p>
            <p>
              EVĀ is my answer to that. And I hope it becomes yours too.
            </p>

            <div className="signature">
              <img
                src="/images/erma.jpg"
                alt="Erma Engelien, Founder of EVĀ"
                className="signature-photo"
              />
              <div className="signature-text">
                <span className="signature-name lora-italic">Erma Engelien</span>
                <span className="signature-role label-caps">Founder, EVĀ · Netherlands</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-vision">
        <Reveal className="about-vision-inner">
          <p className="label-caps accent-label">Vision &amp; Mission</p>
          <div className="vision-grid">
            <div className="vision-block">
              <h3 className="vision-h lora">Vision</h3>
              <p className="vision-body">
                A world where every woman understands her body deeply enough to live,
                work, and heal on her own terms. In flow, not in force.
              </p>
            </div>
            <div className="vision-block">
              <h3 className="vision-h lora">Mission</h3>
              <p className="vision-body">
                EVĀ exists to give women the tools, knowledge, and community to develop
                real body literacy. We build cycle-aware experiences that honor the full
                complexity of a woman's inner world: her hormones, her nervous system,
                her rhythm, so she can stop fighting herself and start flowing with who
                she truly is.
              </p>
              <p className="vision-note lora-italic">
                We are not a diet app. We are not a productivity tool.<br />
                We are a companion for the woman who is ready to come home to herself.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
