import React from 'react'

const OptionList = ({option}) => {
    return (
        <option  value={option.value}>{option.text}</option>
    )
}

export default OptionList
