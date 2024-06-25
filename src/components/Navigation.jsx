import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    const handleAboutClick = () => {
    navigate("/About");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <nav>
        <button onClick={handleHomeClick}> Home</button>
        <button>Sign in</button>
        <button>Cart</button>
        <button onClick={handleAboutClick}>About</button>
      </nav>
    </div>
  );
};

export default Navigation;
