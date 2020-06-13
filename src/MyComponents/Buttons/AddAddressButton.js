import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class AddAddressButton extends React.Component{    
    render(){
        return(     
         <div>        
          <Button variant="contained" color="primary" disableElevation>
          Add Address          
        </Button>
        </div>      
        );
    }
}

export default AddAddressButton;
