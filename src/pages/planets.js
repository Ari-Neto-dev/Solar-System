import { Card,CardActionArea, CardContent, Container,Grid2,Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComponentsLayoutStandard from "../components/layout/standard";
import ApiPlanetas from "../api/planetas";

export default function PagesPlanets() {

  const[carregando, setCarregando]= useState(true);

  const[erro, setErro]= useState(null);

  const[message, setMessage]= useState(null);

  const[planetas, setPlanetas]= useState([]);

//função que executa quando é aberto a página//
  useEffect(()=>{
    (async()=>{
      let respostaApi = await ApiPlanetas.obterTodos();
      setPlanetas(respostaApi)
      setCarregando(false);

    })()

  },[]);




  return (
    <ComponentsLayoutStandard carregando={carregando} erro={erro} message={message}>
      <Container maxWidth="xl" className="containerMargin">
        <Typography variant="h2" component="h1" textAlign="center">
          Planetas do Sistema Solar!
        </Typography>



        <Grid2 container spacing={2} paddingTop={2}>

        {
        planetas.map((planeta)=>(
          <Grid2 item xs={6} sm={4} md={3} lg={2} xl={2}>
          <Card className="cardVidro">
            <Link to="/planet/test">
              <CardActionArea>
                <CardContent>
                  <img src="" alt="" width="100%" />
                  <Typography variant="h5" component="h2">
                   {planeta?.nome}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid2>

        ))
      }


        </Grid2>
      </Container>
    </ComponentsLayoutStandard>
  );
}
