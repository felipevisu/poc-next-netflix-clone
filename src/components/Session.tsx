import { Box, Typography } from "@mui/material";
import { Carousel } from "./Carousel";

export const Session = ({ title }: { title: string }) => {
  return (
    <Box sx={{ display: "block", overflow: "hidden" }} pb={4}>
      <Box py={2} px={6}>
        <Typography>{title}</Typography>
      </Box>
      <Carousel items={Array.from({ length: 22 }, (_, i) => i + 1)} />
    </Box>
  );
};
