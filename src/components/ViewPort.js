
import utility from './utility.js';
import React from 'react';
import useMouse from '@react-hook/mouse-position';
import Dot from './Dot.js';
import Line from './Line.js';
var {makeClipString, removeNode} = utility;
function ViewPort ({background, coords, setCoords, height, width, setMouseY, setMouseX, setSelectedNode, selectedNode}) {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  })
  var clipString = makeClipString(coords);
  var lines = coords.map((pair, index) => {
    if (index !== coords.length - 1) {
      return <Line index={index} coords={coords} set={setCoords} height={height} width={width} pair1={pair} pair2={coords[index + 1]}/>
    } else {
      return <Line index={index} coords={coords} set={setCoords} height={height} width={width} pair1={pair} pair2={coords[0]}/>
    }
  });

  var dots = coords.map((pair, index) => {
    return <Dot index={index} pair={pair} coords={coords} setCoords={setCoords} setSelectedNode={setSelectedNode} removeNode={removeNode} />
  });
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