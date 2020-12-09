import React, { Component } from "react";
import axios from "axios";
import styles from '../styles/Homes.module.css'
class Solution extends Component {
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
      <div className={(styles.app, styles.full)}>
      <div className={styles.hs}>
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

export default Solution;
