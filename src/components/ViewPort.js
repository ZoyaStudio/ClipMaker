
import utility from './utility.js';
var makeLine = utility.makeLine;
function ViewPort ({background, coords, height, width}) {
  var lines = [];
  var clipString = 'polygon(';
  var dots = coords.map((pair, index) => {
    var xCoord = pair[0];
    var yCoord = pair[1];
    clipString += xCoord + '% ' + yCoord +  '%';
    if (index !== coords.length - 1) {
      clipString += ', ';
      makeLine(pair, coords[index + 1], width, height, lines);
    } else {
      clipString += ')';
    }
    return (<span className="dot" id={index} style={{
      left: `calc(${xCoord}% - 2px)`,
     top: `calc(${yCoord}% - 2px)`,
    }}></span>);
  });
  makeLine(coords[coords.length -1], coords[0], width, height, lines);
  return (
    <div className="viewport-container">
      <div style={{clipPath: clipString}} className="viewport">
        <img src={background} alt="purple background" className="viewport" ></img>
      </div>
      {dots}
      {lines}
    </div>
  )
};

export default ViewPort;