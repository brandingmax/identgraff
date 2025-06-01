import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Alert,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";  // IMPORTA auth do arquivo de configuração

import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idToken, setIdToken] = useState("");
  const [graphics, setGraphics] = useState([]);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      setIdToken(token);
      setError("");
      console.log("Login feito com sucesso, ID Token:", token);
    } catch (err) {
      setError("Erro no login: " + err.message);
      console.error(err);
    }
  };

  const fetchGraphics = async () => {
    if (!idToken) {
      setError("Faça login antes de buscar os dados");
      return;
    }
    try {
      const response = await axios.get("http://localhost:3001/graphics", {
        headers: { Authorization: "Bearer " + idToken },
      });
      setGraphics(response.data);
      setError("");
    } catch (err) {
      setError("Erro ao buscar gráficas: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 40 }}>
      <Typography variant="h4" gutterBottom>
        Identgraff Frontend
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="primary"
          />
        }
        label="Tema escuro"
        style={{ marginBottom: 20 }}
      />

      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}

      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{ marginTop: 16 }}
      >
        Logar com Email/Senha
      </Button>

      <Divider style={{ margin: "30px 0" }} />

      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={fetchGraphics}
      >
        Buscar Gráficas
      </Button>

      <Typography variant="h5" style={{ marginTop: 30, marginBottom: 10 }}>
        Gráficas:
      </Typography>

      <List>
        {graphics.map((g) => (
          <ListItem key={g.id} divider>
            <ListItemText primary={g.name} secondary={`${g.address} - ${g.phone}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
