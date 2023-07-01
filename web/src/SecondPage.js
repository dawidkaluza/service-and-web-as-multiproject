import React from "react";
import {Link} from "react-router-dom";

const SecondPage = () => {
  return (
    <>
      <h1>This is the second page.</h1>
      <Link to={`/first`}>Go to first page</Link>
    </>
  )
};

export { SecondPage };