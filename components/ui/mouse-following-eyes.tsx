"use client" 

import * as React from "react"
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MouseFollowingEyesProps {
  className?: string;
  eyeSize?: string;
  pupilSize?: string;
}

export const MouseFollowingEyes: React.FC<MouseFollowingEyesProps> = ({
  className,
  eyeSize = "w-16 h-16 sm:w-20 sm:h-20",
  pupilSize = "w-6 h-6 sm:w-7 sm:h-7",
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const eye1Ref = useRef<HTMLDivElement>(null);
  const eye2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("inline-flex items-center justify-center gap-3 select-none", className)}
    >
      <Eye
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        selfRef={eye1Ref}
        otherRef={eye2Ref}
        eyeSize={eyeSize}
        pupilSize={pupilSize}
      />
      <Eye
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        selfRef={eye2Ref}
        otherRef={eye1Ref}
        eyeSize={eyeSize}
        pupilSize={pupilSize}
      />
    </div>
  );
};

interface EyeProps {
  mouseX: number;
  mouseY: number;
  selfRef: React.RefObject<HTMLDivElement | null>;
  otherRef: React.RefObject<HTMLDivElement | null>;
  eyeSize: string;
  pupilSize: string;
}

const Eye: React.FC<EyeProps> = ({ mouseX, mouseY, selfRef, eyeSize, pupilSize }) => {
  const pupilRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  const updateCenter = () => {
    if (!selfRef.current) return;
    const rect = selfRef.current.getBoundingClientRect();
    setCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  useEffect(() => {
    updateCenter();
    window.addEventListener("resize", updateCenter);
    window.addEventListener("scroll", updateCenter, { passive: true });
    return () => {
      window.removeEventListener("resize", updateCenter);
      window.removeEventListener("scroll", updateCenter);
    };
  }, []);

  useEffect(() => {
    updateCenter();

    const dx = mouseX - center.x;
    const dy = mouseY - center.y;
    const angle = Math.atan2(dy, dx);

    const maxMove = 14;
    const pupilX = Math.cos(angle) * maxMove;
    const pupilY = Math.sin(angle) * maxMove;

    if (pupilRef.current) {
      pupilRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    }
  }, [mouseX, mouseY, center]);

  return (
    <div
      ref={selfRef}
      className={cn(
        "relative bg-white border-3 border-zinc-900 rounded-full flex items-center justify-center shadow-lg shadow-black/10 overflow-hidden",
        eyeSize
      )}
    >
      <div
        ref={pupilRef}
        className={cn(
          "absolute bg-zinc-900 rounded-full transition-transform duration-75 flex items-center justify-center",
          pupilSize
        )}
      >
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-1 right-1"></div>
      </div>
    </div>
  );
};

export default MouseFollowingEyes;
