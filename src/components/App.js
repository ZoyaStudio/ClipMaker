import background from './background.jpeg';
import React, { useState } from 'react';
import ViewPort from './ViewPort.js';
import MenuPanel from './MenuPanel.js';
import './../App.css';

// width: 320.33px;
// height: 407.33px;
function App() {
  const  [coords, setCoords] = useState([[0, 100], [0, 20], [100, 0], [100, 100]])
  const [width, setWidth] = useState(320.33);
  const [height, setHeight] = useState(407.33);
  const [selectedNode, setSelectedNode] = useState(null);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);

  return (
    <div className="App grid-parent">
      {/* <div className="viewport-container2"
    style={{width: width + 'px', height: height + 'px'}}
    onMouseMove={(e)=> {
      var coordsCopy = coords.slice();
      // console.log(e.nativeEvent.offsetX/width * 100, e.nativeEvent.offsetY/height * 100);
      if (selectedNode !== null) {
        var x = e.nativeEvent.offsetX/height * 100;
        var y = e.nativeEvent.offsetY/height * 100;
        if (x > 0 && y > 0) {
          coordsCopy.splice(selectedNode, 1, [x, y]);
          setCoords(coordsCopy);
        }
      }
    }}/> */}
     <ViewPort
      background={background}
      coords={coords}
      setCoords={setCoords}
      height={height}
      width={width}
      setMouseX={setMouseX}
      setMouseY={setMouseY}
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
     />
     <MenuPanel/>
    </div>
  );
}

export default App;
