
var utility = {
  makeLine: (pair1, pair2, width, height, arr, cb) => {
    var x1 = pair1[0] * width / 100;
    var y1 = pair1[1] * height / 100;
    var x2 = pair2[0] * width / 100;
    var y2 = pair2[1] * height / 100;
    var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    var transform = 'rotate('+angle+'deg)';
    arr.push(
      <div className="line" onClick={cb} style={ {
        transform: transform,
        width: length + 'px',
        left: pair1[0] + '%',
        top: `calc(${pair1[1]}% - 2px)`,
      }}></div>
    )
  },
  splitLine: (coords, index) => {
    var coordsCopy = coords.slice();
    var pointA = coords[index];
    var isAtStart = index === coords.length -1;
    var pointB = isAtStart? coords[0] : coords[index + 1];
    var newX = (pointA[0] + pointB[0]) /2;
    var newY = (pointA[1] + pointB[1]) /2;
    if (isAtStart) {
      coordsCopy.splice(0, 0, [newX, newY]);
    } else {
      coordsCopy.splice(index + 1, 0, [newX, newY]);
    }
    return coordsCopy;
  },
  removeNode: (coords, index) => {
    var coordsCopy = coords.slice();
    coordsCopy.splice(index, 1);
    return coordsCopy;
  },
  makeClipString: (coordArr) => {
    var clipString = 'polygon(';
    coordArr.forEach((pair, index) => {
      var xCoord = pair[0];
      var yCoord = pair[1];
      clipString += xCoord + '% ' + yCoord +  '%';
      if (index !== coordArr.length - 1) {
        clipString += ', ';
      } else {
        clipString += ')';
      }
    });
    return clipString;
  }
}
export default utility;