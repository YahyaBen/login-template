import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Redirect } from "react-router";

const Home = () => {
  const [logedout, setLogedout] = useState(false);
  
  const seDeconnecter = (e) => {
    e.preventDefault();
    localStorage.clear()
    setLogedout(true);
  };

  if (localStorage.length===0) {
    return <Redirect to="/" push={true} />;
  }
  return (
    <div>
      Table formatrice
      <Button variant="warning" onClick={seDeconnecter}>
        Se deconnecter
      </Button>
    </div>
  );
};

export default Home;
