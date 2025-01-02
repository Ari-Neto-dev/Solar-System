import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareIcon from '@mui/icons-material/Share';

export default function PagePlanet(){
  function ClickCompartilhar(){
    window.navigator.share({
      url:`${window.location.href}`,
      text:`Explore o planeta Nome e descubra suas peculiaridades`,
      title: `Conheça NOME`
    })

  }
  return(
    <>
     <Container maxWidth="xl" className="containerMargin">
     <Link to="/planets">
          <Button variant="outlined" size="large" ><ArrowBackIosIcon/>
            Voltar
          </Button>
        </Link>

     <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <img className="animacaoEfeitoGirar" src="" alt=""/>
        <Typography variant="h5" component="h1">Terra</Typography>
        <Typography variant="body1" component="p">Descrição do Planeta Terra.</Typography>
        <Button variant="contained" size="large" onClick={()=>{ClickCompartilhar(); }}><ShareIcon/>
            Compartilhar
          </Button>
        </Stack>

      </Container>


    </>
  )

}