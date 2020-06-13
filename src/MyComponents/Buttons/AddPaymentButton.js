import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class AddPaymentButton extends React.Component{    
    render(){
        return(     
         <div>        
          <Button variant="contained" color="primary" disableElevation>
          Add Payment        
        </Button>
        </div>      
        );
    }
}

export default AddPaymentButton;
