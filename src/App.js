import background from './background.jpeg';
import './App.css';

var makeLine = (pair1, pair2, width, height, arr) => {
  var x1 = pair1[0] * width / 100;
  var y1 = pair1[1] * height / 100;
  var x2 = pair2[0] * width / 100;
  var y2 = pair2[1] * height / 100;
  var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
  var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  var transform = 'rotate('+angle+'deg)';
  arr.push(
    <div className="line" style={ {
      transform: transform,
      width: length + 'px',
      left: pair1[0] + '%',
      top: `calc(${pair1[1]}% - 2px)`,
    }}></div>
  )
}
//, top: `${100 - y1}%`
// width: 320.33px;
// height: 407.33px;
function App() {
  var coords = [[0, 100], [0, 20], [100, 0], [100, 100]];
  var lines = [];
  var clipString = 'polygon(';
  var dots = coords.map((pair, index) => {
    var xCoord = pair[0];
    var yCoord = pair[1];
    clipString += xCoord + '% ' + yCoord +  '%';
    if (index !== coords.length - 1) {
      clipString += ', ';
      makeLine(pair, coords[index + 1], 320.33, 407.33, lines);
    } else {
      clipString += ')';
    }
    return (<span className="dot" id={index} style={{
      left: `calc(${xCoord}% - 2px)`,
     top: `calc(${yCoord}% - 2px)`,
    }}></span>);
  });
  makeLine(coords[coords.length -1], coords[0], 320.33, 407.33, lines);
  return (
    <div className="App">
      <div className="container">
      <div className="viewport"style={{clipPath: clipString}}>
        <img src={background} alt="purple background" className="viewport" ></img>
      </div>
      {dots}
      {lines}
      </div>
    </div>
  );
}

export default App;
