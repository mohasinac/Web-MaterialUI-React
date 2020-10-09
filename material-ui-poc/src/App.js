import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import CheckBox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
