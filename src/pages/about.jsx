import { Container, Typography, Paper } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>About Us</Typography>
        <Typography color="text.secondary">
          Write about yourself, your project, or your company here. This page
          shows how Paper and Typography give you clean content blocks.
        </Typography>
      </Paper>
    </Container>
  );
}