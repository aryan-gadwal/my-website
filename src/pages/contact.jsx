import { useState } from "react";
import {
  Container, Paper, Typography, TextField, Button, Stack, Snackbar, Alert,
} from "@mui/material";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Form data:", form); // later: send to a backend API
    setOpen(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        <Stack spacing={2}>
          <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth />
          <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} fullWidth />
          <TextField label="Message" name="message" value={form.message} onChange={handleChange} multiline rows={4} fullWidth />
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Send Message
          </Button>
        </Stack>
      </Paper>

      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert severity="success" variant="filled">Message sent!</Alert>
      </Snackbar>
    </Container>
  );
}