import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "linear-gradient(80deg,#1db954,#191414" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spotify App
          </Typography>
          <Link to="artists">
            {" "}
            <Button color="inherit">HOME</Button>
          </Link>
          <Link to="artists/:id">
            {" "}
            <Button color="inherit">ARTISTS</Button>
          </Link>
          <Link to="addArtist">
            {" "}
            <Button color="inherit">ADD ARTIST</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
