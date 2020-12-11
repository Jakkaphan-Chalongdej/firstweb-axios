import React, { Component } from "react";
import axios from "axios";

export default class AddVisitorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      age:"",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/customers", this.state)
      .then((response) => {
        console.log(response);
        console.log("Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { firstname, lastname,age } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              onChange={this.onChange}
              value={firstname}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              onChange={this.onChange}
              value={lastname}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              onChange={this.onChange}
              value={age}
            />
          </label>
          <button type="submit">Add Guest</button>
        </form>
      </div>
    );
  }
}
