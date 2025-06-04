"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // On mount, check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded bg-secondary/80 hover:bg-accent/80 text-accent hover:text-white transition border border-accent/30"
    >
      {theme === 'dark' ? (
        <span>🌙</span>
      ) : (
        <span>☀️</span>
      )}
    </button>
  );
} 