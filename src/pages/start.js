import { Button, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PageStart() {
  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height:"100vh"
        }}
      >
        <Typography variant="h3" component="h1" textAlign="center">
          Conheça os Planetas do Sistema Solar !
        </Typography>
        <img className="animacaoEfeitoFlutuando" src="/image/astronaut.png" alt="Astronauta Flutuando" />
        <Link to="/planets">
          <Button variant="contained" size="large"endIcon={<ArrowForwardIosIcon />}>
          Vamos lá
          </Button>
        </Link>


      </Stack>
    </>
  );
}
