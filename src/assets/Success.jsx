import "../App.css";

export default function Success() {
  return (
    <div className="container-fluid ">
      <div
        className="msg position-absolute success"
        id="success"
        style={{ borderColor: "darkgreen" }}
      >
        <p className="text-success">
          Message Sent Successfully{" "}
          <i className="fa-solid fa-circle-check fa-xl"></i>
        </p>
      </div>
    </div>
  );
}
