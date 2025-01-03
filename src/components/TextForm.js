import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = (event) => {
        if (text === '') {
            props.showAlert("Please Enter Some Text", "danger");
        }
        else {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success");
        }
    }

    const handleLoClick = () => {
        if (text === '') {
            props.showAlert("Please Enter Some Text", "danger");
        }
        else {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase", "success");
        }
    }

    const handleFupClick = () => {
        if (text === '') {
            props.showAlert("Please Enter Some Text", "danger");
        }
        else {
            let newText = text.split(" ").map((element) => {
                return element[0].toUpperCase() + element.slice(1);
            }
            );
            props.showAlert("Converted to Capitalize", "success");
            setText(newText.join(" "));
        }
    }

    const handleInClick = () => {
        if (text === '') {
            props.showAlert("Please Enter Some Text", "danger");
        }
        else {
            const invertedText = text
                .split("") // Split the text into an array of characters
                .map(char =>
                    char === char.toUpperCase()
                        ? char.toLowerCase() // Convert to lowercase if uppercase
                        : char.toUpperCase() // Convert to uppercase if lowercase
                )
                .join(""); // Join the characters back into a string
            props.showAlert("Text Case Has Inverted", "success");
            setText(invertedText);
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        if (text === '') {
            props.showAlert("Please Enter Some Text", "danger");
        }
        else {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard", "success");
        }
    }

    const handleExtraSpaces = () => {
        if (text === '') {
            props.showAlert("Please Enter Some Text", "danger");
        }
        else {
            let newtext = text.split(/[ ]+/)
            console.log(newtext);
            setText(newtext.join(" "));
            props.showAlert("Removed Extra Spaces", "success");
        }
    }

    const handleText = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label mb-3"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleFupClick}>Convert to captilize</button>
                <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleInClick}>Convert to inverse case</button>
                <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled = {text.length === 0} className='btn btn-danger mx-1 my-1' onClick={handleText}>Clear Text</button>
            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary:</h2>
                {/* <p>{text.length > 0 ? text.split(" ")[text.split(" ").length - 1] === ""? text.split(" ").length - 1: text.split(" ").length : 0} word and {text.length} characters</p> */}
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} word and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes to read the text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'No Text has enter to preview!'}</p>
            </div>
        </>
    )
}
