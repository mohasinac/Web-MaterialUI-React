import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import CheckBox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import {makeStyles , ThemeProvider ,createMuiTheme} from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'

const theme = createMuiTheme({
  palette:{
    primary :{
      main : orange[500]
    },
    secondary :{
      main : green[500]
    }
  }
})

const useStyles = makeStyles(
  {
    root :{
      background:"linear-gradient(45deg,#333,#999)",
      border:0,
      borderRadius:15,
      color: "white",
      padding : "5px 30px"
    }
  }
)

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root} >
    I am stylish!
  </Button>
}

function CheckBoxComponent(){
  const [checked , setChecked] = useState(true)
  
  return <FormControlLabel 
          control={
            <CheckBox 
              icon={<VisibilityIcon/>}
              checkedIcon={<VisibilityOffIcon/>}
              checked={checked}
              onChange={(e)=>setChecked(e.target.checked)}
              color="primary"
              inputProps={
                {
                  "aria-label":"checkbox demo"
                }
              }
              > 
            </CheckBox>
            }
            label="eye"
/>
}

function App() {
  return (
    <ThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <Typography variant="h2" component="h1">
                Welcome to MAC
              </Typography>
              <ButtonStyled/>
              <TextField 
                variant="standard"
                color="secondary"
                type="text"
                label="The text field"
                placeholder="test string"
              />
              <CheckBoxComponent/>
              <ButtonGroup>
                <Button startIcon={<SaveIcon/>} endIcon={<SaveIcon/>} variant="contained" color="primary" size="large" onClick={()=>{alert("hello")}} >
                  This is a Button
                </Button>
                <Button variant="contained" startIcon={<DeleteIcon/>} endIcon={<DeleteIcon/>} color="secondary" size="large" onClick={()=>{alert("worl")}} >
                  This is another Button
                </Button>
              </ButtonGroup>
              
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
    </ThemeProvider>
    
  );
}

export default App;
