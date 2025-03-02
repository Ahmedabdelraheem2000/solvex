"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

const words = [
  "تصميمك", "إبداعك", "خيالك", "رؤيتك", "ابتكارك", "أسلوبك", "فنّك", "مستقبلك", "مشروعك",
  "رسالتك", "علامتك", "تفكيرك", "أفكارك", "مخططاتك", "مواهبك", "شغفك", "أهدافك", "إلهامك",
  "إبداعك", "تجربتك", "رؤياك", "مبادرتك", "مشاعرك", "خُططك", "مهاراتك", "إحساسك", "أسلوبك الفريد",
  "رؤيتك الخاصة", "طموحك", "عبقريتك", "ذكاؤك"
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (charIndex < words[index].length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // فترة انتظار بعد كتابة الكلمة
        }
      }
      setDisplayedWord(words[index].substring(0, charIndex));
    };

    const speed = isDeleting ? 50 : 100; // سرعة الحذف أسرع من الكتابة
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: isMobile ? "flex-start" : "center", // تغيير في الهاتف للبدء من الأعلى
      minHeight: "100vh",
      padding: isMobile ? "16px 16px 0" : "24px",
      boxSizing: "border-box",
      overflow: "hidden",
      position: "relative",
      paddingTop: isMobile ? "40px" : "24px" // زيادة المسافة العلوية في الهاتف
    }}>
      
      {/* SolveX Logo */}
      <Typography sx={{ 
        fontFamily: "Tajawal", 
        fontWeight: "500", 
        color: "#000", 
        fontSize: isMobile ? "28px" : isTablet ? "28px" : "30px", // تكبير حجم الخط في الهاتف
        textAlign: "center", 
        marginBottom: isMobile ? "20px" : "50px", // تقليل المسافة في الهاتف للحفاظ على المساحة
        position: "relative",
        zIndex: 2
      }}>
        SolveX
      </Typography>

      {/* Main Content with Animation */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        position: "relative",
        height: isMobile ? "75vh" : "60vh", // زيادة المساحة في الهاتف
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: isMobile ? 0 : "20px" // إزالة الهامش العلوي في الهاتف
      }}>
        
        {/* Main Text */}
        <Typography
          sx={{
            fontFamily: "Tajawal",
            fontWeight: "300",
            color: "#000",
            fontSize: isMobile ? "10vw" : isTablet ? "6vw" : "clamp(40px, 8vw, 120px)", // تكبير النص في الهاتف
            textAlign: "center",
            zIndex: 1,
            direction: "rtl",
            unicodeBidi: "plaintext",
            lineHeight: isMobile ? 1.5 : 1.2, // زيادة المسافة بين السطور في الهاتف
            padding: isMobile ? "0 10px" : "0",
            width: "100%",
            position: "relative",
            top: isMobile ? "-10%" : "0" // رفع النص للأعلى قليلاً في الهاتف
          }}
        >
          حول{" "}
          <span style={{ 
            color: "#000", 
            fontWeight: "700", 
            direction: "rtl", 
            unicodeBidi: "plaintext",
            display: isMobile ? "block" : "inline"
          }}>
            {displayedWord}
            {showCursor && " |"} 
            {!isMobile && <br/>}
          </span>{" "}
          إلى واقع
        </Typography>

        {/* Animated Image */}
        <Box
          component="img"
          src="magenta.png"
          alt="Background"
          sx={{
            width: isMobile ? "70vw" : isTablet ? "35vw" : "clamp(150px, 40vw, 500px)", // تكبير الصورة في الهاتف
            height: "auto",
            position: "absolute",
            zIndex: 0,
            opacity: 0.9,
            animation: "float 3s ease-in-out infinite",
            top: isMobile ? "55%" : "50%", // تعديل موضع الصورة في الهاتف
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: isMobile ? "none" : "500px" // إزالة الحد الأقصى للحجم في الهاتف
          }}
        />
      </Box>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%);
          }
          50% {
            transform: translate(-50%, calc(-50% - 15px));
          }
          100% {
            transform: translate(-50%, -50%);
          }
        }

        @media (max-width: 600px) {
          @keyframes float {
            0% {
              transform: translate(-50%, -50%);
            }
            50% {
              transform: translate(-50%, calc(-50% - 12px));
            }
            100% {
              transform: translate(-50%, -50%);
            }
          }
        }
      `}</style>
    </Box>
  );
};

export default Home;