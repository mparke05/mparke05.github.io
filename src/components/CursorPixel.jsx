import { useEffect, useRef } from 'react'

const PIXEL     = 10
const RADIUS    = 88
const MAX_ALPHA = 0.15
const DECAY     = 0.005   // per frame @ 60fps → ~0.5s fade-out

export default function CursorPixel() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    // Map<"px,py", currentAlpha>
    const pixels = new Map()
    let raf

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // On mouse move, boost any pixel within radius to its target alpha
    const onMove = (e) => {
      const mx = e.clientX
      const my = e.clientY
      const x0 = Math.floor((mx - RADIUS) / PIXEL) * PIXEL
      const y0 = Math.floor((my - RADIUS) / PIXEL) * PIXEL
      const x1 = Math.ceil((mx  + RADIUS) / PIXEL) * PIXEL
      const y1 = Math.ceil((my  + RADIUS) / PIXEL) * PIXEL

      for (let px = x0; px < x1; px += PIXEL) {
        for (let py = y0; py < y1; py += PIXEL) {
          const dist = Math.hypot(px + PIXEL / 2 - mx, py + PIXEL / 2 - my)
          if (dist > RADIUS) continue
          const t      = 1 - dist / RADIUS
          const target = t * t * MAX_ALPHA
          const key    = `${px},${py}`
          // only raise alpha, never lower it — decay handles the fade
          if (target > (pixels.get(key) ?? 0)) pixels.set(key, target)
        }
      }
    }

    // Each frame: draw all active pixels and decay them
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const [key, alpha] of pixels) {
        const [px, py] = key.split(',').map(Number)
        ctx.fillStyle  = `rgba(28,53,87,${alpha.toFixed(3)})`
        ctx.fillRect(px, py, PIXEL - 1, PIXEL - 1)

        const next = alpha - DECAY
        if (next <= 0.002) pixels.delete(key)
        else               pixels.set(key, next)
      }

      raf = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('mousemove', onMove)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize',    resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        inset:         0,
        pointerEvents: 'none',
        zIndex:        9999,
        mixBlendMode:  'multiply',
      }}
    />
  )
}
