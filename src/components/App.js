import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar';
import Imglist from './Imglist';
import unsplash from '../api/unsplash'
 class App extends React.Component {
     state = {images:[]}
      onSearchSubmit = async(term) => {
   const res = await unsplash.get('/search/photos',{
        params:{query:term},
       
    })
    
    this.setState({images:res.data.results})

    
    }
    

    
    render(){
  return (
    <div className='ui container' style={{marginTop:'15px'}}>
      <SearchBar onSearchSubmit={this.onSearchSubmit} />
      <Imglist images={this.state.images}/>
    </div>
  )
    }
    
}

export default App;
