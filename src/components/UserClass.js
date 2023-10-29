import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            userInfo:{
                name: "default",
                location: "earth",
                avtar_url : "https://dummy-photo.com",
            },
            count:0,
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo:json,
        });
    }

    componentDidUpdate(){
        console.log("componentdidupdate");
    }

    componentWillUnmount(){
        console.log("componentwillunmount");
    }

    render(){
        const {name,location,avatar_url} = this.state.userInfo;
        //const { name , location} =this.props;
        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Count-{this.state.count}</button>
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <img src={avatar_url}></img>
                <h4>Contact: ayushu@xyz.abc</h4>
            </div>
        );
    }
}

export default UserClass;