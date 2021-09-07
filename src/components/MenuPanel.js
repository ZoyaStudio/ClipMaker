import React, { useState } from 'react';

function MenuPanel ({
  dotColor,
  setDotColor,
  sizeFactor,
  setSizeFactor,
  backgroundColor,
  setBackgroundColor,
  backgroundOpacity,
  setBackgroundOpacity,
  width,
  setWidth,
  height,
  setHeight,
  imageUrl,
  setImageUrl,
  tracingLayer,
  setTracingLayer,
  tracingLayerOpacity,
  setTracingLayerOpacity
}) {
  //image size
  //line color
  //dot color
  //snap to other points
  //snap to border
  //upload tracing image
  //tracing image opacity
  //upload image
  const [formImageUrl, setFormImageUrl] = useState(imageUrl);
  const [formTracingLayer, setFormTracingLayer] = useState();
  return (
    <div className="menu-panel panel">
      <h3>Control Panel</h3>
      <h4>Image</h4>
       <div className="url-submission">
        <label for="image-url">Image</label>
        <input className="text-input" type="text" name="image-url" value={formImageUrl} onChange={(e) => {setFormImageUrl(e.target.value)}}/>
        <button onClick={() => {setImageUrl(formImageUrl)}}>Submit</button>
      </div>
      <div>
        <label for="width">Image Width</label>
        <input className="range" type="range" min="1" max="1000" step="1" name="width" value={width} onChange={(e) => {setWidth(e.target.value)}}/>
        {width} px
      </div>
      <div>
        <label for="height">Image Height</label>
        <input className="range" type="range" min="1" max="1000" step="1" name="height" value={height} onChange={(e) => {setHeight(e.target.value)}}/>
        {height} px
      </div>
      <div>
        <label for="scale-image">Scale Image</label>
        <input className="range" type="range" min=".1" max="2" step=".1" name="scale-image" value={sizeFactor} onChange={(e) => {setSizeFactor(e.target.value)}}/>
      </div>
      <h4>Nodes</h4>
      <div>
        <label for="dot-color">Node Color</label>
        <input type="color" name="dot-color" value={dotColor} onChange={(e) => {setDotColor(e.target.value)}}/>
      </div>
      <h4>Tracing Layer</h4>
      <div className="url-submission">
        <label for="tracing-url">Tracing Layer</label>
        <input className="text-input" type="text" name="tracing-url" value={formTracingLayer} onChange={(e) => {setFormTracingLayer(e.target.value)}}/>
        <button onClick={() => {setTracingLayer(formTracingLayer)}}>Submit</button>
      </div>
      <div>
        <label for="tracing-opacity">Tracing Layer Opacity</label>
        <input className="range" type="range" min="0" max="1" step=".05" name="tracing-opacity" value={tracingLayerOpacity} onChange={(e) => {setTracingLayerOpacity(e.target.value)}}/>
      </div>


      <h4>Background</h4>
      <div>
        <label for="background-color">Background Color</label>
        <input type="color" name="background-color" value={backgroundColor} onChange={(e) => {setBackgroundColor(e.target.value)}}/>
      </div>
      <div>
        <label for="background-opacity">Background Opacity</label>
        <input className="range" type="range" min="0" max="1" step=".05" name="backgound-opacity" value={backgroundOpacity} onChange={(e) => {setBackgroundOpacity(e.target.value)}}/>
      </div>
    </div>
  )
}
export default MenuPanel;