"use client";
import OneComponent from "@/app/Components/OneComponent";
import TwoComponent from "@/app/Components/TwoComponent";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";


const Home = () => {
  


  return (
      <Box>
          <OneComponent/>
          <TwoComponent/>
      </Box>
  );
};

export default Home;