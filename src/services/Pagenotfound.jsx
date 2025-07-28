import React from "react";
import { Link, Links } from "react-router";
export default function Pagenotfound() {
  return (
    <div className="text-center p-4 ">
      <img
        src="https://static.vecteezy.com/system/resources/previews/008/255/803/non_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg"
        style={{
          width: "100vw",
          height: "90vh",
        }}
      />
      <Link to="/home">Go to home page</Link>
    </div>
  );
}
