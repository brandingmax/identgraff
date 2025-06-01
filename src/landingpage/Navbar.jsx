import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Switch,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  // Links do menu que vão navegar para âncoras nas seções da LandingPage
  const menuItems = [
    { label: "Home", href: "#header" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#000"}} elevation={6}>
      <Container maxWidth="lg">
  <Toolbar sx={{ justifyContent: 'space-between', px: 0,}}>
    {/* seus elementos aqui */}
          <Box
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => navigate("/")}
          >
            <Logo style={{ height: 25 }} />
          </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              sx={{
                color: "white",
                textTransform: "none",
                fontWeight: "medium",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}

          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                color="secondary"
              />
            }
            label="Tema Escuro"
            sx={{ color: "white", ml: 3 }}
          />

          <Button
            color="inherit"
            onClick={() => navigate("/login")}
            sx={{
              color: "white",
              borderColor: "white",
              borderWidth: 1,
              borderStyle: "solid",
              textTransform: "none",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/register")}
            sx={{
              bgcolor: "#e91e63", // pink
              color: "white",
              textTransform: "none",
              ml: 1,
              "&:hover": {
                bgcolor: "#c2185b",
              },
            }}
          >
            Cadastro
          </Button>
        </Box>
  </Toolbar>
</Container>
    </AppBar>
  );
}
