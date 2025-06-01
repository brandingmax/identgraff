import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Switch,
  FormControlLabel,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Home", href: "#header" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#000" }} elevation={6}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", px: 0 }}>
          <Box
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => navigate("/")}
          >
            <Logo style={{ height: 25 }} />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box sx={{ width: 250, p: 2 }}>
                  <List>
                    {menuItems.map((item) => (
                      <ListItem
                        button
                        component="a"
                        href={item.href}
                        key={item.label}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider sx={{ my: 1 }} />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        color="secondary"
                      />
                    }
                    label="Tema Escuro"
                  />
                  <Box sx={{ mt: 2 }}>
                    <Button
                      fullWidth
                      onClick={() => {
                        toggleDrawer(false)();
                        navigate("/login");
                      }}
                      sx={{
                        color: "#000",
                        borderColor: "#000",
                        borderWidth: 1,
                        borderStyle: "solid",
                        textTransform: "none",
                        mb: 1,
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => {
                        toggleDrawer(false)();
                        navigate("/register");
                      }}
                      sx={{
                        bgcolor: "#e91e63",
                        color: "white",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#c2185b",
                        },
                      }}
                    >
                      Cadastro
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </>
          ) : (
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
                  bgcolor: "#e91e63",
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
