import React from 'react';
import { Paper , TextField, Button } from '@material-ui/core'
class SearchBar extends React.Component {
    state={
        searchTerm:'',
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit = (e) => {
        // Destructuring that is take value of searchTerm from state 
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        e.preventDefault();


    }

    render() { 
        return ( 
            
           
            <Paper elevation={6} style={ {padding: '25px'}}>
               
                <form >
                    <TextField  fullWidth label="What's on your mind ?"
                    onChange={this.handleChange}
                    />
                </form>
                    <Button variant="contained" color="secondary" onClick={this.handleSubmit} style={{ margin : '10px'}}>
                    Search
                    </Button>
            

            
                

            </Paper>
            
         );
    }
}
 
export default SearchBar;