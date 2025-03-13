"use client";

import { Box, styled } from "@mui/material";

const CarouselItem = styled(Box)({
  background: "#ddd",
  minWidth: "calc(20% - 8px)",
  margin: "0 4px",
  flex: 1,
  position: "relative",
  borderRadius: "4px",
  "&:after": {
    content: '""',
    width: "100%",
    display: "block",
    paddingBottom: "66%",
  },
});

export const Carousel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((key) => (
        <CarouselItem key={key} />
      ))}
    </Box>
  );
};
