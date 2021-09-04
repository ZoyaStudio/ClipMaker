
import utility from './utility.js';
import React from 'react';
import useMouse from '@react-hook/mouse-position';
import Dot from './Dot.js';
var {makeLine, splitLine, removeNode, makeClipString} = utility;
function ViewPort ({background, coords, setCoords, height, width, setMouseY, setMouseX, setSelectedNode, selectedNode}) {
  const ref = React.useRef(null);
  var clipString = makeClipString(coords);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  })
  var lines = [];

  var dots = coords.map((pair, index) => {
    var lineOnclickHandler = () => {
      setCoords(splitLine(coords, index))
    }
    if (index !== coords.length - 1) {
      makeLine(pair, coords[index + 1], width, height, lines, lineOnclickHandler);
    }
    return <Dot index={index} pair={pair} coords={coords} setCoords={setCoords} setSelectedNode={setSelectedNode} removeNode />
  });
  makeLine(coords[coords.length -1], coords[0], width, height, lines);
  return (
    <div className="viewport-container"
    ref={ref}
    style={{width: width + 'px', height: height + 'px'}}
    onMouseMove={(e)=> {
      var coordsCopy = coords.slice();
      var x = mouse.x/width * 100;
      var y = mouse.y/height * 100;
      console.log(x, y);
      if (selectedNode !== null) {
        if (x > 0 && y > 0) {
          coordsCopy.splice(selectedNode, 1, [x, y]);
          setCoords(coordsCopy);
        }
      }
    }}
    >
      <div style={{clipPath: clipString}} className="viewport">
        <img src={background} alt="purple background" className="viewport"
        ></img>
      </div>
      {dots}
      {lines}
    </div>
  )
};

export default ViewPort;