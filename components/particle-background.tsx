// components/ParticlesHero.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticlesHero() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const isDark = resolvedTheme === "dark";
  const particleColor = isDark ? "#ffffff" : "#1b2d45";
  const linkColor = isDark ? "#ffffff" : "#374ec7";

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: isDark ? 0.4 : 0.3,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 2,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 60,
        },
        opacity: { value: isDark ? 0.5 : 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    [isDark, particleColor, linkColor]
  );

  if (!init) return null;

  return (
    <Particles
      key={resolvedTheme}
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0"
    />
  );
}
