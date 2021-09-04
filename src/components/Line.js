import utility from './utility.js';
var {splitLine} = utility;
function Lines ({pair1, pair2, index, coords, setCoords, width, height}) {

    var x1 = pair1[0] * width / 100;
    var y1 = pair1[1] * height / 100;
    var x2 = pair2[0] * width / 100;
    var y2 = pair2[1] * height / 100;

    var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    var transform = 'rotate('+angle+'deg)';
    return (
      <div className="line" onClick={() => {setCoords(splitLine(coords, index))}}
      style={ {
      transform: transform,
      width: length + 'px',
      left: pair1[0] + '%',
      top: `calc(${pair1[1]}% - 2px)`,
    }}
    ></div>
)
};
export default Lines