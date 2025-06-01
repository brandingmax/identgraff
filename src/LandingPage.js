import React, { useState, useMemo } from "react";
import { CssBaseline, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./landingpage/Navbar";
import Header from "./landingpage/Header";
import SobreIdentgraff from "./landingpage/SobreIdentgraff";
import About from "./landingpage/About";
import ComoFunciona from "./landingpage/ComoFunciona";
import CtaSection from "./landingpage/CtaSection";
import FeaturesSection from "./landingpage/FeaturesSection";
import Footer from "./landingpage/Footer";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#1976d2" },
          secondary: { main: "#f50057" },
        },
        typography: {
          fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Spacer para Navbar fixa */}
      <Toolbar />
      <Header />
      <SobreIdentgraff />
      <About />
      <ComoFunciona />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </ThemeProvider>
  );
}
