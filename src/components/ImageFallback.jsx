import { useState } from 'react'

/* Renders an <img>; if the source is missing it shows a warm branded
   placeholder so the layout never looks broken before assets are added. */
export default function ImageFallback({ src, alt, label, className = '', style, ...rest }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className={`img-fallback ${className}`} style={style} role="img" aria-label={alt}>
        <span className="img-fallback-label label-caps">{label || alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErrored(true)}
      {...rest}
    />
  )
}
