import { useEffect } from 'react';

export default function Change () {
  useEffect(() => {
    const form = document.getElementById('submit-me');
    const button = form.querySelector('button');

    const input = document.createElement('input');
    input.setAttribute('id', 'test');
    form.insertBefore(input, button);

    const output = document.createElement('div');
    output.id = 'output';
    document.getElementById('submit-div').appendChild(output);
  }, []);

  return (
    <div id={'submit-div'}>
      <form id="submit-me" onSubmit={e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const test = document.getElementById('test').value;
        document.getElementById('output').textContent = JSON.stringify({ name, age, test });
      }}>
        <input id="name"/>
        <input id="age"/>
        <button>Click Me</button>
      </form>
    </div>
  );
}