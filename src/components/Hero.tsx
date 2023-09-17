"use client";
import { useState, useEffect, useRef } from "react";
import p5 from "p5";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<typeof TOPOLOGY | null>(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: vantaRef.current,
          p5,
          color: 0x123fff,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef}
      className="flex justify-between items-center w-full min-h-[24rem] h-[80vh] px-6"
    >
      <div>
        <h1 className="text-6xl font-bold mb-4">Benjamin Sam</h1>
        <h5 className="text-2xl font-semibold">Software Engineer | Student</h5>
      </div>
    </section>
  );
}
