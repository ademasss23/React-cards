import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card({ title, imageSource, url, text }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img
          src={imageSource}
          alt=""
          className="card-img-top"
          style={{ height: 170 }}
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quoddistinctio facilis nihil id culpa modi quia atque ipsam eligendifugiat tempore, dolorum, expedita architecto dolores saepenecessitatibus explicabo voluptates."}
        </p>
        <a href={url} className="btn btn-outline-secondary" target="_blank">
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
