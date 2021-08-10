import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar , VideoDetail , VideoList}  from './components';
// import {  VideoList } from './components'; 

import youtube  from './api/youtube';

class App extends React.Component {
    state = {
        videos:[],
        selectedVideo:null,
    }

    componentDidMount(){
        this.handleSubmit('bionel scott')
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})

    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search',{params:{
            part: 'snippet',
            maxResults: 5,
            key:'AIzaSyCZ1TsSEnsq-wLfLgFqnXe_r6Vvsu3GfWU',
            q:searchTerm,
    
    
        }});
         console.log("Response",response);
        this.setState({videos : response.data.items,
            selectedVideo:response.data.items[0]
        })


    }
   
    render() { 
        const { selectedVideo , videos } = this.state;
        return ( 
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        
                        
                        <Grid item xs={10} style={{ marginLeft:'100px'}} >

                        {/* This Grid is for Search Bar  */}
                        <SearchBar onFormSubmit={this.handleSubmit}/>

                        </Grid>
                        <Grid item xs={8}>
                            {/* Video Detail Grid  */}
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        
                        <Grid item xs={4}>
                            {/* Sidebar 5 videos list  */}
                            <VideoList videos={videos}
                            onVideoSelect={this.onVideoSelect}
                            />
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
         );
    }
}
 
export default App;