import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Swipe from "./pages/Swipe/Swipe";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Footer from "./components/Footer";


class App extends Component{
    state={
        loaded:false,
        authenticated:false
    }

    componentDidMount=()=>{
        console.log("hello!!!")
        axios.get('/auth').then(res=>
        this.setState({loaded:true,
                       authenticated:res.data})).catch(err=>alert(err))
    }

    setLogin=()=>{
        this.setState({authenticated:true})
        console.log("it heard the event!")
    }

render(){
    if(!this.state.loaded){
    return <h3>Page has not fully loaded </h3> 
    }
    return(

    <Router>
        <div>
          
            <Wrapper>
            <Switch>
            <Route exact path='/login' render={(props)=><Login {...props} setLogin={this.setLogin}/>}/>
            {!this.state.authenticated ? <Redirect to="/login"/> : null}
            <Route exact path='/' component={Home}/>
            <Route exact path="/swipe" component={Swipe}/>
            <Route exact path='/reviews' component={Reviews}/>
            </Switch>
            </Wrapper>
        
            <Footer/>
            </div>
            </Router>
)
}
}

export default App;