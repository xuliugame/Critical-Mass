export default function Change () {
  return (
    <div>
      <h1>x and y</h1>
      <h3>move your mouse in the box to see the coordinates of your mouse</h3>
      <div className="red-box" onMouseMove={e => {
        e.target.textContent = `${e.clientX}, ${e.clientY}`;
      }}/>
    </div>
  );
}