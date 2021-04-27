import React, {useState} from 'react';
import {
  IconButton,
  InputAdornment,
  FormControl,
  OutlinedInput,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function InputAdornments({ placeholder, setPassword, password }) {
 
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setPassword (e.target.value);
  };
      
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
      
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
        
return (
  <FormControl>
    <OutlinedInput
      type={showPassword ? 'text' : 'password'}
      value={password}
      placeholder={placeholder}
      className="RegInput1" 
      onChange={(e) => handleChange(e)}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
  )
}
      
 export default InputAdornments;