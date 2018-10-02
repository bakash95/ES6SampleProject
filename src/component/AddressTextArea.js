import React from 'react';

const AddressTextArea = ({ address, onUpdate}) => {
    const changeAddress = e => {
        onUpdate('address', e);
    };

    return (
        <div>
            <textarea value={address} onChange={changeAddress} placeholder="Enter Address here" />
        </div>
    );
}

export default AddressTextArea;