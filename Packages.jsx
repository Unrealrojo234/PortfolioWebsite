import diamond from "./src/assets/Images/Packages/diamond.png";
import emarald from "./src/assets/Images/Packages/emarald.png";
import ruby from "./src/assets/Images/Packages/ruby.png";

export default function Packages() {
  return (
    <div className="container-fluid" style={{ position: "relative" }}>
      <h1>Packages <i className="fa-solid fa-boxes-stacked fa-xl" style={{color: "#63E6BE"}}></i></h1>
      <div
        style={{
          border: "2px solid #00898f",
          backgroundColor: "#1b1c2c",
          display: "inline-block",
          margin: "2rem",
          padding: "8px",
        }}
        className="card"
      >
        <h1
          className="card-title text-center"
          style={{ display: "inline-block" }}
        >
          Emarald
        </h1>
        <img src={emarald} className="img-fluid" style={{ width: "4rem" }} />
        <ul>
          <li>Free Website Hosting</li>
          <li>Free Domain Name</li>
          <li>Upto 3 pages</li>
          <li>Website Maintance for 1 Month</li>
          <li>Email Intergration</li>
          <li>Google Maps Intergration</li>
          <li>Static Website</li>
          <li>Free Website Mockups And Images</li>
          <li>Search Engine Optization</li>
        </ul>
        <div
          className="card text-center"
          style={{
            border: "2px solid #00898f",
            backgroundColor: "#1b1c2c",
            padding: "8px",
          }}
        >
          Ksh. 15,000
        </div>
      </div>
      <div
        style={{
          border: "2px solid #00898f",
          backgroundColor: "#1b1c2c",
          display: "inline-block",
          margin: "2rem",
          padding: "8px",
        }}
        className="card"
      >
        <h1
          className="card-title text-center"
          style={{ display: "inline-block" }}
        >
          Ruby
        </h1>
        <img src={ruby} className="img-fluid" style={{ width: "4rem" }} />
        <ul>
          <li>Free Website Hosting</li>
          <li>Free Domain Name</li>
          <li>Upto 5 pages</li>
          <li>Website Maintance for 2 Months</li>
          <li>Google Maps Intergration</li>
          <li>Full Stack Web Application</li>
          <li>Free Website Mockups And Images</li>
          <li>Background Videos</li>
          <li>Search Engine Optization</li>
        </ul>
        <div
          className="card text-center"
          style={{
            border: "2px solid #00898f",
            backgroundColor: "#1b1c2c",
            padding: "8px",
          }}
        >
          Ksh. 30,000
        </div>
      </div>
      <div
        style={{
          border: "2px solid #00898f",
          backgroundColor: "#1b1c2c",
          display: "inline-block",
          margin: "2rem",
          padding: "8px",
        }}
        className="card"
      >
        <h1
          className="card-title text-center"
          style={{ display: "inline-block" }}
        >
          Diamond
        </h1>
        &nbsp;
        <img src={diamond} className="img-fluid" style={{ width: "3rem" }} />
        <ul>
          <li>Free Website Hosting</li>
          <li>Free Domain Name</li>
          <li>Upto 10 pages</li>
          <li>Website Maintance for 3 Months</li>
          <li>Google Maps Intergration</li>
          <li>Admin Dashboard</li>
          <li>Free Website Mockups And Images</li>
          <li>Background Videos</li>
          <li>Search Engine Optization</li>
        </ul>
        <div
          className="card text-center"
          style={{
            border: "2px solid #00898f",
            backgroundColor: "#1b1c2c",
            padding: "8px",
          }}
        >
          Ksh. 50,000
        </div>
      </div>
    </div>
  );
}
