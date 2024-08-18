import { Component } from "react";

class Duration extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>Duration <i className="fa-regular fa-clock fa-flip-vertical fa-xl" style={{color: "#63E6BE"}}></i></h1>
        <q style={{fontFamily:'monospace'}}>
          I approach website development with efficiency and attention to
          detail, tailoring the timeline to the complexity and scope of each
          project. For a simple informational website or landing page, I
          typically deliver within 1 to 2 weeks, ensuring it’s both visually
          appealing and fully functional. For more complex websites, such as
          e-commerce platforms or content management systems, the development
          process usually takes 4 to 8 weeks. This allows ample time for
          thorough planning, design, coding, testing, and revisions to ensure
          the final product meets your exact specifications and operates
          seamlessly. My goal is to balance speed with quality, delivering a
          polished website that aligns perfectly with your vision.
        </q>
      </div>
    );
  }
}

export default Duration;
