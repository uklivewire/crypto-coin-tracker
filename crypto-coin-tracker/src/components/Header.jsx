import React from "react";
import { Link } from "react-router-dom";

export default function Header({ back }) {
  return (
    <header className="header">
      <div className="width">
        {back && (
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="24"
          >
            <path
              fill="currentColor"
              d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"
            />
          </svg>
        </Link>
        )}
        <h1>
          <Link to="/">CoinZ!</Link>
        </h1>
      </div>
    </header>
  );
}
