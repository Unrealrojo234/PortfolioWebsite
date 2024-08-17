import Marquee from "react-fast-marquee";
import js from "./Images/js.png";
import jquery from "./Images/jquery.png";
import mern from "./Images/mern.jpeg";
import html from "./Images/html.png";
import css from "./Images/css.png";
import btsp from "./Images/Bootstrap.png";
import react from "./Images/react.png";
import mongodb from "./Images/mongodb.png";
import express from "./Images/express.png";
import node from "./Images/node.jpeg";

export default function Skills() {
  return (
    <div>
      <h1>
        &nbsp; Skills{" "}
        <i
          className="fa-solid fa-gears fa-2xl"
          style={{ color: "#63E6BE" }}
        ></i>
      </h1>
      <Marquee>
        {Stack.map((i) => (
          <div key={i.img} className="row">
            <div className="row">
              <img
                className="img-fluid"
                style={{ width: "8rem" }}
                src={i.img}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

const Stack = [
  { img: js },
  { img: react },
  { img: node },
  { img: express },
  { img: mongodb },
  { img: jquery },
  { img: html },
  { img: css },
  { img: btsp },
];
