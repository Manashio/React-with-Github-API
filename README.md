# React-with-Github-API
Simple App Using React JS with Github API

# Github Api
  <pre>https://api.github.com/users/username</pre>
  
# Get The DATA
  ```Javascript
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
  ```
   
