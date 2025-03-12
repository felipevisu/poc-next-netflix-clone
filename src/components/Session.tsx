import { Box, Typography } from "@mui/material";
import { Carousel } from "./Carousel";

export const Session = ({ title }: { title: string }) => {
  return (
    <Box sx={{ display: "block", overflow: "hidden" }} px={6} pb={4}>
      <Box py={2}>
        <Typography>{title}</Typography>
      </Box>
      <Carousel />
    </Box>
  );
};
