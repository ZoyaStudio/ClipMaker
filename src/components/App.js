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
  return (
    <div className="App grid-parent">
     <ViewPort background={background} coords={coords} height={height} width={width} />
     <MenuPanel/>
    </div>
  );
}

export default App;
