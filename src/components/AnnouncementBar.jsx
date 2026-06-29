import { useState } from 'react'

const STORAGE_KEY = 'eva_announcement_dismissed'

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })

  if (dismissed) return null

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
    setDismissed(true)
  }

  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        <span className="announcement-text">
          EVĀ Health is free on iOS · Download now
        </span>
        <a href="#meet-health" className="announcement-link">→ Download</a>
      </div>
      <button className="announcement-close" aria-label="Dismiss announcement" onClick={dismiss}>
        ×
      </button>
    </div>
  )
}
