import Router from "next/router";

const handleClickIndex = () => Router.push({ pathname: "/" });
export default function About() {
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="product__img">
            <img src="https://pet-az.com/images/site/Pet%20Celebrity%20'Chompos'/13.stop-a-cat-from-clawing-furniture2.png"  />
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
                  saepe sint tenetur totam ullam. Accusantium aspernatur ducimus
                  impedit perferendis quisquam repellendus similique ullam
                  vitae!
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
            <button className="btn buy snipcart-add-item"
             data-item-url="/">buy</button>
          </div>
        </div>
        
      </div>
      {/* ignore */}
    </div>
  );
}
