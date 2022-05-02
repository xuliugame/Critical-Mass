export default function Change () {
  return (
    <div>
      <h1>Disapearing Box</h1>
      <h3>Click the Box, I dare you</h3>
      <div className="red-box" onClick={e => {
        e.target.style.display = 'none';
      }}/>
    </div>
  );
}