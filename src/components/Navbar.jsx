import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [anchor, setAnchor] = useState(null);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyWebsite
        </Typography>

        {/* Desktop links */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {links.map((l) => (
            <Button key={l.to} color="inherit" component={Link} to={l.to}>
              {l.label}
            </Button>
          ))}
        </Box>

        {/* Mobile menu */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton color="inherit" onClick={(e) => setAnchor(e.currentTarget)}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
            {links.map((l) => (
              <MenuItem
                key={l.to} component={Link} to={l.to}
                onClick={() => setAnchor(null)}
              >
                {l.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}