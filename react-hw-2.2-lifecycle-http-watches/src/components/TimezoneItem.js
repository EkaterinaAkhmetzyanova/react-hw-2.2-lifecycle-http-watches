import Watch from "./Watch";

export default function TimezoneItem({zone, deleteTimezone}) {
    const {name, id, date} = zone;
    
    const handleDelete = (event) => {
        deleteTimezone(event.target.id);
    }

    return (
        <div className='Timezone'>
            <div className='TimezoneName'>{name}</div>
            <button className='DeleteBtn' type='button' id={id} onClick={handleDelete}>X</button>
            <Watch date={date} />
        </div>
    );
}