import React, { Component } from "react";
import axios from "axios";
import styles from '../styles/Home.module.css'
class About extends Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    axios.get("/api/customers").then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <div className="App">
        <div className={styles.grid}>
        {this.state.persons.map((person) => {
            return (
              <div key={person.id} className={styles.card}>
                <h3>{person.id}</h3>
                <p>{person.firstname}</p>
                <p>{person.lastname}</p>
                <button>
                  Add to Cart
                </button>
              </div>
            );
          })}
         
        </div>
      </div>
    );
  }
}

export default About;
