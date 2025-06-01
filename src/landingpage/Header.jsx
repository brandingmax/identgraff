import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header() {
  const navigate = useNavigate();

  const headlines = [
    "Encontre gráficas e papelarias locais de confiança, perto de você.",
    "Tenha qualidade, agilidade e segurança em cada impressão.",
    "Simplifique seus pedidos com atendimento direto e profissional.",
    "Aproveite promoções exclusivas e serviços personalizados para você.",
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        pt: 2,
        pb: 2,
        px: 2,
        backgroundColor: "#000",
        color: "primary.contrastText",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 1160, mx: "auto" }}
      >
        <Grid size={7}>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            A Impressão começa aqui!
          </Typography>
<Typography variant="h6" component="p" sx={{pb: 4}}>
  Somos uma Plataforma que conecta gráficas e papelarias de micro e pequeno porte a clientes que valorizam qualidade, agilidade e atendimento local.
</Typography>

          <Box
            sx={{
              maxWidth: 600,
              ".slick-dots li button:before": {
                color: "white",
                opacity: 0.7,
                fontSize: "14px",
              },
              ".slick-dots li.slick-active button:before": {
                color: "#FF4081",
                opacity: 1,
                fontSize: "14px",
              },
            }}
          >
            <Slider {...settings}>
              {headlines.map((text, index) => (
                <Typography
                  key={index}
                  variant="h6"
                  sx={{
                    minHeight: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.contrastText",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Slider>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/login")}
            sx={{ mt: 1, px: 5 }}
          >
            Comece Agora
          </Button>
        </Grid>

        <Grid size={5}>
          <Box
            component="img"
            src="/img/identgraff-hero3.png" // substitua pelo caminho da imagem
            alt="Identgraff Hero"
            sx={{
              width: "100%",
              maxHeight: 350,
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
