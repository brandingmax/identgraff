import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const steps = [
  {
    title: 'Crie seu perfil empresarial',
    description:
      'Cadastre gratuitamente sua gráfica ou papelaria e crie um perfil digital completo para ampliar sua presença e visibilidade no mercado local.',
  },
  {
    title: 'Divulgue seus serviços e produtos',
    description:
      'Organize seu portfólio, catálogo de produtos e promoções para facilitar a conexão com clientes interessados na sua região.',
  },
  {
    title: 'Receba e gerencie orçamentos e pedidos',
    description:
      'Clientes buscam fornecedores locais, enviam orçamentos e pedidos que você pode acompanhar e gerenciar diretamente pela plataforma.',
  },
  {
    title: 'Fortaleça a comunicação e relacionamento',
    description:
      'Utilize as ferramentas integradas para manter contato rápido e eficiente com seus clientes, fortalecendo as relações comerciais locais.',
  },
];

const ComoFunciona = () => {
  return (
    <Box pb={7} id="como-funciona">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" align="center">
          Como funciona?
        </Typography>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {steps.map((step, index) => (
            <Grid size={3}>
              <Card variant="outlined" sx={{ height: '100%', borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="medium">
                    {index + 1}. {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ComoFunciona;
