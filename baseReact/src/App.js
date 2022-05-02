import { Link, Outlet } from 'react-router-dom';

function App () {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/change">Change</Link>
        <Link to="/click">Click</Link>
        <Link to="/keypress">Keypress</Link>
        <Link to="/mousemove">Mousemove</Link>
        <Link to="/submit">Submit</Link>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
