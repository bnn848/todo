import React,{useState, useEffect} from 'react'

export const TextField = ({state, setState, addText}) => {

  const handleTextChange = (event) => {
    console.log(state)
    setState(event.target.value)
  }

  return (
    <div>
      <input type="text" value={state} onChange={handleTextChange} placeholder="ここに入力されたものが追加されます" />
      <button onClick={addText}>追加</button>
    </div>
  )
}
