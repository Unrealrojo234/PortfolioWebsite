import { Component } from "react";
import profile from "../public/Images/profile.png";
import "./index.css";
import space from '../public/Videos/space.mp4'
import Skills from "./assets/Skills";
import Slides from "./Slides";
import './embla.css';
import Socials from "../Socials";
import Message from "../Message";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1
          className="position-absolute"
          id="title"
          style={{ color: "whitesmoke", margin: 10 }}
        >
          Hello, I'm Ryan Otieno <br /> A Full-Stack Web Developer
        </h1>
        <div className="video-contaner">
          <video src={space} loop autoPlay muted style={{ zIndex: -1 }} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="profile" className="container-fluid">
          <img
            src={profile}
            className="img-fluid "
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="container-fluid">
          <q>
            I am a skilled and passionate website developer with a strong track
            record of creating visually appealing and highly functional
            websites. With expertise in front-end and back-end development, I am
            proficient in various programming languages and frameworks, ensuring
            that every project I undertake is built with precision and
            creativity. <br/> Whether it's building a site from scratch or
            optimizing an existing one, I bring a blend of technical skill and
            creative vision to every project. 
          </q>
        </div>
        <hr/>
        <Skills/>
        <hr/>
        <Slides slides={SLIDES} options={OPTIONS}/>
        <hr/>
        <Socials/>
        <hr/>
        <Message/>
      </div>
    );
  }
}

export default App;
