import { createTheme } from "@mui/material";

const tema=createTheme({
  palette:{
    primary:{
      main:"#EDC229",
      contrastText:"#534285"
    },
    white:{
      main:"#fff"

    }



  },
  typography:{
    allVariants:{
      color:"#fff"

    }
  }

});

export default tema;