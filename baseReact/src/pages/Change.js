export default function Change () {
  return (
    <div>
      <h1>Some data binding</h1>
      <h3>Type something in the input box, and then press tab or click outside the input box</h3>
      <input id="change-me" onInput={e => {
        const div = document.getElementById('output');
        div.textContent = e.target.value;
      }}/>
      <div id="output"/>
    </div>
  );
}