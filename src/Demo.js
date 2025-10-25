import "./Demo.css";
import ele from './imge/ele.png';
function Demo() {
  return (
    <div>
      <div className="container5">
        <h1>hii</h1>
        <div className="demo">
          <h1>helo</h1>
        </div>
      </div>

      {/* Flag Section */}
      <div className="flag">
        <div className="red"></div>
        <div className="ellow">
          <img src={ele} alt="Yellow Section" />
        </div>
        <div className="red"></div>
        <h3>TVK</h3>
      </div>
      <div className="dmk">
        <div className="black"></div>
        <div className="red1"></div>

        <h3>DMK</h3>
      </div>
      <h1>{` ${process.env.REACT_APP_BACKEND_URL}/api/profiles`}</h1>
    </div>
  );
}

export default Demo;
