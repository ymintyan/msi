import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    padding: '10px 40px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    background: 'linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)',
    borderRadius: 10,
    textTransform: 'none',
    "&:hover": {
        background: 'linear-gradient(92.01deg, #8EA7ff 0%, #496ff3 100%)'
    }
  }
});


function BtnWrapper(props) {
    const {handleClick} = props;
    const classes = useStyles();
    return (
        <div className="btn-wrapper">
            <Button onClick={handleClick} 
            classes={{
                root: classes.root
            }}>
                Get a joke
            </Button>
        </div>
    );
}

export default BtnWrapper;