
import { useState } from 'react';
import { incrementBonus } from '../actions';

function Bonus({store}) {
  const [bonus, setBonus] = useState({ points: 0 });

  const increment = () => {
    setBonus({ points: bonus.points + 1 });
  };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${store.getState().bonus.points}</h3>

        <button onClick={()=>store.dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;