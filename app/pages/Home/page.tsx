"use client";
import FourComponentLarge from "@/app/Components/FourComponentLarge";
import FourComponentLargeMediem from "@/app/Components/FourComponentLargeMeduiem";
import FourComponentMediem from "@/app/Components/FourComponentMeduiem";
import FourComponentSmaleLarge from "@/app/Components/FourComponenSmaleLarge";
import FourComponentSmaleCompoMeduiem from "@/app/Components/FourComponenSmaleCompoMeduiem";
import OneComponent from "@/app/Components/OneComponent";
import AboutComponent from "@/app/Components/ThreeComponent";
import TwoComponent from "@/app/Components/TwoComponent";

import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import FourComponentSmaleMeduiem from "@/app/Components/FourComponentSmaleMeduiem";

const Home = () => {
  
  // const isFourComponentLarge = useMediaQuery('(min-width:1454px)');
  // const isFourComponentLargeMediem = useMediaQuery('(min-width:1382px) and (max-width:1453px)');
  // const isFourComponentMediem = useMediaQuery('(min-width:1284px) and (max-width:1381px)');
  // const isFourComponentSmaleLarge = useMediaQuery('(min-width:1216px) and (max-width:1283px)');
  // const isFourComponentSmaleMeduiem = useMediaQuery('(min-width:1034px) and (max-width:1215px)'); // ✅ تم إضافته
  // const isFourComponentSmaleCompoMeduiem = useMediaQuery('(min-width:931px) and (max-width:1033px)'); // ✅ تم إضافته

  return (
      <Box>
          <OneComponent />
          <TwoComponent />
          <AboutComponent />

          {/* {!isFourComponentLarge && isFourComponentLargeMediem && <FourComponentLargeMediem />}
          {!isFourComponentLarge && !isFourComponentLargeMediem && isFourComponentMediem && <FourComponentMediem />}
          {!isFourComponentLarge && !isFourComponentLargeMediem && !isFourComponentMediem && isFourComponentSmaleLarge && <FourComponentSmaleLarge />}
          {!isFourComponentLarge && !isFourComponentLargeMediem && !isFourComponentMediem && !isFourComponentSmaleLarge && isFourComponentSmaleMeduiem && <FourComponentSmaleMeduiem />} */}

          <FourComponentLarge />
          
      </Box>
  );
};

export default Home;
