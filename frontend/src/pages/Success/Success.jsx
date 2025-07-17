import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className="notFound success">
      <div className="container">
        <h1 className="success-title">✅ Success!</h1>
        <p className="success-text">Your reservation was successfully submitted.</p>
        <p className="success-countdown">Redirecting to home in {countdown} seconds...</p>
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

export default Success;
