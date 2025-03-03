import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';

const AboutSolveX = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    // فتح صفحة الفيسبوك في نافذة/تبويب جديد
    window.open('https://www.facebook.com/profile.php?id=61573820335374', '_blank');
  };

  return (
    // تعديل Box الرئيسي
    <Box sx={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      maxWidth: "100vw", // إضافة حد أقصى للعرض
      minHeight: isMobile ? "auto" : "600px",
      background: "black",
      padding: isMobile ? "30px 20px" : "50px 100px",
      overflow: "hidden",
      position: "relative",
      boxSizing: "border-box", // التأكد أن الـpadding لا يضاف إلى العرض
    }}>
      {/* Background dots */}
      <Box sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.1,
        backgroundImage: "radial-gradient(circle, #06b6d4 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        pointerEvents: "none",
      }} />

      {/* Glowing orbs - decorative elements */}
      <Box sx={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(0,0,0,0) 70%)",
        filter: "blur(20px)",
        animation: "pulse 8s infinite alternate",
        "@keyframes pulse": {
          "0%": { opacity: 0.3 },
          "100%": { opacity: 0.7 }
        }
      }} />
      
      <Box sx={{
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(0,0,0,0) 70%)",
        filter: "blur(20px)",
        animation: "pulse2 6s infinite alternate",
        "@keyframes pulse2": {
          "0%": { opacity: 0.4 },
          "100%": { opacity: 0.8 }
        }
      }} />

      {/* Image */}
      <Box sx={{
        width: isMobile ? "100%" : "45%",
        height: isMobile ? "300px" : "100%",
        marginBottom: isMobile ? "30px" : 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}>
        <Box sx={{
          position: "absolute",
          width: "90%",
          height: "90%",
          borderRadius: "10px",
          background: "linear-gradient(45deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)",
          filter: "blur(1px)",
          transform: "rotate(-2deg)",
        }} />
        <Box sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}>
        <img 
          style={{
            height: "auto",
            width: "100%",
            maxHeight: isMobile ? "280px" : "550px",
            objectFit: "contain",
            borderRadius: "5px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.02)" : "scale(1)",
          }} 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src='about.png'
          alt="SolveX Logo"
        />
        </Box>
      </Box>

      {/* Text Content */}
      <Box sx={{
        width: isMobile ? "100%" : "48%",
        color: "#fff",
        textAlign: "right",
        position: "relative",
        zIndex: 2,
      }}>
        <Typography
          sx={{
            fontFamily: "Tajawal",
            fontSize: isMobile ? "48px" : "90px",
            fontWeight: "300",
            direction: "rtl",
            width: "100%",
            marginBottom: "15px",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              right: "0",
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, rgba(6,182,212,1) 0%, rgba(168,85,247,1) 100%)",
              borderRadius: "2px",
            }
          }}
        >
         حول شركة <br/>SolveX
        </Typography>

        <Typography
          sx={{
            fontFamily: "Tajawal",
            fontSize: isMobile ? "18px" : "24px",
            fontWeight: "300",
            direction: "rtl",
            width: "100%",
            lineHeight: 1.6,
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            "& span": {
              background: "linear-gradient(90deg, rgba(6,182,212,1) 0%, rgba(168,85,247,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "500",
            }
          }}
        >
          هي شركة تقنية <span>رائدة</span> تعمل على تحويل الأفكار إلى حلول رقمية مبتكرة. نقدم خدمات تصميم وتطوير المواقع والمتاجر الإلكترونية بأعلى الجودة. نهدف لتحقيق أهدافك التجارية وتعزيز وجودك الرقمي. انضم إلينا اليوم واكتشف الفرق مع <span>SolveX</span>
        </Typography>

        <Box sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "flex-end",
        }}>
          <Box
            component="button"
            onClick={handleContactClick}
            sx={{
              background: "linear-gradient(45deg, rgba(6,182,212,1) 0%, rgba(168,85,247,1) 100%)",
              color: "white",
              border: "none",
              borderRadius: "30px",
              padding: isMobile ? "10px 25px" : "12px 35px",
              fontSize: isMobile ? "16px" : "18px",
              fontFamily: "Tajawal",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 5px 15px rgba(6,182,212,0.3)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 8px 20px rgba(6,182,212,0.5)",
              },
              "&:active": {
                transform: "translateY(0)",
              }
            }}
          >
            تواصل معنا
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSolveX;