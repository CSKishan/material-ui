import React from "react";
import {
  Typography,
  AppBar,
  CardActions,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import {
  StyledDiv,
  StyledButton,
  StyledIcon,
  StyledCard,
  StyledCardContent,
  StyledCardGrid,
  StyledCardMedia,
  StyledFooter,
} from "./styles";

const cards = Array.from({ length: 9 }, () =>
  Math.floor(Math.random() * (100 + 1))
);

console.log(cards);

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StyledIcon>
            <PhotoCamera />
          </StyledIcon>
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <StyledDiv>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone! This is a photo album and I'm trying to make this
              sentence as long as possible so that I can verify how it looks on
              the screen.
            </Typography>
            <StyledButton>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </StyledButton>
          </Container>
        </StyledDiv>

        <StyledCardGrid maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <StyledCard>
                  <StyledCardMedia
                    image={`https://picsum.photos/id/${card}/200/300`}
                    title="Image title"
                  />
                  <StyledCardContent>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. Please use this section to write the
                      extracts
                    </Typography>
                  </StyledCardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>

                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </StyledCardGrid>
      </main>
      <StyledFooter>
        <Typography variant="h6" align="center" gutterBottom>
          Made with love
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Designed incorporating latest changes in Material UI v5.0
        </Typography>
      </StyledFooter>
    </>
  );
};

export default App;
