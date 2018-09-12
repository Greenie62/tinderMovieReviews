import React, {Component} from "react";
import "../App.css";
import axios from "axios";

class Login extends Component{
    state={
        username:"",
        password:"",
        error:"",
        validation:":("
        
    }

    onStateChange=(event)=>{

        this.setState({[event.target.name]:event.target.value})
        if(this.state.username !== ""){this.setState({validation:":)"})}
       else{this.setState({validation:":("})}
    }

    onStateSubmit=(event)=>{
       
        event.preventDefault();
        axios.post('/submitUser',this.state).then(res=>{
        if(res.data === true){
            this.props.setLogin();
            this.props.history.push('/')
        }
        else{this.setState({error:"Wrong username/password!! :("})}
    })
    }

    render(){

        


        return(
            <div className="submitForum">
           
            <h2>LogIn Page </h2>
            
            <form>
                <label>Username:
                    <input name="username"
                           value={this.state.username}
                           onChange={this.onStateChange}
                           placeholder=""
                           type="text"/>
                </label>
                <span className={this.badgeMethod(this.state.username)}>{this.state.validation}</span>
            </form>
            <form>
                <label>Password:
                    <input name="password"
                           value={this.state.password}
                           onChange={this.onStateChange}
                           placeholder=""
                           type="text"/>
                </label>
                <span className={this.badgeMethod(this.state.password)}>{this.state.validation}</span>
            </form>
            <button className="btn btn-primary btn-lg" onClick={this.onStateSubmit}>CLICK</button>
            <h3 style={{color:"red"}}>{this.state.error}</h3>
            </div>
        )
    }

    badgeMethod(x) {
        let badgeClass = "badge m-2 badge-";
        return badgeClass += x === "" ? "warning" : "success";
        
    }
}

export default Login