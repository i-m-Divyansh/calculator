import React, { useState } from 'react'
import './index.css'
import CalcScreen from './CalcScreen'
import CalcKeyboard from './CalcKeyboard'


const CalcBody = () => {
    // Hook
    const [Input, setInput] = useState("");
    // AddInput Fucntion
    const addInput = (char) => {
        var newInput

        if (Input.length === 0) {
            if (isNaN(Number(char))) {
                newInput = [...Input]
                newInput = 0 + char
                setInput(newInput)
                return
            }
            else {
                newInput = [...Input]
                newInput += char
                setInput(newInput)
                return;
            }
        }

        newInput = Input
        newInput += char
        setInput(newInput);
    }
    // ClearInput Function
    const clearInput = () => {
        setInput("");
    }
    // Calculate Function
    const Calculate = () => {
        setInput(evaluate(Input));
    }
    // Evaluate Fucntion
    function evaluate(fn) {
        return new Function('return ' + fn)();
    }
    // Return
    return (
        <>
            <div className="Calc-body shadow">
                <CalcScreen
                    Input={Input}
                />
                <CalcKeyboard
                    Input={Input}
                    setInput={setInput}
                    addInput={addInput}
                    clearInput={clearInput}
                    Calculate={Calculate}
                />
            </div>
        </>
    )
}

export default CalcBody;