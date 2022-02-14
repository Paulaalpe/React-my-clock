import React, { useEffect, useState} from 'react';

const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

  return (
    <>
        <h2>Reloj Digital</h2>
        <div className='digital-clock'>
            <p>{clockState}</p>
        </div>
    </>
  );
};

export default DigitalClock;
