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
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const isTouchDeviceRef = useRef<boolean>(false);

  // تحديد ما إذا كان الجهاز يعمل باللمس
  useEffect(() => {
    isTouchDeviceRef.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  // تكييف سرعة الحركة بناءً على حجم الشاشة
  const getScrollSpeed = () => {
    // سرعة أبطأ للشاشات الصغيرة
    if (window.innerWidth < 768) {
      return 0.015;
    }
    // سرعة متوسطة للشاشات المتوسطة
    if (window.innerWidth < 1200) {
      return 0.02;
    }
    // سرعة أسرع للشاشات الكبيرة
    return 0.025;
  };

  // وظيفة الرسوم المتحركة الرئيسية
  const animate = () => {
    if (!isPausedRef.current) {
      // حساب السرعة المناسبة
      const speed = getScrollSpeed();
      
      // تحديث الموضع
      positionRef.current -= speed;
      
      // إعادة تعيين الموضع عند الوصول للنهاية
      if (positionRef.current <= -100) {
        positionRef.current = 0;
      }
      
      // تطبيق الموضع الحالي على العنصر
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${positionRef.current}%)`;
      }
    }
    
    requestRef.current = requestAnimationFrame(animate);
  };

  // بدء الحركة عند تحميل المكون
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    
    // تنظيف عند إزالة المكون
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // إدارة تفاعلات الماوس
  const handleMouseEnter = () => {
    if (!isTouchDeviceRef.current) {
      isPausedRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDeviceRef.current) {
      isPausedRef.current = false;
    }
  };

  // إدارة تفاعلات اللمس
  const handleTouchStart = () => {
    isPausedRef.current = true;
  };

  const handleTouchEnd = () => {
    // نستأنف الحركة بعد فترة قصيرة من رفع الإصبع 
    // هذا يسمح بالنقر على الصور دون استئناف التمرير فوراً
    setTimeout(() => {
      isPausedRef.current = false;
    }, 1000);
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        height: { xs: "200px", sm: "250px", md: "300px" }, // ارتفاع متغير حسب حجم الشاشة
        background: "black"
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          width: "200%",
          position: "absolute",
          height: "100%"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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
            <div 
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "8px",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                fontSize: "14px",
                textAlign: "center",
                opacity: hoveredIndex === index ? 1 : 0,
                transition: "opacity 0.5s ease"
              }}
            >
              {`Image ${index % images.length + 1}`}
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ImageGallery;