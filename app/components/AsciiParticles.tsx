"use client";
import { useEffect, useRef } from "react";

const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=~`[]{}|;:',.<>?/";
const FONT_SIZE = 14;
const SPEED = 0.16; // Faster
const AMPLITUDE = 8; // Bigger wave
const FREQ_X = 6; // More frequent
const FREQ_Y = 3; // More frequent
const DRIFT_SPEED = 0.5; // Horizontal drift

function randomChar() {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

export default function AsciiParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let cols = Math.floor(width / FONT_SIZE);
    let rows = Math.floor(height / FONT_SIZE);

    // Generate initial grid
    let grid: string[][] = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, randomChar)
    );

    // Animate
    let animationFrame: number;
    let t = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.fillStyle = "#3B82F6";
      ctx.globalAlpha = 0.7;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Animate wave + horizontal drift
          let offsetY = Math.sin((x / FREQ_X) + t + y / FREQ_Y) * AMPLITUDE;
          let offsetX = Math.cos((y / FREQ_Y) + t * DRIFT_SPEED) * 2;
          ctx.fillText(grid[y][x], x * FONT_SIZE + offsetX, y * FONT_SIZE + offsetY + FONT_SIZE);
        }
      }
      t += SPEED;
      animationFrame = requestAnimationFrame(draw);
    }
    draw();

    // Randomly mutate grid (faster)
    const interval = setInterval(() => {
      for (let i = 0; i < 60; i++) {
        let rx = Math.floor(Math.random() * cols);
        let ry = Math.floor(Math.random() * rows);
        grid[ry][rx] = randomChar();
      }
    }, 50);

    // Resize handler
    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.floor(width / FONT_SIZE);
      rows = Math.floor(height / FONT_SIZE);
      grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, randomChar)
      );
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.5,
      }}
    />
  );
} 