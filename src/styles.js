import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const StyledDiv = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

export const StyledButton = styled("div")({
  marginTop: "40px",
});

export const StyledIcon = styled("div")({
  marginRight: "20px",
});

export const StyledCardGrid = styled(Grid)({
  padding: "20px 10px",
  margin: "auto",
});

export const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%",
});

export const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

export const StyledFooter = styled("footer")({
  backgroundColor: "lightgrey",
  padding: "50px 0",
});
