import React from 'react'

function Toggle({label, toggleState, data, setState}) {
  const handleToggleChange = (checked) => {
    toggleState(checked)
    if (checked) { setState(data) }
  }
  return (
    <>
      <label className="toggle"> 
        <input type="checkbox" onChange={(e)=>handleToggleChange(e.target.checked)} />
        <div className="toggle-slider"></div>
      </label>
      <br/>
      <strong className="toggle-label">{label}</strong>
    </>
  )
}

export default Toggle