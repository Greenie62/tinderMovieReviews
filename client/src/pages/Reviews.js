import React, {Component} from "react";
import "../App.css";
import axios from "axios";
import Navbar from "../components/Navbar"


class Reviews extends Component{
    state={
        movie:{}
    }

     submitMovie=()=>{
         var movie={};
         movie.title=document.getElementById('movie').value
         axios.post("/movie",movie).then(res=>{
             console.log(res)
             this.setState({movie:res.data})
             console.log(this.state)
         }).catch(err=>console.log(err))
         console.log(movie)
     }



    render(){
        return(
            <div>
                <Navbar/>
         <h1>Movie Review API Area </h1>
         <form>
             <label>Movie:
                 <input type="text" id="movie"/>
            </label>
         </form>
         <button onClick={this.submitMovie} className="btn btn-md btn-danger">Search </button>
        <h1>Title:{this.state.movie.title}</h1>
        <br/>
        <h2>Review:{this.state.movie.summary}</h2>
        <br/>
        <h2>Rating:{this.state.movie.rating}</h2>
        <br/>
        <h4>Link:<a href={this.state.movie.link}>{this.state.movie.link}</a></h4>
         </div>
        )
    }
}


export default Reviews;