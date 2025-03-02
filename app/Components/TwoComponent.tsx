"use client"
import { Box } from "@mui/material";
const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png"
];

const ImageGallery = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column"}}>
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`Gallery Image ${index + 1}`}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover"
          }}
        />
      ))}
    </Box>
  );
};

export default ImageGallery;
