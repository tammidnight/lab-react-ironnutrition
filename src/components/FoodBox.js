import { useState } from 'react';

function FoodBox(props) {
  const [qty, setQty] = useState(1);

  function handleQty(event) {
    setQty(event.target.value);
  }

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.foods.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.foods.name}</strong> <br />
                <small>{props.foods.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={handleQty}
                  value={qty}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => {
                    props.btnClick(props.foods, qty);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodBox;
