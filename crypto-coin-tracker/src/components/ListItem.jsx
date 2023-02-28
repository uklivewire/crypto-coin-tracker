import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ coin }) {
  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`}>
        <span className="home-crypto-image"><img src={coin.image} alt=""/></span>
        <span className="home-crypto-name">{coin.name}</span>
        <span className="home-crypto-prices">
            <span>{coin.priceBtc} BTC </span>
            <span>{coin.priceUsd} USD </span>
        </span>
      </Link>
    </div>
  );
}
