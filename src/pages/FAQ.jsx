import Reveal from '../components/Reveal'

const GROUPS = [
  {
    title: 'About EVĀ',
    items: [
      { q: 'What is EVĀ?', a: 'EVĀ is a digital ecosystem of apps designed to help women live an intentional life through health, focus, faith, and community. The word EVĀ means "life." The first app in the ecosystem is EVĀ Health, available now on iOS.' },
      { q: 'What does EVĀ mean?', a: 'EVĀ is derived from the word meaning "life." The macron over the Ā is a deliberate design choice representing balance and intention — a pause before action.' },
      { q: 'Who is EVĀ for?', a: 'EVĀ is built for women who want to understand their bodies, build healthier habits, and live with more intention. Whether you are tracking your cycle for the first time or deepening an existing wellness practice, EVĀ meets you where you are.' },
      { q: 'Who built EVĀ?', a: 'EVĀ was built by Erma Engelien, a teacher, creator, and mother based in the Netherlands. She built EVĀ after discovering that her own health struggles were connected to living out of sync with her hormonal cycle.' },
    ],
  },
  {
    title: 'EVĀ Health',
    items: [
      { q: 'What is EVĀ Health?', a: 'EVĀ Health is a cycle-aware wellness app that tracks your menstrual cycle, nutrition, hydration, sleep, and movement. It uses AI-powered coaching to give you personalized, phase-specific guidance throughout your cycle.' },
      { q: 'Is EVĀ Health free?', a: 'EVĀ Health is free to download on iOS. The free tier includes 5 AI interactions per day. Paid subscription plans unlock unlimited AI coaching and full access to all features.' },
      { q: 'What are the subscription options?', a: 'EVĀ Free: free, 5 AI interactions per day. EVĀ Monthly: €7.99/month. EVĀ Quarterly: €16.95/3 months (save 29%). EVĀ Annual: €37.95/year (save 60%).' },
      { q: 'Is EVĀ Health available on Android?', a: 'Not yet. iOS is available now. Android is coming soon. Join the newsletter to be notified.' },
      { q: 'What are the 4 cycle phases?', a: 'EVĀ Health tracks the 4 biologically distinct phases of your menstrual cycle: Menstrual, Follicular, Ovulatory, and Luteal. Each phase comes with specific nutrition, movement, sleep, and energy recommendations tailored to where you actually are in your cycle.' },
      { q: 'Is EVĀ a medical app?', a: 'No. EVĀ Health is a personal wellness tool, not a medical device or healthcare service. Nothing in the app constitutes medical advice. Always consult a qualified healthcare professional for medical concerns.' },
      { q: 'Can I use EVĀ Health if I have an irregular cycle?', a: 'Yes. EVĀ Health works with irregular cycles and adjusts its predictions based on the data you log over time. The more you log, the more accurate EVĀ\'s insights become.' },
      { q: 'Can I use EVĀ Health if I am trying to conceive?', a: 'Yes. EVĀ Health includes a trying-to-conceive toggle on the cycle calendar, which highlights your fertile window and ovulation predictions. Please note these are estimates and should not replace medical fertility advice.' },
      { q: 'What is EVĀ Chat?', a: 'EVĀ Chat is your in-app AI wellness companion. You can chat with EVĀ about your nutrition, energy, cycle, or wellbeing. You can also send a photo of your meal and EVĀ will analyze it and log it for you. EVĀ Chat is powered by Claude AI (Anthropic).' },
    ],
  },
  {
    title: 'Privacy and Data',
    items: [
      { q: 'Is my health data safe?', a: 'Yes. Your data is stored securely on Supabase servers located in the EU (Ireland) and is encrypted in transit and at rest. We never sell your data. See our full Privacy Policy for details.' },
      { q: 'Who can see my data?', a: 'Only you. EVĀ staff do not access your personal health logs. We use anonymized, aggregated data only for improving the Platform.' },
      { q: 'Can I export my data?', a: 'Yes. You can export all your personal data as a JSON file at any time via the app settings. This is your right under GDPR Article 20.' },
      { q: 'Can I delete my account?', a: 'Yes. You can permanently delete your account and all associated data from within the app. Go to Settings → Delete Account and type "DELETE" to confirm. Deletion is permanent and irreversible.' },
      { q: 'Does EVĀ use my data for advertising?', a: 'No. EVĀ does not use your data for advertising and does not work with advertising networks.' },
    ],
  },
  {
    title: 'Payments and Subscriptions',
    items: [
      { q: 'How do I cancel my subscription?', a: 'Web subscriptions can be cancelled anytime via your account settings. iOS subscriptions are managed through your Apple ID → Subscriptions settings. Cancellation takes effect at the end of the current billing period.' },
      { q: 'Can I get a refund?', a: 'Under Dutch and EU consumer law, you have a 14-day right of withdrawal from the date of purchase. To request a refund, email info@evā.com within 14 days of purchase. See our Terms and Conditions for full details.' },
      { q: 'What payment methods are accepted?', a: 'EVĀ accepts all major credit and debit cards via Stripe, including Visa, Mastercard, and American Express. iDEAL is coming soon.' },
    ],
  },
  {
    title: 'The EVĀ Ecosystem',
    items: [
      { q: 'What other apps are coming?', a: 'EVĀ Focus (productivity, routines, and clarity — designed with ADHD-friendly principles) and EVĀ Scripture (Bible study, journaling, and spiritual growth — free forever) are both in development.' },
      { q: 'When will EVĀ Focus and EVĀ Scripture launch?', a: 'No confirmed date yet. Join the waiting list on the Apps page to be notified first.' },
      { q: 'Will EVĀ Scripture really be free?', a: 'Yes. Scripture should always be accessible to everyone. EVĀ Scripture will be free, always.' },
    ],
  },
  {
    title: 'Contact and Support',
    items: [
      { q: 'How do I contact EVĀ?', a: 'Email: info@evā.com. We aim to respond within 2 business days.' },
      { q: 'I found a bug. How do I report it?', a: 'Email info@evā.com with a description of the issue, your device type, and what you were doing when the bug occurred. Screenshots help.' },
      { q: 'I have a complaint. What do I do?', a: 'Email info@evā.com. We take every complaint seriously and will respond within 5 business days. If we cannot resolve it, you may contact the Dutch Consumer Authority (Autoriteit Consument & Markt) at acm.nl or use the EU ODR platform at ec.europa.eu/consumers/odr.' },
    ],
  },
]

export default function FAQ() {
  return (
    <section className="legal">
      <Reveal className="legal-inner">
        <p className="label-caps accent-label">Support</p>
        <h1 className="legal-title lora-italic">Frequently Asked Questions</h1>
        <p className="legal-meta">EVĀ — FAQ · Last updated: June 2026</p>

        {GROUPS.map((group) => (
          <article className="legal-article faq-group" key={group.title}>
            <h2 className="legal-h lora">{group.title}</h2>
            {group.items.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary className="faq-q">
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p className="faq-a">{item.a}</p>
              </details>
            ))}
          </article>
        ))}
      </Reveal>
    </section>
  )
}
