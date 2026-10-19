import { Link } from "react-router-dom";
import {
  Box, Container, Typography, Button, Grid, Card, CardContent,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import DevicesIcon from "@mui/icons-material/Devices";

const features = [
  { icon: <CodeIcon fontSize="large" color="primary" />, title: "Clean Code",
    text: "Built with React using reusable components." },
  { icon: <SpeedIcon fontSize="large" color="primary" />, title: "Fast",
    text: "Powered by Vite for instant development reloads." },
  { icon: <DevicesIcon fontSize="large" color="primary" />, title: "Responsive",
    text: "Looks great on phones, tablets, and desktops." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: { xs: 8, md: 12 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" } }}>
            Welcome to My Website
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            A modern site built with React and Material UI.
          </Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} to="/contact">
            Get in Touch
          </Button>
        </Container>
      </Box>

      {/* Features */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {features.map((f) => (
            <Grid key={f.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
                <CardContent>
                  {f.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>{f.title}</Typography>
                  <Typography color="text.secondary">{f.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}