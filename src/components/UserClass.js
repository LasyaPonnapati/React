import React from "react";
import { UserContext } from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(){
        super();
        this.state={   //state variable in class based component
            name:"",
            location:"",
            contact:"",
            avtar:"",
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/LasyaPonnapati");
        const json = await data.json();
        console.log(json);
        this.setState({
            name: json.login,
            location: json.location,
            contact: json.email,
            avtar: json.avatar_url,
        });
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
    }
    
    render(){
        const{avtar,name,location,contact}=this.state;
        return(
        <div className="user-card">
        <img src={avtar}/>
        <h3>Name: {name}</h3>
        <UserContext.Consumer>
            {({userName})=><h3>From userContext: {userName}</h3>}
        </UserContext.Consumer>
        <h3>Contact: {contact}</h3>
        </div>
        );
    };
};

export default UserClass;