import { useState, useEffect } from 'react';

function Timer() {
  const [secondes, setSecondes] = useState(0);
  const [dateHeure, setDateHeure] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setSecondes((s) => s + 1);
      setDateHeure(new Date()); 
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
      <div> 
      <p>Temps écoulé : {secondes} secondes</p>
      <p>Date & heure actuelle : {dateHeure.toLocaleString()}</p>
      </div>
  )
;
}

export default Timer;