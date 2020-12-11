import React, { Component } from "react";
import axios from "axios";
import styles from "../styles/Homes.module.css";
import styless from "../styles/Homes.module.css";
import Head from "next/head";
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
      <div className={styles.container}>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
          />
        </Head>
        <div className={styles.app}>
          <div className={styles.hs}>
            {this.state.persons.map((person) => {
              return (
                <div key={person.id} className={styles.card}>
                  <h3>{person.id}</h3>
                  <p>{person.firstname}</p>
                  <p>{person.lastname}</p>
                  <p>${person.age}</p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={person.id}
                    data-item-image={person.lastname}
                    data-item-name={person.firstname}
                    data-item-url="/"
                    data-item-price={person.age}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <footer className={styless.footer}>
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js"
          />
          <div
            hidden
            id="snipcart"
            data-api-key="M2U5NTZiNmMtNzAyMS00NjcyLTlkODUtMDBiMjg2ODEyMzAxNjM3NDI5MjYzODc2MDkyOTA0"
          />
        </footer>
      </div>
    );
  }
}

export default Solution;
