import background from './background.jpeg';
import React, { useState } from 'react';
import ViewPort from './ViewPort.js';
import MenuPanel from './MenuPanel.js';
import utility from './utility.js'
import './../App.css';

// width: 320.33px;
// height: 407.33px;
function App() {

  const  [coords, setCoords] = useState([[0, 100], [0, 20], [100, 0], [100, 100]])
  const [width, setWidth] = useState(320.33);
  const [height, setHeight] = useState(407.33);
  const [selectedNode, setSelectedNode] = useState(null);
  const [dotColor, setDotColor] = useState('red');

  var clipString = utility.makeClipString(coords);

  return (
    <div className="App grid-parent">
      <h1 className="title">ZoyaStudio's Clip Path Maker</h1>
     <ViewPort
      background={background}
      clipString={utility.makeClipString(coords)}
      coords={coords}
      setCoords={setCoords}
      height={height}
      width={width}
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
     />
     <MenuPanel clipString={clipString}/>
     <div className="result-box panel">
       <h3>Copy and past this into a style sheet:</h3>
      <p>clip-path: {clipString}</p>
    </div>
      <div className="detail panel">
        <h3>How to use this app:</h3>
        <p>
          Left-click and drag a node to move it<br/>
          Right on a node to delete it.<br/>
          Hover over the edge of the image to view line<br/>
          Left-click line to create a node
        </p>
      </div>
    </div>
  );
}

export default App;
