import React, {Component} from "react";
import "../../App.css"
import axios from "axios"
import girls from "./girls.json";
import Navbar from "../../components/Navbar"


class Swipe extends Component{
    state={
        girls:"",
        counter:0,
        loaded:false,
        like:"",
        likes:0,
        theyLikeBack:"",
        name:"",
        city:"",
        age:"",
        };
        
    componentDidMount=()=>{
    console.log(girls)
    this.setState({girls:girls,
                   loaded:true})
   
    }

    renderHerResponse=()=>{
        switch(this.state.theyLikeBack){
            
            case "yes":
            return "ohh, she likes you back!"

            case "no":
            return "hmm, better keep swiping...she is"

            default:
            return ""
        }
    }

   

    likeHer=()=>{
        this.setState({counter:this.state.counter+1,
                        like:"yes"})
            var yayOrNay=Math.random();
            if(yayOrNay > .85){this.setState({theyLikeBack:"yes",
                                               likes:this.state.likes+1,
                                               name:this.state.girls[this.state.counter].name,
                                               city:this.state.girls[this.state.counter].city,
                                               age:this.state.girls[this.state.counter].age})}
            else{this.setState({theyLikeBack:"no",
                                 name:""})}
            
               
       
        if(this.state.counter > this.state.girls.length-2){
            this.setState({counter:0})
        }
    }

    dontLike=()=>{
        this.setState({counter:this.state.counter+1,
                       like:"no",
                       theyLikeBack:""})
        if(this.state.counter > this.state.girls.length-2){
            this.setState({counter:0})
        }
    }
    
    
    render(){
       if(!this.state.loaded){
            return(
            <h1>Page hasnt loaded </h1>
            )
        } 
        console.log(this.state.girls)
        return(
    
    <div>
       <Navbar/>
    <h1>Swipe n find Love...or something </h1>
    <span className={this.badgeMethod()}>{this.renderHerResponse()}</span>
    <div className='picsnButtons'>
    <button className="btn btn-success btn-lg" onClick={this.likeHer}>LIKE</button>
    <img src={this.state.girls[this.state.counter].pic} alt='girlPic'/>

    <button className="btn btn-danger btn-lg" onClick={this.dontLike}>NEXT</button>
    </div>
    <button className={this.matchesMethod()}>{this.state.likes} Matches</button>

    <div className='infoBox' style={this.state.name === "" ?{display:"none"}:null}>
    <h3>Name:{this.state.name}</h3>
    <h3>Age:{this.state.age}</h3>
    <h3>City:{this.state.city}</h3>
    </div>
    </div>

        )
    }

    badgeMethod() {
        let likeOrNot = "badge m-2 badge-";
       if(this.state.theyLikeBack === "yes"){likeOrNot+="success";}
       else if(this.state.theyLikeBack === "no"){likeOrNot+= "warning";}
       return likeOrNot
    }
    matchesMethod(){
        let badgeColor="badge m-2 badge-"
        return badgeColor+= this.state.likes === 0 ? "secondary" : "primary"
    }
}


export default Swipe;