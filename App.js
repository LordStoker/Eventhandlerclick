import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    
    /**
     * Add our new function to the button
     */
    
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
