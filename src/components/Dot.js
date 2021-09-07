function Dot ({index, pair, coords, setCoords, setSelectedNode, removeNode, dotColor}) {
  var xCoord = pair[0];
  var yCoord = pair[1];

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
    left: `calc(${xCoord}% - 4px)`,
   top: `calc(${yCoord}% - 4px)`,
   border: "solid 1px " + dotColor,
   backgroundColor: "rgba(0, 0, 0, 0.377)"

  }}></span>);
}
export default Dot;