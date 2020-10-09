import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
