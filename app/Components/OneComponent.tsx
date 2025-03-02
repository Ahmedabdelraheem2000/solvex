"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

const words = [
  "تصميمك", "إبداعك", "خيالك", "رؤيتك", "ابتكارك", "أسلوبك", "فنّك", "مستقبلك", "مشروعك",
  "رسالتك", "علامتك", "تفكيرك", "أفكارك", "مخططاتك", "مواهبك", "شغفك", "أهدافك", "إلهامك",
  "إبداعك", "تجربتك", "رؤياك", "مبادرتك", "مشاعرك", "خُططك", "مهاراتك", "إحساسك", "أسلوبك الفريد",
  "رؤيتك الخاصة", "طموحك", "عبقريتك", "ذكاؤك"
];

const OneComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // للتمرير إلى الأسفل عند النقر
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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
      justifyContent: isMobile ? "flex-start" : "center",
      minHeight: isMobile?"70vh":"100vh",
      padding: isMobile ? "16px 16px 0" : "24px",
      boxSizing: "border-box",
      overflow: "hidden",
      position: "relative",
      paddingTop: isMobile ? "20px" : "24px"
    }}>
      
      {/* SolveX Logo */}
      <Typography sx={{ 
        fontFamily: "Tajawal", 
        fontWeight: "500", 
        color: "#000", 
        fontSize: isMobile ? "28px" : isTablet ? "28px" : "30px",
        textAlign: "center", 
        marginBottom: isMobile ? "0px" : "50px",
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
        height: isMobile ? "75vh" : "60vh",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: isMobile ? 0 : "20px"
      }}>
        
        {/* Animated Image - Moving this before text so text can overlay it */}
        <Box
          component="img"
          src="magenta.png"
          alt="Background"
          sx={{
            width: isMobile ? "75vw" : isTablet ? "45vw" : "clamp(200px, 45vw, 550px)",
            height: "auto",
            position: "absolute",
            zIndex: 0,
            opacity: 0.9,
            animation: "float 3s ease-in-out infinite",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: isMobile ? "none" : "550px"
          }}
        />
        
        {/* Text Container - Without blur effect */}
        <Box sx={{
          position: "absolute",
          zIndex: 1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          borderRadius: "12px",
          padding: isMobile ? "10px 5px" : "15px 10px",
          maxWidth: isMobile ? "90%" : "80%"
        }}>
          <Typography
            sx={{
              fontFamily: "Tajawal",
              fontWeight: "300",
              color: "#000",
              fontSize: isMobile ? "10vw" : isTablet ? "6vw" : "clamp(40px, 7vw, 100px)",
              textAlign: "center",
              direction: "rtl",
              unicodeBidi: "plaintext",
              lineHeight: isMobile ? 1.4 : 1.2,
              width: "100%"
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
        </Box>
      </Box>

      {/* مؤشر التمرير لأسفل */}
      <Box 
        onClick={scrollToContent}
        sx={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 10,
          textAlign: "center",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateX(-50%) translateY(5px)",
          }
        }}
      >
        {/* أيقونة الماوس المتحركة */}
        <Box sx={{
          width: "30px",
          height: "50px",
          border: "2px solid #000",
          borderRadius: "20px",
          position: "relative",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}>
          <Box sx={{
            width: "6px",
            height: "10px",
            backgroundColor: "#000",
            borderRadius: "3px",
            position: "absolute",
            top: "8px",
            animation: "scrollAnim 2s infinite"
          }} />
        </Box>
        

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

        @keyframes scrollAnim {
          0% {
            opacity: 1;
            top: 8px;
          }
          50% {
            opacity: 1;
            top: 32px;
          }
          60% {
            opacity: 0;
            top: 32px;
          }
          61% {
            opacity: 0;
            top: 8px;
          }
          100% {
            opacity: 1;
            top: 8px;
          }
        }
      `}</style>
    </Box>
  );
};

export default OneComponent;