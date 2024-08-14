import React from "react";
import UsersContainer from "./users/UsersContainer";
import CreateUser from "./users/CreateUser";

class App extends React.Component {
    state = {
        userData: []
    }

    componentDidMount() {
        const url = "http://localhost:5000/api";

        fetch(url)
            .then(result => result.json()
            .then(result => {
                this.setState({userData: result})
            }))
    }

    addUser = (user) => {
        this.setState({userData: [...this.state.userData, user]});
    }

    removeUser = (index) => {
        const {userData} = this.state;
        const data = userData.filter((value, i) => {
            return index !== i;
        });
        this.setState({userData: data});
    }

    render() {
        const {userData} = this.state;
        return (
            <div className="container">
                <UsersContainer users={userData} removeUser={this.removeUser} />
                <CreateUser addUser={this.addUser} />
            </div>
        );
    }
}

export default App;
