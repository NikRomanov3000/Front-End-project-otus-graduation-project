import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class AddReceiptButton extends React.Component{    
    render(){
        return(     
         <div>        
          <Button variant="contained" color="primary" disableElevation>
          Add Receipt          
        </Button>
        </div>      
        );
    }
}

export default AddReceiptButton;
