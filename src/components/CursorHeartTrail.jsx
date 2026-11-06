import React, { useEffect, useRef } from 'react';

/**
 * Gentle floating heart cursor trail effect for desktop pointer devices.
 * Uses lightweight canvas rendering to guarantee 60fps without DOM thrashing.
 */
export default function CursorHeartTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse/desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    let lastSpawn = 0;

    const addParticle = (x, y) => {
      const now = performance.now();
      if (now - lastSpawn < 40) return; // Cap particle spawn rate
      lastSpawn = now;

      particles.push({
        x: x + (Math.random() * 8 - 4),
        y: y + (Math.random() * 8 - 4),
        vx: (Math.random() - 0.5) * 0.8,
        vy: -Math.random() * 1.2 - 0.6,
        size: Math.random() * 8 + 6,
        opacity: 0.85,
        rotation: (Math.random() - 0.5) * 0.6,
        color: Math.random() > 0.5 ? '#ff758c' : '#ffb6c1',
      });

      if (particles.length > 25) {
        particles.shift();
      }
    };

    const handleMouseMove = (e) => {
      addParticle(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Draw little heart shape on canvas
    const drawHeart = (c, x, y, size, color, opacity, rotation) => {
      c.save();
      c.translate(x, y);
      c.rotate(rotation);
      c.globalAlpha = opacity;
      c.fillStyle = color;

      c.beginPath();
      const topCurveHeight = size * 0.3;
      c.moveTo(0, topCurveHeight);
      // top left curve
      c.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      // bottom left curve
      c.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
      // bottom right curve
      c.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      // top right curve
      c.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      c.closePath();
      c.fill();
      c.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.018;
        p.size *= 0.98;

        if (p.opacity <= 0.05 || p.size <= 2) {
          particles.splice(i, 1);
        } else {
          drawHeart(ctx, p.x, p.y, p.size, p.color, p.opacity, p.rotation);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 select-none hidden md:block"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
