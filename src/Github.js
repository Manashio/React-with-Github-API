import React, { Component } from 'react';
import './App.css';
let username = 'Manashio'
const Username = username => `https://api.github.com/users/${username}`
class Github extends Component {
    constructor(props){
        super(props)
        this.state = {
            requestFailed :false
        }
    }
    componentDidMount() {
        fetch(Username(this.props.username))
        .then(response => {
            if(!response.ok){
                throw Error("Netowrk request Failed")
            }
            return response
        })
        .then(d => d.json())
        .then(d => {
            this.setState({
                githubData: d
            })
        }, () =>{
            this.setState({
                requestFailed:true
            })
        })
    }

  render() {
    if(this.state.requestFailed) return <p>No user found !</p>
    if(!this.state.githubData) return <p>Loading . . .</p>
        return(
        <div className="card">
            <h2>{this.state.githubData.name}</h2>
            <p>App Key  - {this.state.githubData.id}</p>
            
            <img className="img" src={this.state.githubData.avatar_url} alt={this.state.githubData.avatar_url}/>
            <h4>{this.state.githubData.company}</h4>
            <p><b>Public Repos - </b>{this.state.githubData.public_repos}&nbsp;&nbsp;&nbsp;
             Follower - {this.state.githubData.followers}
             &nbsp;&nbsp;
            Following - {this.state.githubData.following}        
            </p>
            
            <p> {this.state.githubData.bio}</p>
            <p>{this.state.githubData.location}</p>
            
            
        </div>
        );
  }

}

export default Github;
