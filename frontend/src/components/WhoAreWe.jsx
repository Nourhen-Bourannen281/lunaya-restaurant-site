import React from 'react';
import api from "../restApi.json";

const data = api.data[0];

const WhoAreWe = () => {
  const leftCards = data.who_we_are.slice(0, 4);
  const rightCards = data.who_we_are.slice(4);

  return (
    <section className='who_are_we' id='who_are_we'>
      <div className="container">
        <div className="text_column left_column">
          {leftCards.map(element => (
            <div className="card" key={element.id}>
              <h1>{element.number}</h1>
              <p>{element.title}</p>
            </div>
          ))}
        </div>

        <div className="image_banner">
          <img className='gradient_bg' src="center.svg" alt="gradientBg" />
          <img src="whoweare.png" alt="food" />
        </div>

        <div className="text_column right_column">
          {rightCards.map(element => (
            <div className="card" key={element.id}>
              <h1>{element.number}</h1>
              <p>{element.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoAreWe;
