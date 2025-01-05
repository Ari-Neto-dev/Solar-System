import{Cached, Home} from "@mui/icons-material";
import { Button, Grid2, Typography } from "@mui/material";
import{Stack} from "@mui/system";

export default function ComponentsLayoutMessage(props){
  return(<>
  <Grid2 container height="100vh">
    <Grid2 item xs={11} sm={8} md={6} lg={5} xl={4} margin="auto">
      <Stack direction="column" alignItems="center" spacing={2}>
        {props?.icone}
        <Typography variant="h4" component="h1" textAlign="center">
          {props.titulo}
        </Typography>
        <Typography variant="subtitle1" component="h1" textAlign="center">
        {props?.subtitulo}
        </Typography>
        <Typography variant="body1" component="h1" textAlign="center">
        {props?.descricao}
        </Typography>
        {props.children}

        {(props?.btnTentarNovamente===true)&&(
          <Button variant="outlined" startIcon={<Cached/>} onClick={()=>{
            window.location.reload();}}>
              Tentar Novamente!
              </Button>

        )}

        {(props?.btnInicio===true)&&(
          <Button variant="outLined" startIcon={<Home/>} onClick={()=>{
            window.location.href="/"}}>
              Voltar ao Início!
              </Button>

        )}


      </Stack>

    </Grid2>
  </Grid2>

    </>)


}