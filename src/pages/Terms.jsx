import Reveal from '../components/Reveal'

export default function Terms() {
  return (
    <section className="legal">
      <Reveal className="legal-inner">
        <p className="label-caps accent-label">Legal</p>
        <h1 className="legal-title lora-italic">Terms &amp; Conditions</h1>
        <p className="legal-meta">
          EVĀ — General Terms and Conditions · Last updated: June 2026 · Version 1.0
        </p>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 1 — Definitions</h2>
          <p>In these Terms and Conditions, the following definitions apply:</p>
          <dl className="legal-defs">
            <dt>EVĀ / We / Us</dt>
            <dd>
              Jayros, a sole proprietorship (eenmanszaak) registered with the Dutch
              Chamber of Commerce (Kamer van Koophandel), operated by Erma Rumuat, based
              in the Netherlands.
            </dd>
            <dt>Platform</dt>
            <dd>
              The EVĀ website (evā.com), the EVĀ Health mobile application, and any other
              digital products or services operated under the EVĀ brand.
            </dd>
            <dt>User / You</dt>
            <dd>Any natural person who accesses, registers for, or uses any part of the EVĀ Platform.</dd>
            <dt>Account</dt>
            <dd>A personal account created by a User to access the Platform.</dd>
            <dt>Content</dt>
            <dd>All text, data, images, information, and materials available on or through the Platform.</dd>
            <dt>Subscription</dt>
            <dd>A paid or free access plan that grants a User access to specific features of the Platform.</dd>
            <dt>App</dt>
            <dd>The EVĀ Health mobile application, available on iOS and (coming soon) Android.</dd>
          </dl>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 2 — Identity of the Company</h2>
          <ul className="legal-identity">
            <li>Jayros</li>
            <li>Trading under the name: EVĀ</li>
            <li>Owner: Erma Rumuat</li>
            <li>Country of establishment: The Netherlands</li>
            <li>Chamber of Commerce number: 90559525</li>
            <li>VAT number: NL004826193B63</li>
            <li>Email: <a href="mailto:info@evā.com">info@evā.com</a></li>
            <li>Website: evā.com</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 3 — Applicability</h2>
          <p>3.1 These Terms and Conditions apply to all use of the EVĀ Platform, including the website, the EVĀ Health app, and any future EVĀ products or services.</p>
          <p>3.2 By creating an account, downloading the app, or using any part of the Platform, you agree to these Terms and Conditions in full.</p>
          <p>3.3 EVĀ reserves the right to update these Terms and Conditions at any time. Changes will be communicated via email or in-app notification. Continued use of the Platform after notification constitutes acceptance of the updated terms.</p>
          <p>3.4 If any provision of these Terms is found to be invalid or unenforceable under applicable law, the remaining provisions remain in full force.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 4 — Account Registration</h2>
          <p>4.1 To access certain features of the Platform, you must create an account using a valid email address.</p>
          <p>4.2 You are responsible for maintaining the confidentiality of your account credentials. EVĀ is not liable for any loss resulting from unauthorized access to your account.</p>
          <p>4.3 You must be at least 16 years of age to create an account. Users between 16 and 18 years of age represent that they have obtained parental or guardian consent where required.</p>
          <p>4.4 You agree to provide accurate, current, and complete information during registration and to keep your account information up to date.</p>
          <p>4.5 EVĀ reserves the right to suspend or terminate accounts that violate these Terms, provide false information, or engage in harmful or abusive behavior.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 5 — The Platform and Services</h2>
          <p>5.1 EVĀ Health is a personal wellness application designed to support women in understanding their menstrual cycle, tracking nutrition, hydration, sleep, and movement, and receiving AI-powered lifestyle coaching.</p>
          <p>5.2 The Platform is provided for informational and personal wellness purposes only. Nothing on the Platform constitutes medical advice, diagnosis, or treatment. EVĀ is not a medical device or healthcare provider.</p>
          <p>5.3 Always consult a qualified healthcare professional before making decisions about your health, nutrition, or exercise based on information provided by the Platform.</p>
          <p>5.4 EVĀ uses artificial intelligence (Claude, developed by Anthropic) to power certain features including the EVĀ Chat and food analysis functionality. AI responses are generated automatically and may not always be accurate. Users should apply their own judgment.</p>
          <p>5.5 EVĀ reserves the right to modify, update, suspend, or discontinue any feature or service at any time, with reasonable notice where possible.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 6 — Subscriptions and Payments</h2>
          <p>6.1 EVĀ Health is available as a free tier with limited features and as a paid subscription with full access.</p>
          <p>6.2 Current subscription pricing (web):</p>
          <ul className="legal-list">
            <li>EVĀ Free: free, 5 AI interactions per day</li>
            <li>EVĀ Monthly: €7.99 per month</li>
            <li>EVĀ Quarterly: €16.95 per 3 months</li>
            <li>EVĀ Annual: €37.95 per year</li>
          </ul>
          <p>6.3 Prices are inclusive of applicable VAT unless stated otherwise.</p>
          <p>6.4 Payment is processed via Stripe. By subscribing, you authorize EVĀ to charge your selected payment method on a recurring basis.</p>
          <p>6.5 Subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date.</p>
          <p>6.6 iOS subscriptions purchased through the Apple App Store are subject to Apple's terms and are managed through your Apple ID settings.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 7 — Right of Withdrawal (Herroepingsrecht)</h2>
          <p>7.1 Under Dutch and European consumer law (Richtlijn 2011/83/EU), you have the right to withdraw from a subscription contract within 14 days of purchase without giving a reason.</p>
          <p>7.2 To exercise this right, contact us at <a href="mailto:info@evā.com">info@evā.com</a> within 14 days of your purchase. State your name, account email, and the subscription you wish to cancel.</p>
          <p>7.3 If you have explicitly requested access to premium features during the withdrawal period and have made use of them, EVĀ may charge a proportional amount for the service already rendered.</p>
          <p>7.4 Refunds will be processed within 14 days of receiving your withdrawal notice, using the same payment method used for purchase.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 8 — Intellectual Property</h2>
          <p>8.1 All content on the EVĀ Platform — including but not limited to the EVĀ name, logo, wordmark, app design, text, graphics, coaching content, and cycle phase system — is the intellectual property of Jayros / EVĀ and is protected under Dutch and international copyright law.</p>
          <p>8.2 You may not copy, reproduce, distribute, modify, or create derivative works from any EVĀ content without prior written permission.</p>
          <p>8.3 Your personal data and health logs remain your own. EVĀ does not claim ownership of the data you enter into the Platform.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 9 — User Responsibilities</h2>
          <p>9.1 You agree to use the Platform only for lawful purposes and in accordance with these Terms.</p>
          <p>9.2 You agree not to:</p>
          <ul className="legal-list">
            <li>Use the Platform in any way that could harm, disable, or impair its functionality</li>
            <li>Attempt to gain unauthorized access to any part of the Platform</li>
            <li>Use the Platform to distribute harmful, offensive, or illegal content</li>
            <li>Scrape, copy, or systematically extract data from the Platform</li>
            <li>Misrepresent your identity or affiliation</li>
          </ul>
          <p>9.3 EVĀ reserves the right to immediately suspend or terminate access for Users who violate these provisions.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 10 — Limitation of Liability</h2>
          <p>10.1 EVĀ is not liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use the Platform.</p>
          <p>10.2 EVĀ is not liable for health decisions made based on information provided by the Platform. All wellness content is informational only.</p>
          <p>10.3 EVĀ is not liable for interruptions in service caused by maintenance, technical failure, or circumstances beyond our reasonable control.</p>
          <p>10.4 To the maximum extent permitted by Dutch law, EVĀ's total liability to you for any claim arising from these Terms shall not exceed the amount you paid to EVĀ in the 12 months preceding the claim.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 11 — Governing Law and Disputes</h2>
          <p>11.1 These Terms are governed by Dutch law (Nederlands recht).</p>
          <p>11.2 Any disputes arising from these Terms shall be submitted to the competent court in the Netherlands, unless mandatory consumer law provides otherwise.</p>
          <p>11.3 As a consumer, you may also submit a dispute to the European Online Dispute Resolution platform at: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a></p>
          <p>11.4 EVĀ will always first attempt to resolve any complaint directly. Contact us at <a href="mailto:info@evā.com">info@evā.com</a> before initiating formal proceedings.</p>
        </article>

        <article className="legal-article">
          <h2 className="legal-h lora">Article 12 — Contact</h2>
          <ul className="legal-identity">
            <li>Jayros / EVĀ</li>
            <li>Email: <a href="mailto:info@evā.com">info@evā.com</a></li>
            <li>Website: evā.com</li>
            <li>KvK: 90559525</li>
          </ul>
        </article>
      </Reveal>
    </section>
  )
}
