"use client";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Button, styled, Typography } from "@mui/material";

const Background = styled(Box)({
  backgroundColor: "red",
  backgroundImage: "url('/main-movie-cover.webp')",
  width: "100%",
  height: "52vw",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "30%",
    background: "linear-gradient(to top, rgba(20, 20, 20, 1), transparent)",
    pointerEvents: "none",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "30%",
    background: "linear-gradient(to bottom, rgba(20, 20, 20, 1), transparent)",
    pointerEvents: "none",
  },
});

const Content = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  padding: theme.spacing(4, 8),
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export const FeaturedContent = () => {
  return (
    <Background>
      <Content>
        <Typography sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Em busca de uma vida melhor, a família Dutton empreende uma perigosa
          jornada pelas Grandes Planícies em direção às terras que um dia serão
          o Rancho Yellowstone.
        </Typography>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button startIcon={<PlayArrowIcon />} variant="contained">
            Assistir
          </Button>
          <Button
            startIcon={<InfoIcon />}
            variant="contained"
            color="secondary"
          >
            Mais informações
          </Button>
        </Box>
      </Content>
    </Background>
  );
};
