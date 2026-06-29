import Reveal from '../components/Reveal'

export default function Privacy() {
  return (
    <section className="legal">
      <Reveal className="legal-inner">
        <p className="label-caps accent-label">Legal</p>
        <h1 className="legal-title lora-italic">Privacy Policy</h1>
        <p className="legal-meta">EVĀ — Privacy Policy · Last updated: June 2026 · Version 1.0</p>
        <p className="legal-article-p legal-intro">
          This Privacy Policy explains how EVĀ (Jayros, operated by Erma Rumuat) collects,
          uses, stores, and protects your personal data in accordance with the General Data
          Protection Regulation (GDPR / AVG) and Dutch privacy law.
        </p>

        <article className="legal-article">
          <h2 className="legal-h lora">1. Who We Are</h2>
          <p>Controller (Verwerkingsverantwoordelijke):</p>
          <ul className="legal-identity">
            <li>Jayros, trading as EVĀ</li>
            <li>Owner: Erma Rumuat</li>
            <li>The Netherlands</li>
            <li>Email: <a href="mailto:info@evā.com">info@evā.com</a></li>
            <li>KvK: 90559525</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">2. What Data We Collect</h2>
          <p>We collect the following categories of personal data:</p>
          <p><strong>Account data:</strong> Name (optional), email address, password (encrypted).</p>
          <p><strong>Health and wellness data (special category — explicit consent required):</strong> Menstrual cycle data, cycle phase information, nutrition logs, hydration logs, sleep data, movement data, supplement logs, weight (if entered), body-related photos uploaded for food analysis.</p>
          <p><strong>Usage data:</strong> App activity, feature usage, session duration, device type, operating system.</p>
          <p><strong>Communication data:</strong> Messages sent to EVĀ Chat (AI), support requests, email correspondence.</p>
          <p><strong>Payment data:</strong> Processed via Stripe. EVĀ does not store your full card details. Stripe acts as an independent data processor.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">3. Why We Collect Your Data (Legal Basis)</h2>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead><tr><th>Purpose</th><th>Legal Basis (GDPR Art.)</th></tr></thead>
              <tbody>
                <tr><td>Providing the app and its features</td><td>Performance of contract (Art. 6.1b)</td></tr>
                <tr><td>Processing health/cycle data</td><td>Explicit consent (Art. 9.2a)</td></tr>
                <tr><td>Improving the Platform</td><td>Legitimate interest (Art. 6.1f)</td></tr>
                <tr><td>Sending newsletters</td><td>Consent (Art. 6.1a)</td></tr>
                <tr><td>Processing payments</td><td>Performance of contract (Art. 6.1b)</td></tr>
                <tr><td>Legal obligations</td><td>Legal obligation (Art. 6.1c)</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">4. Health Data — Special Category</h2>
          <p>Your cycle data, nutrition data, and related health information are special category data under GDPR Article 9.</p>
          <p>We process this data only with your explicit consent, given during onboarding. You may withdraw this consent at any time by deleting your account or contacting us at <a href="mailto:info@evā.com">info@evā.com</a>.</p>
          <p>We do not sell, share, or use your health data for advertising purposes — ever.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">5. How We Use Your Data</h2>
          <ul className="legal-list">
            <li>To provide, personalize, and improve the EVĀ Platform</li>
            <li>To power AI coaching features (via Anthropic's Claude API)</li>
            <li>To send you cycle-aware tips and personalized recommendations</li>
            <li>To send newsletters and product updates (only with consent)</li>
            <li>To process subscription payments</li>
            <li>To respond to support requests</li>
            <li>To comply with legal obligations</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">6. Data Processors (Sub-processors)</h2>
          <p>We work with the following trusted third-party processors:</p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead><tr><th>Processor</th><th>Purpose</th><th>Location</th><th>DPA</th></tr></thead>
              <tbody>
                <tr><td>Supabase</td><td>Database and authentication</td><td>EU (Ireland)</td><td>Signed</td></tr>
                <tr><td>Vercel</td><td>Website hosting</td><td>EU</td><td>Signed</td></tr>
                <tr><td>Stripe</td><td>Payment processing</td><td>EU/US (SCCs)</td><td>Signed</td></tr>
                <tr><td>Anthropic</td><td>AI processing (EVĀ Chat)</td><td>US (SCCs)</td><td>Covered</td></tr>
              </tbody>
            </table>
          </div>
          <p>All processors outside the EU operate under Standard Contractual Clauses (SCCs) in accordance with GDPR Chapter V.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">7. Data Retention</h2>
          <p>We retain your data for as long as your account is active.</p>
          <p>Upon account deletion:</p>
          <ul className="legal-list">
            <li>Your personal data is deleted within 30 days</li>
            <li>Health and wellness data is deleted immediately</li>
            <li>Payment records are retained for 7 years as required by Dutch tax law (Belastingdienst)</li>
            <li>Anonymized, non-identifiable usage data may be retained for analytics</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">8. Your Rights Under GDPR</h2>
          <p>As a data subject you have the following rights:</p>
          <p><strong>Right of access (Art. 15):</strong> You may request a copy of all personal data we hold about you. EVĀ provides this via the in-app data export feature (JSON format).</p>
          <p><strong>Right to rectification (Art. 16):</strong> You may correct inaccurate data at any time via your account settings.</p>
          <p><strong>Right to erasure (Art. 17):</strong> You may delete your account and all associated data at any time via the in-app delete account function (requires typing "DELETE" to confirm).</p>
          <p><strong>Right to restriction (Art. 18):</strong> You may request that we restrict processing of your data in certain circumstances.</p>
          <p><strong>Right to data portability (Art. 20):</strong> You may export your data in JSON format via the app at any time.</p>
          <p><strong>Right to object (Art. 21):</strong> You may object to processing based on legitimate interest.</p>
          <p><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw at any time. This does not affect the lawfulness of processing before withdrawal.</p>
          <p>To exercise any of these rights, contact us at <a href="mailto:info@evā.com">info@evā.com</a>. We will respond within 30 days.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">9. Cookies</h2>
          <p>The EVĀ website uses cookies for:</p>
          <ul className="legal-list">
            <li>Essential functionality (session management)</li>
            <li>Analytics (only with consent)</li>
          </ul>
          <p>We do not use advertising or tracking cookies. You can manage cookie preferences via the cookie banner on your first visit.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">10. Data Security</h2>
          <p>We take the security of your data seriously. Measures include:</p>
          <ul className="legal-list">
            <li>Encrypted data storage (Supabase, EU region)</li>
            <li>HTTPS encryption on all data transmission</li>
            <li>Encrypted password storage</li>
            <li>Access controls limiting who can access personal data</li>
            <li>Regular security reviews</li>
          </ul>
          <p>In the event of a data breach that affects your rights, we will notify you and the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) within 72 hours as required by law.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">11. Complaints</h2>
          <p>If you have a complaint about how EVĀ handles your data, please contact us first at <a href="mailto:info@evā.com">info@evā.com</a>. If we cannot resolve it, you have the right to lodge a complaint with:</p>
          <ul className="legal-identity">
            <li>Autoriteit Persoonsgegevens (Dutch DPA)</li>
            <li><a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a></li>
            <li>Telephone: 088 1805 250</li>
          </ul>
        </article>
      </Reveal>
    </section>
  )
}
