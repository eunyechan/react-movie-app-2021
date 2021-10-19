import React from "react";
import { Link } from "react-route-dom";

function Navigation() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Navigation;
