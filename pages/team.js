import Head from "next/head";
import styles from "../styles/Homes.module.css";
import products from "../products.json";

export default function Home() {
  return (
    <div>
      <Head> 
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>
      <main>
        <div className={styles.app}>
          <h1>Snipcart Store</h1>
          <div className={styles.hs}>
            {products.map((product) => {
              return (
                <div key={product.id} className={styles.card}>
                  <img src={product.image} alt={product.title} />
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
      </main>
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
