import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('[EVĀ newsletter]', { email })
    // Open a pre-filled email to EVĀ with the subscriber's address.
    const subject = encodeURIComponent('Join the EVĀ newsletter')
    const body = encodeURIComponent(
      `Hi EVĀ,\n\nI'd like to join the newsletter.\n\nEmail: ${email}`
    )
    window.location.href = `mailto:info@evā.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="form-success lora-italic">
        You're in. Welcome to the rhythm.
      </p>
    )
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="field-pill newsletter-input"
        placeholder="your@email.com"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="btn-burgundy newsletter-btn">Join EVĀ</button>
    </form>
  )
}
