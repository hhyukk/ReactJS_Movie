import { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('Hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, seteShowing] = useState(false);
  const onClick = () => seteShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
