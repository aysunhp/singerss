import Navbar from "./../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [singers, setSingers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/artists").then((res) => {
      setSingers(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{ width: "70%", margin: "30px auto" }}
        >
          <Grid item xs={4} style={{ marginBottom: "30px" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Search Artist"
                variant="outlined"
                onChange={(e) => {
                  if (e.target.value.trim() == "") {
                    axios.get(`http://localhost:5000/artists`).then((res) => {
                      setSingers(res.data);
                    });
                  } else {
                    axios
                      .get(
                        `http://localhost:5000/artists/?name=${e.target.value}`
                      )
                      .then((res) => {
                        setSingers(res.data);
                      });
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} style={{ marginBottom: "30px" }}>
            <Button
              variant="contained"
              size="large"
              style={{ margin: "10px auto" }}
              onClick={() => {
                let filtered = [...singers].sort((a, b) => a.age - b.age);
                console.log(filtered);
                setSingers(filtered);
              }}
            >
              Sort By Age
            </Button>
          </Grid>
          {singers &&
            singers.map((item) => {
              return (
                <Grid item xs={6} key={item.id}>
                  <Card sx={{ width: 300 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="240"
                      image={item.image}
                    />
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid style={{ paddingLeft: "30px", paddingTop: "20px" }}>
                        <p>{item.fullName}</p>
                        <p>{item.age}</p>
                      </Grid>

                      <Grid
                        style={{ paddingRight: "30px", paddingTop: "20px" }}
                      >
                        <Button
                          size="large"
                          style={{ backgroundColor: "darkred", color: "white" }}
                        >
                          Share
                        </Button>
                      </Grid>
                    </Grid>
                    <CardActions></CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
