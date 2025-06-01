// src/components/About.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PrintIcon from '@mui/icons-material/Print';

const About = () => {
  const title = "Destaque a sua gráfica ou papelaria!";

const intro1 =
  "Com a Identgraff, você divulga seus serviços de forma estratégica para um público local qualificado, aumentando suas chances de fechar negócios e fidelizar clientes. Nossa plataforma conecta você diretamente a quem busca serviços de impressão e materiais gráficos, promovendo sua marca com transparência e credibilidade. Assim, sua empresa se destaca no mercado competitivo, amplia sua presença digital e cresce de forma sustentável.";

const intro2 =
  "Focada na otimização da eficiência operacional, a Identgraff disponibiliza um conjunto completo de ferramentas que simplificam a comunicação entre gráficas, papelarias e clientes, permitem o acompanhamento detalhado de cada etapa da produção e oferecem controle rigoroso sobre os pedidos, garantindo transparência e agilidade.";

const intro3 =
  "Possuindo uma interface simples, intuitiva e moderna, a Identgraff oferece um ambiente colaborativo que promove um fluxo de trabalho transparente, organizado e eficiente, ideal para garantir a qualidade e o cumprimento dos prazos na entrega dos serviços gráficos e produtos de papelaria.";

const cards = [
  {
    icon: <DesignServicesIcon color="primary" fontSize="large" />,
    title: "Gráficas Parceiras",
    description:
      "Organizam seus serviços, recebem e gerenciam pedidos, garantindo qualidade e agilidade na entrega, além de fortalecer sua presença digital.",
  },
  {
    icon: <BusinessCenterIcon color="primary" fontSize="large" />,
    title: "Papelarias",
    description:
      "Divulgam seus catálogos, promoções, horários de funcionamento e facilitam o contato com clientes, ampliando a visibilidade local.",
  },
  {
    icon: <PrintIcon color="primary" fontSize="large" />,
    title: "Clientes Corporativos e Finais",
    description:
      "Buscam fornecedores locais, enviam arquivos para impressão, acompanham status dos pedidos e mantêm comunicação direta com gráficas e papelarias.",
  },
];

const benefitsTitle = "Com a Identgraff, você pode:";
const benefitsList = [
  "Cadastrar sua gráfica ou papelaria e organizar seus serviços e produtos.",
  "Receber, gerenciar e acompanhar pedidos com facilidade e transparência.",
  "Comunicar-se diretamente com seus clientes de forma rápida e clara.",
  "Garantir qualidade, agilidade e profissionalismo na produção gráfica e atendimento.",
];

const closingText =
  "A Identgraff nasceu para apoiar gráficas e papelarias que desejam crescer, profissionalizar sua presença digital e atender seus clientes com excelência, tudo isso com uma plataforma prática, acessível e eficiente.";

  return (
    <Box py={5} px={2} id="about">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" align="center">
          {title}
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          {intro1}
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          {intro3}
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {cards.map(({ icon, title, description }, index) => (
            <Grid size={{ xs: 4, sm: 12, md: 4 }} key={index}>
              <Card variant="outlined" sx={{ height: "100%", borderRadius: 3 }}>
                <CardContent>
                  {icon}
                  <Typography variant="h6" mt={2} gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={8}>
          <Typography variant="h6" gutterBottom fontWeight="medium" align="center">
            {benefitsTitle}
          </Typography>
<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
  {benefitsList.map((item, index) => (
    <Grid size={{ xs: 4, sm: 12, md: 6 }}>
      <Card variant="outlined" sx={{ display: 'flex', alignItems: 'center', borderRadius: 3, width: '100%', height: '100%', p: 1 }}>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <CheckCircleIcon color="success" />
        </ListItemIcon>
        <CardContent>
          <Typography variant="body1">
            {item}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

          <Typography variant="body1" color="text.secondary" mt={4}>
            {closingText}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};


export default About;
