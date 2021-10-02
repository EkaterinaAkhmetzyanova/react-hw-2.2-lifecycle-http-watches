import TimezoneForm from "./TimezoneForm";
import { useState } from "react";
import TimezoneItem from "./TimezoneItem";
import { nanoid } from "nanoid";

export default function TimezoneWidget() {
    const [zones, setTimezone] = useState([]);

    const newZone = (data) => {
        const currentDate = new Date();
        console.log(currentDate);
        const date = new Date((currentDate.getTime() + (data.zone * 3600000)));
        console.log(date);
        zones.push({
            date: date,
            name: data.name,
            id: nanoid(),
        });
        setTimezone([...zones]);
        console.log(zones);
    }

    const deleteTimezone = (id) => {
        const filter = zones.filter((el) => el.id !== id);
        setTimezone([...filter]);
    }
    console.log()
    return (
        <div className='TimezoneWidget'>
            <TimezoneForm newZone={newZone} />;
            <div className='TimezoneWrapper'>
                {zones.map((el) => {
                    return <TimezoneItem zone={el} key={el.id} deleteTimezone={deleteTimezone} />})}
            </div>
        </div>
    )
}