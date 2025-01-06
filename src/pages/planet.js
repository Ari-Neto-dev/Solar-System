import { Button, Container, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareIcon from '@mui/icons-material/Share';
import { Component, useEffect, useState } from "react";
import ComponentsLayoutStandard from "../components/layout/standard";
import ApiPlanetas from "../api/planetas";
// import { ArrowForward } from "@mui/icons-material";

export default function PagePlanet(){
  const parametros=useParams();
  const [carregando, setCarregando] = useState(true);

  const [erro, setErro] = useState(null);

  const [message, setMessage] = useState(null);

  const [planeta, setPlaneta] = useState([]);

    //função que executa quando é aberto a página//
    useEffect(() => {
      (async () => {

          try {
                  let respostaApi = await ApiPlanetas.obterUnicoPorSlug(parametros.slug);
                  if(!respostaApi[0]){throw new Error("Não encontramos o planeta")}
                  setPlaneta(respostaApi?.[0]);
                  setCarregando(false);
                } catch (error) {
                  setErro({
                    subtitulo: `Ocorreu um erro em nossa API paa obter os planetas, tente novamente mais tarde.`,
                    descricao: String(error)
                  });
                  setCarregando(false);
                }




      })()
    }, []);




  async function ClickCompartilhar(){
    let resImg=await fetch(planeta?.imgUrl);
    let contentType= resImg.headers.get("content-type");
    let blob = await resImg.blob();
    let binaryFile = new File([blob], `${planeta?.slug}-${planeta?.img}`, { type: contentType });



    window.navigator.share({
      url:`${window.location.href}`,
      text:`Explore o planeta ${planeta?.nome} e descubra suas peculiaridades`,
      title: `Conheça ${planeta?.nome} `,
      files:Array(binaryFile),
    })

  }
  return(
    <ComponentsLayoutStandard  carregando={carregando}erro={erro} message={message}
        >

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
      <img className="animacaoEfeitoGirar" src={planeta?.imgUrl} alt={planeta?.descrição}/>
        <Typography variant="h5" component="h1">{planeta?.nome}</Typography>
        <Typography variant="body1" component="p">{planeta?.descrição}</Typography>
        <Button variant="contained" size="large" endIcon={<ShareIcon/>} onClick={()=>{ClickCompartilhar(); }}>
            Compartilhar
          </Button>
        </Stack>

      </Container>
      </ComponentsLayoutStandard>



  )

}