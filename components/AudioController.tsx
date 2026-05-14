"use client";

import { useEffect } from "react";
import { Howl } from "howler";

export default function AudioController() {
  useEffect(() => {
    const ambient = new Howl({
      src: ["/audio/ambient.mp3"],
      volume: 0.3,
      loop: true,
      autoplay: true,
    });

    ambient.play();

    return () => {
      ambient.stop();
    };
  }, []);

  return null;
}
