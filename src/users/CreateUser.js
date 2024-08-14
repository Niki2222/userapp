import React, {Component} from "react";

class CreateUser extends Component {
    initialState = {
        name:"",
        age:""
    }

    state = this.initialState;

    formUser = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    addUser = (event) => {
        // event.preventDefault();
        this.props.addUser(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, age} = this.state;
        return (
            <form onSubmit={this.addUser}>
                <h2>Add user</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={this.formUser} className="form-control" type="text" name="name" id="name" value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input onChange={this.formUser}  className="form-control"  type="text" name="age" id="age" value={age}/>
                </div>
                <input className="btn btn-primary" type="button" value={"Submit"} onClick={this.addUser}/>
                {/* <button className="btn btn-primary" type="submit">Submit</button> */}
            </form>
        )
    }
}

export default CreateUser;