import React from 'react'


const CalcKeyboard = ({ Input, setInput, addInput, Calculate, clearInput }) => {
    // Return
    return (
        <>
            <button onClick={() => { addInput("7") }} className="col-3 keybtn">7</button>
            <button onClick={() => { addInput("8") }} className="col-3 keybtn">8</button>
            <button onClick={() => { addInput("9") }} className="col-3 keybtn">9</button>
            <button onClick={() => { addInput("/") }} className="col-3 keybtn operatorbtn">/</button>
            <button onClick={() => { addInput("4") }} className="col-3 keybtn">4</button>
            <button onClick={() => { addInput("5") }} className="col-3 keybtn">5</button>
            <button onClick={() => { addInput("6") }} className="col-3 keybtn">6</button>
            <button onClick={() => { addInput("*") }} className="col-3 keybtn operatorbtn">x</button>
            <button onClick={() => { addInput("1") }} className="col-3 keybtn">1</button>
            <button onClick={() => { addInput("2") }} className="col-3 keybtn">2</button>
            <button onClick={() => { addInput("3") }} className="col-3 keybtn">3</button>
            <button onClick={() => { addInput("-") }} className="col-3 keybtn operatorbtn">-</button>
            <button onClick={() => { addInput("0") }} className="col-3 keybtn">0</button>
            <button onClick={() => { addInput(".") }} className="col-3 keybtn">.</button>
            <button onClick={Calculate} className="col-3 keybtn">=</button>
            <button onClick={() => addInput("+")} className="col-3 keybtn operatorbtn">+</button>
            <button onClick={clearInput} className="col-12 keybtn lastbtn">C</button>
        </>
    )
}

export default CalcKeyboard;