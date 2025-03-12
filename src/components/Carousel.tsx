"use client";

import { Box, styled } from "@mui/material";

const CarouselItem = styled(Box)({
  background: "#ddd",
  minWidth: "320px",
  height: "180px",
  flex: 1,
});

export const Carousel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        flexWrap: "nowrap",
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((key) => (
        <CarouselItem key={key} />
      ))}
    </Box>
  );
};
