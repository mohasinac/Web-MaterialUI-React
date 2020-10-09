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
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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
      <Container maxWidth="xs">
          <div className="App">
            <header className="App-header">
                <AppBar>
                  <Toolbar>
                    <IconButton>
                      <MenuIcon></MenuIcon>
                      <Typography variant="h6">MAC</Typography>
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Typography variant="h2" component="h1">
                  Welcome to MAC
                </Typography>
                <ButtonStyled/>
              
              <Grid container spacing={4} justify='center' alignItems='center' >
                <Grid item xs={3} sm={12} >
                  <Paper style={{
                    height:75,
                    width:'100%'
                  }}>
                  </Paper>
                </Grid>
                <Grid item xs={3} sm={12}>
                  <Paper style={{
                    height:75,
                    width: '100%'
                  }}>
                  </Paper>
                </Grid>
                <Grid item xs={3} sm={12}>
                  <Paper style={{
                    height:75,
                    width:'100%'
                  }}>
                  </Paper>
                </Grid>
              </Grid>
              
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
        </Container>
    </ThemeProvider>
    
  );
}

export default App;
