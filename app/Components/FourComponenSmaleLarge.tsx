import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';


const FourComponentSmaleLarge = () => {

const theme = useTheme();

  return (
    <Box
    sx={{
        padding: "0px 100px",
        position:"relative",
    }}
    >
     <Typography
          sx={{
            fontFamily: "Tajawal",
            fontSize:  "100px",
            fontWeight: "500",
            direction: "rtl",
            width: "100%",
          }}
        >
            خدماتنا
        </Typography>

         <Box sx={{
            display:"block",
            flexDirection:"column",
            position:"absolute",
            paddingBottom:"50px",
            background:"#EBEBEB",

            top:"50px",
            left:"100px",
         }}>
             <Box
          sx={{
            background:"#EBEBEB",
            width:"400px",
            padding:"100px 30px",

          }}
        >
          <hr style={{
            border:"1px solid black",
            marginBottom:"40px",

          }}/>

        <Typography
          sx={{
            fontFamily: "Tajawal",
            fontSize:  "40px",
            fontWeight: "500",
            direction: "rtl",
            width: "100%",
            marginBottom:"40px",

          }}
        >
            تتطوير مواقع الكترونية
        </Typography>

        <Typography
          sx={{
            fontFamily: "Tajawal",
            fontSize: "40px",
            fontWeight: "300",
            direction: "rtl",
            width: "100%",
            marginBottom:"40px",

          }}
        >
            نصمم ونطوّر مواقع إلكترونية سريعة، آمنة، ومتجاوبة مع جميع الأجهزة، لتقديم تجربة مستخدم فريدة تعكس هوية مشروعك.
        </Typography>

        </Box>
        <img style={{
            width:"400px",
            height:"400px",
            zIndex:"1000",
            position:"absolute",
            bottom:"-250px"
        }} src='woman-scooter.png'
         />   
      </Box>   
       

      <img style={{
            width:"400px",
            height:"400px",
            zIndex:"1000",
            position:"absolute",
            right:"205px",
            top:"72px",
            objectFit:"contain"
        }} src='woman-on-bike.png'
         />   

        {/*الجزء الثاني*/}
      <Box sx={{
            display:"block",
            flexDirection:"column",
            position:"absolute",
            paddingBottom:"50px",
            top:"400px",
            right:"100px",
         }}>

        
             <Box
          sx={{
            background:"#EBEBEB",
            width:"400px",
            padding:"100px 30px",

          }}
        >
          <hr style={{
            border:"1px solid black",
            marginBottom:"40px",

          }}/>

        <Typography
          sx={{
            fontFamily: "Tajawal",
            fontSize:  "40px",
            fontWeight: "500",
            direction: "rtl",
            width: "100%",
            marginBottom:"40px",

          }}
        >
             تطوير تطبيقات Android و iOS
        </Typography>

        <Typography
          sx={{
            fontFamily: "Tajawal",
            fontSize: "40px",
            fontWeight: "300",
            direction: "rtl",
            width: "100%",
            marginBottom:"40px",

          }}
        >
نبتكر تطبيقات ذكية تعمل على Android و iOS بأداء عالي وتصميم احترافي، لضمان تجربة سلسة لمستخدميك وتعزيز نجاح مشروعك.        </Typography>

        </Box>
       
      </Box>   
    </Box>
  )
}

export default FourComponentSmaleLarge
