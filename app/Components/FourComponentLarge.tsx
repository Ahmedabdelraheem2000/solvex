import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme, Paper } from '@mui/material';

const SolvexServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{ 
        bgcolor: '#121212', 
        borderRadius: 0,
        position: 'relative',
        padding: isMobile ? "30px 20px" : "50px 100px",
        overflow: 'hidden',
        fontFamily: 'Tajawal, sans-serif',
      }}
    >
              <Typography 
          variant={isMobile ? 'h3' : 'h2'} 
          component="h2"
          align="center" 
          sx={{ 
            mb: 10,
            marginTop:isMobile||isTablet?"10px":"-30px",
            fontWeight: 700,
            fontFamily: 'Tajawal, sans-serif',
            color: 'white',
            fontSize: isMobile ? '2rem' : '100px',
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -15,
              left: '50%',
              transform: 'translateX(-50%)',
              width: isMobile ? 120 : 180,
              height: 4,
              background: 'linear-gradient(90deg, #00C2FF, #7B5CFF)',
              borderRadius: 4
            }
          }}
        >
          خدماتنا
        </Typography>
      {/* Animated background elements */}
      <Box 
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,

          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,194,255,0.1) 0%, rgba(0,194,255,0) 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s infinite ease-in-out',
          '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(20px)' },
            '100%': { transform: 'translateY(0px)' },
          }
        }}
      />
      
      <Box 
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(123,92,255,0.1) 0%, rgba(123,92,255,0) 70%)',
          filter: 'blur(30px)',
          animation: 'float2 6s infinite ease-in-out',
          '@keyframes float2': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-15px)' },
            '100%': { transform: 'translateY(0px)' },
          }
        }}
      />
      
      {/* Grid pattern overlay */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          
          left: 0,
          opacity: 0.07,
          backgroundImage: `linear-gradient(to right, rgba(123,92,255,0.3) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(0,194,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          zIndex: 0
        }}
      />
      
      {/* Main content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}


        <Grid container spacing={5} direction={isMobile ? 'column' : 'row'}>
          {/* Web Development Service */}
          <Grid item xs={12} md={6}>
            <Paper elevation={8} sx={{ 
              background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.8) 100%)', 
              p: 4, 
              height: '100%',
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 10px 30px -10px rgba(0,194,255,0.5)'
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderTop: '1px solid rgba(0,194,255,0.5)',
                borderRight: '1px solid rgba(123,92,255,0.3)',
                borderRadius: 4,
                opacity: 0.5
              }
            }}>
              {/* Decorative circle */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,194,255,0.15) 0%, rgba(123,92,255,0.15) 100%)',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                textAlign: 'right',
                position: 'relative',
                zIndex: 1 
              }}>
                {/* Technology Icon */}
                <Box 
                  sx={{ 
                    width: 70, 
                    height: 70, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #00C2FF 0%, #7B5CFF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    boxShadow: '0 5px 15px rgba(0,194,255,0.3)',
                    mr: 'auto'
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 58, 
                      height: 58, 
                      borderRadius: '50%', 
                      bgcolor: 'rgba(0,0,0,0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography sx={{ 
                      fontFamily: 'Tajawal, sans-serif', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      color: '#00C2FF',
                      textAlign: 'center',
                      lineHeight: 1.2
                    }}>
                      مواقع<br/>الكترونية
                    </Typography>
                  </Box>
                </Box>
                
                {/* Service Title */}
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    fontFamily: 'Tajawal, sans-serif',
                    color: '#00C2FF',
                    textShadow: '0 0 10px rgba(0,194,255,0.3)',
                    fontSize: '2.5rem'
                  }}
                >
                  تطوير مواقع إلكترونية
                </Typography>
                
                {/* Service Description */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontFamily: 'Tajawal, sans-serif',
                    color: 'white',
                    lineHeight: 1.8,
                    fontWeight:"300",
                    fontSize: isMobile ? "18px" : "24px",
                    opacity: 0.9
                  }}
                >
                  نصمم ونطوّر مواقع إلكترونية سريعة، آمنة، ومتجاوبة مع جميع الأجهزة، لتقديم تجربة مستخدم فريدة تعكس هوية مشروعك.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Mobile App Development Service */}
          <Grid item xs={12} md={6}>
            <Paper elevation={8} sx={{ 
              background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.8) 100%)', 
              p: 4, 
              height: '100%',
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 10px 30px -10px rgba(123,92,255,0.5)'
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderBottom: '1px solid rgba(0,194,255,0.3)',
                borderLeft: '1px solid rgba(123,92,255,0.5)',
                borderRadius: 4,
                opacity: 0.5
              }
            }}>
              {/* Decorative circle */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,194,255,0.15) 0%, rgba(123,92,255,0.15) 100%)',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                textAlign: 'right',
                position: 'relative',
                zIndex: 1 
              }}>
                {/* Technology Icon */}
                <Box 
                  sx={{ 
                    width: 70, 
                    height: 70, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #7B5CFF 0%, #00C2FF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    boxShadow: '0 5px 15px rgba(123,92,255,0.3)',
                    mr: 'auto'
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 58, 
                      height: 58, 
                      borderRadius: '50%', 
                      bgcolor: 'rgba(0,0,0,0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography sx={{ 
                      fontFamily: 'Tajawal, sans-serif', 
                      fontSize: '0.8rem', 
                      fontWeight: 700, 
                      color: '#7B5CFF',
                      textAlign: 'center'
                    }}>
                      موبايل
                    </Typography>
                  </Box>
                </Box>
                
                {/* Service Title */}
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    fontFamily: 'Tajawal, sans-serif',
                    color: '#7B5CFF',
                    textShadow: '0 0 10px rgba(123,92,255,0.3)',
                    fontSize: '2.5rem'
                  }}
                >
                  Android و iOS تطوير تطبيقات 
                </Typography>
                
                {/* Service Description */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontFamily: 'Tajawal, sans-serif',
                    color: 'white',
                    lineHeight: 1.8,
                    fontSize: isMobile ? "18px" : "24px",
                    fontWeight:"300",
                    opacity: 0.9
                  }}
                >
                  نبتكر تطبيقات ذكية تعمل على Android و iOS بأداء عالي وتصميم احترافي، لضمان تجربة سلسة لمستخدميك وتعزيز نجاح مشروعك.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SolvexServices;