"use client";
import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png"
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [background, setBackground] = useState<string>("black"); // التحكم في لون الخلفية
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const speedRef = useRef<number>(0.05);
  const positionRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);

  const animate = () => {
    if (!isPausedRef.current) {
      positionRef.current -= speedRef.current;
      if (positionRef.current <= -100) positionRef.current = 0;
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${positionRef.current}%)`;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => requestRef.current && cancelAnimationFrame(requestRef.current);
  }, []);

  const handlePause = (index: number) => {
    isPausedRef.current = true;
    setHoveredIndex(index);
  };

  const handleResume = () => {
    isPausedRef.current = false;
    setHoveredIndex(null); // استعادة اللون الأبيض والأسود
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        height: { xs: "200px", md: "300px" },
        background: background,
        transition: "background 1s ease"
      }}
      onTouchStart={handleResume}
      onMouseLeave={handleResume}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          width: "200%",
          position: "absolute",
          height: "100%",
          transition: "transform 0.1s linear"
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            style={{
              width: "20%",
              height: "100%",
              flexShrink: 0,
              position: "relative"
            }}
            onMouseEnter={() => handlePause(index)}
            onMouseLeave={handleResume}
            onTouchStart={(e) => {
              handlePause(index);
              e.stopPropagation();
            }}
            onTouchEnd={handleResume}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: hoveredIndex === index ? "none" : "grayscale(100%) brightness(0.7)",
                transition: "filter 0.5s ease"
              }}
            />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ImageGallery;
