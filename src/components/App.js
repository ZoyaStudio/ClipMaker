import React, { useState } from 'react';
import ViewPort from './ViewPort.js';
import MenuPanel from './MenuPanel.js';
import utility from './utility.js'
import './../App.css';

// width: 320.33px;
// height: 407.33px;
function App() {
 // "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
 //'https://i.natgeofe.com/n/ffb1b220-9ad7-4f79-ab6f-d236c6d397df/08-love-and-beauty.jpg'
  const  [coords, setCoords] = useState([[0, 100], [0, 20], [100, 0], [100, 100]]);
  const [width, setWidth] = useState(885);
  const [height, setHeight] = useState(604);
  const [sizeFactor, setSizeFactor] = useState(.5);
  const [imageUrl, setImageUrl] = useState('https://i.natgeofe.com/n/ffb1b220-9ad7-4f79-ab6f-d236c6d397df/08-love-and-beauty.jpg')
  const [tracingLayer, setTracingLayer] = useState(null);
  const [tracingLayerOpacity, setTracingLayerOpacity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [backgroundOpacity, setBackgroundOpacity] = useState(.5);
  const [selectedNode, setSelectedNode] = useState(null);
  const [dotColor, setDotColor] = useState('#FF0000');

  var clipString = utility.makeClipString(coords);

  return (
    <div className="App grid-parent">
      <h1 className="title">ZoyaStudio's Clip Path Maker</h1>
     <ViewPort
      imageUrl={imageUrl}
      tracingLayer={tracingLayer}
      tracingLayerOpacity={tracingLayerOpacity}
      backgroundColor={backgroundColor}
      backgroundOpacity={backgroundOpacity}
      dotColor={dotColor}
      clipString={utility.makeClipString(coords)}
      coords={coords}
      setCoords={setCoords}
      height={height * sizeFactor}
      width={width * sizeFactor}
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
     />
     <MenuPanel
     setDotColor={setDotColor}
     dotColor={dotColor}
     setSizeFactor={setSizeFactor}
     sizeFactor={sizeFactor}
     setBackgroundColor={setBackgroundColor}
     backgroundColor={backgroundColor}
     setBackgroundOpacity={setBackgroundOpacity}
     backgroundOpacity={backgroundOpacity}
     setWidth={setWidth}
     width={width}
     setHeight={setHeight}
     height={height}
     setImageUrl={setImageUrl}
     imageUrl={imageUrl}
     setTracingLayer={setTracingLayer}
     tracingLayer={tracingLayer}
     setTracingLayerOpacity={setTracingLayerOpacity}
     tracingLayerOpacity={setTracingLayerOpacity}
     />
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
