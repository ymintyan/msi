import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        border: '2px solid #333333',
        padding: '10px 15px',
        borderRadius: 10,
        marginTop: 20
    }
});

function SearchInput(props) {
    const {isVisible, handleInput, classes, text} = props;
    
    return isVisible ? (
        <div className="search-wrapper">
            <TextField id='search-input' size="small"  fullWidth={true} 
            placeholder="Free text search..." 
            onChange={handleInput}
            value={text} 
            className={classes.textField}
            InputProps={{
                disableUnderline: true
            }}
            />
        </div>
    ) : null;
}

export default withStyles(styles)(SearchInput);