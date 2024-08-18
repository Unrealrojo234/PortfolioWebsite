import './Loader.css'
export default function Loader() {
  return (
    <div className="container-fluid">
      <div className="loader">
        <div className="load-inner load-one"></div>
        <div className="load-inner load-two"></div>
        <div className="load-inner load-three"></div>
        <span className="text">Loading...</span>
      </div>
    </div>
  );
}
