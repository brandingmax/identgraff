import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';       // para "Aumente sua visibilidade local"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'; // para "Gerencie pedidos e orçamentos"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';        // para "Garanta qualidade e confiança"

const cards = [
  {
    title: "Aumente sua visibilidade local",
    description:
      "Divulgue sua gráfica ou papelaria para clientes da sua região, ampliando sua presença digital e atraindo novos negócios com facilidade.",
    icon: <VisibilityIcon color="primary" sx={{ mr: 1 }} />,
  },
  {
    title: "Gerencie pedidos e orçamentos com eficiência",
    description:
      "Centralize e organize todos os seus pedidos, orçamentos e mensagens em uma única plataforma intuitiva, economizando tempo e reduzindo erros.",
    icon: <FormatListBulletedIcon color="primary" sx={{ mr: 1 }} />,
  },
  {
    title: "Garanta qualidade e confiança aos seus clientes",
    description:
      "Controle todo o fluxo de produção e atendimento, oferecendo transparência e suporte, o que gera mais satisfação e fidelidade do cliente.",
    icon: <ThumbUpAltIcon color="primary" sx={{ mr: 1 }} />,
  },
];

export default function FeaturesSection() {
  return (
    <Container maxWidth="lg" sx={{ pb: 6, px: 4 }}>
      <Typography variant="h4" component="h2" fontWeight="medium" gutterBottom align="center" sx={{ mb: 4 }}>
        Por que escolher a Identgraff?
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards.map((card, index) => (
          <Grid size={{ xs: 4, sm: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {card.icon}
                  <Typography variant="h6" component="h3">
                    {card.title}
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" disabled>
                  Saiba Mais
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
