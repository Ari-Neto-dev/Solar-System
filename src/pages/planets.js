import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function PagesPlanets() {

  return (
    <>
      <Container maxWidth="xl"className="containerMargin">
        <Typography variant="h2" component="h1" textAlign="center" >
          Planetas do Sistema Solar!
        </Typography>
        <Grid2 container spacing={2} paddingTop={2}>
          <Grid2 item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card className="cardVidro">
              <Link to="/planet/test">
                <CardActionArea>
                  <CardContent>
                    <img src="" alt="" width="100%" />
                    <Typography variant="h5" component="h2">
                      Terra
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
