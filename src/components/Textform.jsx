import React from 'react'
import { useState } from 'react' 

export default function Textform(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () =>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success")
    }
    const handleLoClick = () =>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase" , "success")
    }
    
    const reset = () =>{
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared" , "warning")
    }
    
    const handleUcClick = () =>{
        let lowerText=text.toLowerCase();
        const ar=lowerText.split(" "); //'this is my name' becomes '[this],[is],[my],[name]' 
        var newText;
        const result= ar.map((t)=>{ //returns array result ['This', 'Is', 'My', 'Name']
            return  newText=t.charAt(0).toUpperCase() + t.slice(1); //'this' becomes 'This' and so on
        });
        
        newText=result.join(' ') ; // convert array into string with a space ' '  in between each element 
        setText(newText); 
        props.showAlert("Text Converted To UpperCase for each Word" , "success")
    }
    
    const handleCopy = () =>{ 
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied" , "success")
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
        
    return (
        <>
        {console.log("rendred")}
        <div className="container" style={{color:props.mode==='light'?'black':'white'}} >

        <div className="mb-3">
        <h1>{props.heading}</h1> 
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white' }} value={ text } onChange={handleOnChange} id="myBox" rows="10"></textarea>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLoClick} >Conver to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick}>Conver to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUcClick} >Conver to Uc</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleCopy} >Copy </button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={reset} >Reset </button>
    </div> 
        </div>
        <div className="conraianer m-3"  style={{color:props.mode==='light'?'black':'white'}} >
            <h2>Your Summary</h2>
            <p>  {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
            <p>  {text.split(/\s+/).filter((element)=>{return element[0]!==''}).length * 0.008} minutes to read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter Something in The TextBox above to preview it here'}</p>
        </div>
        </>

  )
}
