import { useEffect } from 'react';

export default function Change () {
  useEffect(() => {
    function f (e) {
      document.getElementById('output').textContent = `You've pressed the "${e.key}" key. It's key code is ${e.which}.`;
    }
    // register keydown on mount
    document.addEventListener('keydown', f);

    // unregister on unmount
    return () => {
      document.removeEventListener('keydown', f);
    };
  }, []);

  return (
    <div>
      <h1>Key Code Translator</h1>
      <h3>Press any key, and see what it's key code is</h3>
      <div id="output"/>
    </div>
  );
}