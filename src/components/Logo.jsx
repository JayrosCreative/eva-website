/* EVĀ wordmark logo.
   variant: "burgundy" (default, for light backgrounds) | "cream" (for dark backgrounds)
   health: when true, renders the "EVĀ HEALTH" lockup (wordmark + HEALTH caption).
   Pass a `height` (px) — width scales automatically from the ~2.13:1 wordmark. */
export default function Logo({ variant = 'burgundy', height, health = false, className = '', alt }) {
  const src =
    variant === 'cream'
      ? '/images/eva-wordmark-cream.png'
      : '/images/eva-wordmark-burgundy.png'

  const label = alt || (health ? 'EVĀ Health' : 'EVĀ')
  // When height is omitted, CSS controls sizing (e.g. responsive hero wordmark).
  const markStyle = height != null ? { height } : undefined
  const captionStyle = height != null ? { fontSize: Math.max(11, Math.round(height * 0.32)) } : undefined

  return (
    <span className={`eva-logo ${health ? 'eva-logo--health' : ''} ${className}`}>
      <img
        src={src}
        alt={label}
        className="eva-logo-mark"
        style={markStyle}
        draggable="false"
      />
      {health && (
        <span
          className={`eva-logo-caption ${variant === 'cream' ? 'eva-logo-caption--cream' : ''}`}
          style={captionStyle}
        >
          HEALTH
        </span>
      )}
    </span>
  )
}
