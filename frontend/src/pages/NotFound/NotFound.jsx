import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <section className="notFound error-page">
      <div className="container">
        <h1 className="error-title">🚫 404 - Page Not Found</h1>
        <p className="error-text">We can't seem to find the page you're looking for.</p>
        <Link to={"/"}>
          Back to Home
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
