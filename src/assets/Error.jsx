import "../App.css";

export default function Error() {
  return (
    <div className="container-fluid">
      <div className="msg error" id="error" style={{ borderColor: "red" }}>
        <p className="text-danger">
          Oops! An Error Occurred{" "}
          <i className="fa-solid fa-circle-xmark fa-xl"></i>
        </p>
      </div>
    </div>
  );
}
