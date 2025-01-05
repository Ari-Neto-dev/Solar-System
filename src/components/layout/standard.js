import { CircularProgress } from "@mui/material";
import ComponentsLayoutMessage from "./message";
import { Error, PriorityHigh } from "@mui/icons-material";


export default function ComponentsLayoutStandard(props){
  return(<>
  {(props?.carregando === true) ? (<>
    <ComponentsLayoutMessage icone={<CircularProgress size={100} color="white"/>}titulo={`Carregando ..`}/>

    </>):(<>
    {(props?.erro) ?(<>
    <ComponentsLayoutMessage icone={<Error fontSize="large" color="white"/>} titulo={`Erro`} subtitulo={props?.erro?.subtitulo} descricao={props?.erro?.descricao} btnTentarNovamente={true}/>

      </>):(<>
      {(props?.msg) ? (<>
        <ComponentsLayoutMessage{...props?.massage} icone= {props?.msg?.icone||<PriorityHigh fontSize="large"/>}/>

      </>):(<>
      {props.children}

      </>)}


      </>)}

    </>)}

  </>)

}