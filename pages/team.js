import Head from "next/head";
import styles from "../styles/Homes.module.css";
import products from "../products.json";
import { FaShoppingCart } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.title}>Snipcart Store</h1>

        <p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <FaShoppingCart />
            <strong className="sr-only">Cart</strong>
            <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>
      </div>
      <div className={(styles.app, styles.full)}>
        
        <div className={styles.hs}>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>

                <button
                  className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-url="/"
                  data-item-price={product.price}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* <About /> */}
      <footer className={styles.footer}>
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
