import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function HouseRules() {
  return (
    <section className="legal">
      <Reveal className="legal-inner">
        <p className="label-caps accent-label">Community</p>
        <h1 className="legal-title lora-italic">Community House Rules</h1>
        <p className="legal-meta">EVĀ — Community House Rules · Last updated: June 2026</p>
        <p className="legal-intro">
          EVĀ is a community built on intention, respect, and growth. These House Rules
          exist to protect every woman in this space and ensure EVĀ remains a safe,
          supportive, and empowering place for all.
        </p>
        <p className="legal-intro">
          By using the EVĀ Platform — including the app, community features, and any future
          EVĀ community spaces — you agree to these rules.
        </p>

        <article className="legal-article">
          <h2 className="legal-h lora">1. Be Kind. Always.</h2>
          <p>EVĀ is a judgment-free space. Treat every woman here with the same warmth and respect you would want for yourself.</p>
          <p>This means:</p>
          <ul className="legal-list">
            <li>No bullying, harassment, or personal attacks of any kind</li>
            <li>No body shaming, diet shaming, or unsolicited advice about anyone's body</li>
            <li>No discriminatory language based on race, religion, nationality, gender, age, sexual orientation, disability, or background</li>
            <li>No condescending or dismissive responses to other users' experiences</li>
          </ul>
          <p className="legal-emph lora-italic">Disagreement is allowed. Disrespect is not.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">2. Protect Privacy</h2>
          <ul className="legal-list">
            <li>Do not share other users' personal information, photos, or stories outside of EVĀ without explicit permission</li>
            <li>Do not screenshot or share private conversations from community spaces</li>
            <li>Respect that health and cycle data shared within the community is deeply personal</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">3. Keep It Real</h2>
          <ul className="legal-list">
            <li>Be honest in your interactions. Do not impersonate EVĀ, other users, or public figures</li>
            <li>Do not spread health misinformation. If you share health-related information, make clear it is your personal experience</li>
            <li>EVĀ is not a medical platform. Do not offer medical diagnoses or present personal opinions as medical fact</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">4. No Spam or Promotion</h2>
          <ul className="legal-list">
            <li>Do not promote external products, services, brands, or apps without prior written permission from EVĀ</li>
            <li>Do not post affiliate links, referral codes, or unsolicited advertisements</li>
            <li>Do not send mass or repeated unsolicited messages to other users</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">5. Protect Vulnerable Members</h2>
          <ul className="legal-list">
            <li>Be sensitive when discussing topics such as fertility, pregnancy loss, eating disorders, mental health, and chronic illness</li>
            <li>Do not share triggering content without a clear content warning</li>
            <li>If you are concerned about another user's wellbeing, contact us at <a href="mailto:info@evā.com">info@evā.com</a></li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">6. Respect the Platform</h2>
          <ul className="legal-list">
            <li>Do not attempt to hack, scrape, or exploit any part of the EVĀ Platform</li>
            <li>Do not use automated tools or bots to interact with the Platform</li>
            <li>Do not reproduce, copy, or redistribute EVĀ content without permission</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">7. Consequences</h2>
          <p>EVĀ reserves the right to:</p>
          <ul className="legal-list">
            <li>Remove any content that violates these rules without notice</li>
            <li>Issue warnings to users who violate these rules</li>
            <li>Suspend or permanently ban users who repeatedly or seriously violate these rules</li>
            <li>Report illegal activity to the appropriate authorities</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">8. Report a Problem</h2>
          <p>If you witness a violation of these House Rules, please report it to <a href="mailto:info@evā.com">info@evā.com</a>. We take every report seriously and will handle it with discretion.</p>
          <p className="legal-note">
            These House Rules are part of EVĀ's <Link to="/terms">Terms and Conditions</Link> and should be read alongside them.
          </p>
        </article>
      </Reveal>
    </section>
  )
}
