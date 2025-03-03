"use client";
import { Box } from "@mui/material";
import { useState, useEffect, useRef, useMemo } from "react";

const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png"
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [background, setBackground] = useState<string>("black");
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const speedRef = useRef<number>(0.03); // سرعة أعلى للحركة
  const positionRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // تخزين مصفوفة الصور المكررة لتحسين الأداء
  const duplicatedImages = useMemo(() => [...images, ...images], []);
  
  const animate = (timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;
    
    if (!isPausedRef.current && containerRef.current) {
      // حركة أكثر سلاسة باستخدام وقت دلتا
      positionRef.current -= speedRef.current * (delta / 16.67);
      
      // تأثير التكرار اللانهائي
      if (positionRef.current <= -(100 / images.length) * images.length) {
        positionRef.current += (100 / images.length) * images.length;
      }
      
      containerRef.current.style.transform = `translateX(${positionRef.current}%)`;
    }
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    
    // تنظيف عند إزالة المكون
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlePause = (index: number) => {
    isPausedRef.current = true;
    setHoveredIndex(index);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleResume = () => {
    isPausedRef.current = false;
    setHoveredIndex(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // حساب نسبة عرض الصورة بناءً على عدد الصور
  const imageWidth = useMemo(() => 100 / images.length, []);

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        height: {
          xs: "300px",
          sm: "300px",
          md: "500px",
          lg: "500px"
        },
        background: background,
        transition: "background 1s ease"
      }}
      onMouseLeave={handleResume}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          width: `${200}%`,
          position: "absolute",
          height: "100%",
          willChange: "transform",
          transform: "translateX(0%)"
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            style={{
              width: `${imageWidth}%`,
              height: "100%",
              flexShrink: 0,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            onMouseEnter={() => handlePause(index % images.length)}
            onClick={() => handlePause(index % images.length)}
            onTouchStart={(e) => {
              e.preventDefault();
              handlePause(index % images.length);
            }}
            onMouseLeave={handleResume}
            onTouchEnd={handleResume}
          >
            <img
              src={src}
              alt={`عمل فني ${(index % images.length) + 1}`}
              loading="lazy"
              style={{
                maxWidth: "95%",      // استخدام 95% من العرض المتاح لتجنب التلامس مع الصور المجاورة
                maxHeight: "95%",     // استخدام 95% من الارتفاع المتاح
                objectFit: "contain", // لعرض الصورة كاملة بدون قص
                transition: "all 0.3s ease",
                WebkitTapHighlightColor: "transparent", // إزالة تأثير الوميض عند النقر
                userSelect: "none",   // منع تحديد النص/الصورة
                transform: hoveredIndex === index % images.length ? "scale(1.05)" : "scale(1)",
              }}
              draggable="false"      // منع السحب
            />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ImageGallery;