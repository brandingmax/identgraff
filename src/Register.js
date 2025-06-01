import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

export default function Register() {
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    categoria: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    descricao: "",
    servicos: "",
    horario: "",
    fotoPerfil: null,
    banner: null,
    portfolio: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data enviada:", formData);
    // Enviar dados para backend ou Firebase aqui
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Cadastro Comercial
      </Typography>

      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          {/* Nome e CNPJ/CPF */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome da Empresa ou Profissional"
              name="nome"
              value={formData.nome}
              fullWidth
              required
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="CNPJ ou CPF"
              name="cnpj"
              value={formData.cnpj}
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          {/* Categoria e Email */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="categoria-label">Categoria</InputLabel>
              <Select
                labelId="categoria-label"
                name="categoria"
                value={formData.categoria}
                label="Categoria"
                onChange={handleChange}
              >
                <MenuItem value="Gráfica">Gráfica</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Outros">Outros</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              fullWidth
              required
              onChange={handleChange}
            />
          </Grid>

          {/* Telefone, Cidade e Estado */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="WhatsApp"
              name="telefone"
              value={formData.telefone}
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Cidade"
              name="cidade"
              value={formData.cidade}
              fullWidth
              required
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Estado"
              name="estado"
              value={formData.estado}
              fullWidth
              required
              onChange={handleChange}
            />
          </Grid>

          {/* Descrição */}
          <Grid item xs={12}>
            <TextField
              label="Descrição do Perfil"
              name="descricao"
              value={formData.descricao}
              multiline
              rows={4}
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          {/* Serviços oferecidos */}
          <Grid item xs={12}>
            <TextField
              label="Serviços oferecidos"
              name="servicos"
              value={formData.servicos}
              multiline
              rows={3}
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          {/* Horário */}
          <Grid item xs={12}>
            <TextField
              label="Horário de funcionamento"
              name="horario"
              value={formData.horario}
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          {/* Imagens */}
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="fotoPerfil" sx={{ mb: 1, mt: 2 }}>
              Foto de Perfil
            </InputLabel>
            <input
              id="fotoPerfil"
              type="file"
              name="fotoPerfil"
              accept="image/*"
              onChange={handleChange}
              style={{ display: "block" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="banner" sx={{ mb: 1, mt: 2 }}>
              Banner de Capa
            </InputLabel>
            <input
              id="banner"
              type="file"
              name="banner"
              accept="image/*"
              onChange={handleChange}
              style={{ display: "block" }}
            />
          </Grid>

          <Grid item xs={12}>
            <InputLabel htmlFor="portfolio" sx={{ mb: 1, mt: 2 }}>
              Portfólio (múltiplas imagens)
            </InputLabel>
            <input
              id="portfolio"
              type="file"
              name="portfolio"
              accept="image/*"
              multiple
              onChange={handleChange}
              style={{ display: "block" }}
            />
          </Grid>

          {/* Botão */}
          <Grid item xs={12} sx={{ textAlign: "center", mt: 4 }}>
            <Button type="submit" variant="contained" size="large" color="primary">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
