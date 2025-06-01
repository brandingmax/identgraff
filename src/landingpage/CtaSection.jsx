import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const CtaSection = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#000",
        color: "primary.contrastText",
        py: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Pronto para transformar sua gráfica?
        </Typography>
        <Typography variant="h6" mb={4}>
          Cadastre-se gratuitamente e comece a gerenciar seus pedidos com facilidade.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Criar Minha Conta
        </Button>
      </Container>
    </Box>
  );
};

export default CtaSection;
