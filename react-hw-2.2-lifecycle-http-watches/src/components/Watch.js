import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { useEffect, useState } from 'react';

export default function Watch({date}) {
    const [time, setTime] = useState(date);
    useEffect(() => {
        const interval = setInterval(() => {
            let sec = 1000;
            const newDate = new Date(time.getTime() + sec);
            sec+=1000;
            setTime(newDate);
        }, 1000);
        
        return () => {
            clearInterval(interval);
        }
    });

    return (
        <div className='Watch'>
            <Clock value={time} />
        </div>
    );
}