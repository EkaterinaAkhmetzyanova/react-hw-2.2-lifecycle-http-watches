import { useState } from "react";

export default function TimezoneForm({newZone}) {
    const [data, setData] = useState({name:'', zone: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        if(data.name.length < 0 || data.zone < -24 || data.zone > 24) {
            return false;
        }
        newZone(data);
        setData({name: '', zone: ''});
    };

    const handleChange = (event) => {
        setData(prevTimezoneForm => ({...prevTimezoneForm, [event.target.name]: event.target.value}));
    };

    return (
        <form onSubmit={handleSubmit} className='TimezoneForm'>
            <div className='TimezoneFormItem'>
                <label className='TimezoneLabel'>Название</label>
                <input className='TimezoneInput' 
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={data.name}></input>
            </div>
            <div className='TimezoneFormItem'>
                <label className='TimezoneLabel'>Временная зона</label>
                <input className='TimezoneInput' 
                    type='number'
                    id='zone'
                    name='zone'
                    onChange={handleChange}
                    value={data.zone}
                    required></input>
            </div>
            <div className='TimezoneFormItem'>
                <button type='submit' className='AddBtn'>Добавить</button>
            </div>
        </form>
    )
}