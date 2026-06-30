import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const INTERESTS = [
  { id: 'eva_focus', label: 'EVĀ Focus' },
  { id: 'eva_scripture', label: 'EVĀ Scripture' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EDGE_FN = 'https://iuzdkvzuipbjidunfpuu.supabase.co/functions/v1/hyper-service'

export default function WaitingListForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState([])
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState('idle') // idle | loading | success | duplicate | error
  const [fieldError, setFieldError] = useState('')
  const submitting = useRef(false)

  const toggleInterest = (id) => {
    setInterests(curr =>
      curr.includes(id) ? curr.filter(i => i !== id) : [...curr, id]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting.current) return

    if (!firstName.trim()) return setFieldError('Please enter your first name.')
    if (!EMAIL_RE.test(email)) return setFieldError('Please enter a valid email address.')
    if (!consent) return setFieldError('Please accept the privacy policy to continue.')

    setFieldError('')
    submitting.current = true
    setStatus('loading')

    const { error: dbError } = await supabase
      .from('waiting_list')
      .insert({
        first_name: firstName.trim(),
        email: email.trim().toLowerCase(),
        interested_in: interests,
      })

    if (dbError) {
      console.error('[EVĀ] Supabase insert error:', dbError)
      submitting.current = false
      if (dbError.code === '23505') {
        setStatus('duplicate')
      } else {
        setStatus('error')
      }
      return
    }

    try {
      await fetch(EDGE_FN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName.trim(),
          email: email.trim().toLowerCase(),
          interested_in: interests,
        }),
      })
    } catch (err) {
      console.error('[EVĀ] Confirmation email failed:', err)
    }

    submitting.current = false
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="waitlist-success">
        <span className="waitlist-success-icon" aria-hidden="true">✓</span>
        <h3 className="waitlist-success-h lora-italic">You're on the list.</h3>
        <p className="waitlist-success-body">Check your inbox — we've sent you a confirmation.</p>
        <p className="waitlist-success-spam">Can't find it? Check your spam folder.</p>
      </div>
    )
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        className="field-pill"
        placeholder="First name"
        aria-label="First name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        disabled={status === 'loading'}
      />
      <input
        type="email"
        className="field-pill"
        placeholder="your@email.com"
        aria-label="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={status === 'loading'}
      />

      <p className="waitlist-question">What are you most excited for?</p>
      <div className="waitlist-toggles">
        {INTERESTS.map(opt => (
          <button
            type="button"
            key={opt.id}
            className={`toggle-pill ${interests.includes(opt.id) ? 'toggle-pill--on' : ''}`}
            onClick={() => toggleInterest(opt.id)}
            aria-pressed={interests.includes(opt.id)}
            disabled={status === 'loading'}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <label className="waitlist-consent">
        <input
          type="checkbox"
          className="waitlist-consent-check"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
          disabled={status === 'loading'}
        />
        <span className="waitlist-consent-text">
          I agree to the{' '}
          <Link to="/privacy" className="waitlist-consent-link">EVĀ Privacy Policy</Link>
          {' '}and consent to receiving emails.
        </span>
      </label>

      {fieldError && <p className="waitlist-field-error">{fieldError}</p>}
      {status === 'duplicate' && (
        <p className="waitlist-field-error">You're already on the list.</p>
      )}
      {status === 'error' && (
        <p className="waitlist-field-error">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        className="btn-burgundy waitlist-submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Join the Waiting List'}
      </button>
      <p className="form-fine">No spam. We'll only contact you when your app is ready.</p>
    </form>
  )
}
