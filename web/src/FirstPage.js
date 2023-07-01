import React from "react";
import {Link} from "react-router-dom";

const FirstPage = () => {
  return (
    <>
      <h1>This is first page.</h1>
      <Link to={`/second`}>Go to second page</Link>
    </>
  )
};

export { FirstPage };