import { useState } from 'react'

const INTERESTS = [
  { id: 'focus', label: 'EVĀ Focus: routines & clarity' },
  { id: 'scripture', label: 'EVĀ Scripture: faith & reflection' },
]

export default function WaitingListForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const toggleInterest = (id) => {
    setInterests((curr) =>
      curr.includes(id) ? curr.filter((i) => i !== id) : [...curr, id]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder — wire to a real mailing list later.
    console.log('[EVĀ waiting list]', { firstName, email, interests })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="form-success lora-italic">
        Thank you! You're on the list. We'll be in touch when it's ready.
      </p>
    )
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="field-pill"
        placeholder="First name"
        aria-label="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="email"
        className="field-pill"
        placeholder="your@email.com"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <p className="waitlist-question">What are you most excited for?</p>
      <div className="waitlist-toggles">
        {INTERESTS.map((opt) => (
          <button
            type="button"
            key={opt.id}
            className={`toggle-pill ${interests.includes(opt.id) ? 'toggle-pill--on' : ''}`}
            onClick={() => toggleInterest(opt.id)}
            aria-pressed={interests.includes(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <button type="submit" className="btn-burgundy waitlist-submit">
        Join the Waiting List
      </button>
      <p className="form-fine">
        No spam. We'll only contact you when your app is ready.
      </p>
    </form>
  )
}
