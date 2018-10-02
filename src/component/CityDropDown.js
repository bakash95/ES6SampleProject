import React from 'react';

const CityDropDown = ({ city, onUpdate, values }) => {

    const changeDropDown = e => {
        onUpdate('city', e);
    };

    return (
        <div>
            <select value={city} onChange={changeDropDown}>
                {
                    values.map((element, index) => {
                        return (
                            <option key={index} value={element}>{element}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default CityDropDown;