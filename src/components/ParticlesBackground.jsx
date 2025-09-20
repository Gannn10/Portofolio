// src/components/ParticlesBackground.jsx
import React, { useRef, useEffect, useCallback } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  let particles = [];
  const maxParticles = 750;
  const connectionDistance = 100;
  const particleColor = '#40acffff'; 

  const createParticle = useCallback((canvas, x, y) => {
    return {
      x: x || Math.random() * canvas.width,
      y: y || Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      },
    };
  }, []);

  const drawParticle = useCallback((ctx, particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particleColor;
    ctx.fill();
  }, []);

  const updateParticle = useCallback((canvas, particle) => {
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;

    if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
      particle.velocity.x = -particle.velocity.x;
    }
    if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
      particle.velocity.y = -particle.velocity.y;
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p1 => {
      updateParticle(canvas, p1);
      drawParticle(ctx, p1);

      particles.forEach(p2 => {
        const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 188, 212, ${1 - (distance / connectionDistance)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, [particles, drawParticle, updateParticle]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight; // Set height to document scroll height

    // Reinitialize particles on resize to avoid weird behavior, or adjust their positions
    // For simplicity, we re-create them.
    particles = [];
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(canvas));
    }
    if (!animationFrameId.current) { // Ensure animation restarts if it was stopped
        animationFrameId.current = requestAnimationFrame(animate);
    }
  }, [createParticle, animate, particles]); // Add particles to dependency array

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    resizeCanvas(); // Initial resize and particle creation

    window.addEventListener('resize', resizeCanvas);

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, resizeCanvas, createParticle]);

  return <canvas id="backgroundCanvas" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticlesBackground;