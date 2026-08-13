import { useEffect, useState } from 'react'

export default function AnnouncementBar({ messages = [], ctaLabel }) {
  const [index, setIndex] = useState(0)
  const rotating = messages.length > 1

  useEffect(() => {
    if (!rotating) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [rotating, messages.length])

  if (messages.length === 0) return null

  return (
    <div className="announcement-bar" role="status">
      <p className="announcement-bar__message">{messages[index]}</p>
      {ctaLabel && (
        <a href="#" className="announcement-bar__cta" onClick={(e) => e.preventDefault()}>
          {ctaLabel}
        </a>
      )}
    </div>
  )
}
