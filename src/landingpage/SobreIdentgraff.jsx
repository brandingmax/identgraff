import React from "react";
import { Box, Container, Grid, Typography, Button, Alert, AlertTitle } from "@mui/material";

export default function SobreIdentgraff() {
  return (
    <Box
      component="section"
      sx={{
        px: 2,
        py: 2,
      }}
    >
    <Container maxWidth="lg">
      <Grid container spacing={2} alignItems="center" columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid size={{ xs: 5, sm: 12, md: 6 }}>
          <Box
            component="img"
            src="/img/identgraff-hero4.png" // Substitua pelo caminho correto da imagem
            alt="Ilustração Identgraff"
            sx={{
              width: "100%",
              maxWidth: 450,
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>

        <Grid size={{ xs: 7, sm: 12, md: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
            Uma plataforma feita para você crescer
          </Typography>
          <Typography variant="p" component="p" color="text.secondary">
            A Identgraff é uma plataforma digital inovadora, especialmente desenvolvida para gráficas e papelarias de micro e pequeno porte que buscam organizar seus serviços, gerenciar pedidos com maior eficiência e ampliar sua presença no competitivo mercado de impressão e comércio local. Com a Identgraff, você tem o controle total do seu fluxo de trabalho, facilitando a operação do dia a dia e aumentando sua visibilidade.
          </Typography>

          <Alert variant="outlined" severity="info" sx={{ mt: 3, mb: 4 }}>
            <AlertTitle>Pronto para evoluir?</AlertTitle>
            Comece agora e transforme seu negócio gráfico!
        </Alert>

            <Button variant="contained" color="primary" size="large">
              Criar meu perfil grátis
            </Button>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}