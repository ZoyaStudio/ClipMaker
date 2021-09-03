
import utility from './utility.js';
import React from 'react';
import useMouse from '@react-hook/mouse-position';

var {makeLine, splitLine, removeNode} = utility;
function ViewPort ({background, coords, setCoords, height, width, setMouseY, setMouseX, setSelectedNode, selectedNode}) {
  const ref = React.useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  })
  var lines = [];
  var clipString = 'polygon(';
  var dots = coords.map((pair, index) => {
    var lineOnclickHandler = () => {
      setCoords(splitLine(coords, index))
    }
    var xCoord = pair[0];
    var yCoord = pair[1];
    clipString += xCoord + '% ' + yCoord +  '%';
    if (index !== coords.length - 1) {
      clipString += ', ';
      makeLine(pair, coords[index + 1], width, height, lines, lineOnclickHandler);
    } else {
      clipString += ')';
    }
    return (<span className="dot" id={index}
    onMouseDown={() => {
      console.log('on mouse down ', index)
      setSelectedNode(index);
    }}
    onMouseUp={() => {
      console.log('on mouse up');
      setSelectedNode(null);
    }}
    onContextMenu={(e)=> {
      e.preventDefault();
      console.log('right click')
      if (coords.length > 3) {
        setCoords(removeNode(coords, index));
        setSelectedNode(null);
      }
    }}

    style={{
      left: `calc(${xCoord}% - 2px)`,
     top: `calc(${yCoord}% - 2px)`,
    }}></span>);
  });
  makeLine(coords[coords.length -1], coords[0], width, height, lines);
  return (
    <div className="viewport-container"
    ref={ref}
    style={{width: width + 'px', height: height + 'px'}}
    onMouseMove={(e)=> {
      var coordsCopy = coords.slice();
      // var x = e.nativeEvent.offsetX/height * 100;
      // var y = e.nativeEvent.offsetY/height * 100;
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