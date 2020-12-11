import styles from "../styles/Home.module.css";
import Head from "next/head";
import styless from "../styles/Homes.module.css";
export default function About() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
          />
        </Head>
        <main className={styles.main}>
          <div className="box">
            <div className="product__img">
              <img
                name="cat"
                src="https://pet-az.com/images/site/Pet%20Celebrity%20'Chompos'/13.stop-a-cat-from-clawing-furniture2.png"
                alt="cat"
              />
              {/* <img src="/images/01.jpg"/> */}
            </div>
            <div className="product__disc">
              <div className="product__disc--content">
                <div className="disc__content--about">
                  <h1>CAT 001 GS</h1>
                  <span>get ready to step into a new world</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur hic minus nihil obcaecati, ratione repellendus
                    saepe sint tenetur totam ullam. Accusantium aspernatur
                    ducimus impedit perferendis quisquam repellendus similique
                    ullam vitae!
                  </p>
                </div>
                <div className="product__view--more">
                  <p>view all specifications</p>
                  <div className="view__more--block" />
                </div>
              </div>
            </div>
            <div className="product_buttons snipcart-add-item">
              <button className="btn price">$ 300</button>
              <button
                className="btn buy snipcart-add-item"
                data-item-id="1"
                data-item-image="cat"
                data-item-name="cats"
                data-item-url="/"
                data-item-price="300"
              >
                buy
              </button>
            </div>
          </div>
        </main>
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
    </div>
  );
}
