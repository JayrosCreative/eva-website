import { useState, useEffect, useCallback } from 'react'

export default function Carousel({ slides, className = '' }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length)
  }, [slides.length])

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [next])

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-window">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === current ? 'carousel-slide--active' : ''}`}
            aria-hidden={i !== current}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="carousel-img"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={prev} aria-label="Previous slide">&#8249;</button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={next} aria-label="Next slide">&#8250;</button>
      </div>
    </div>
  )
}
