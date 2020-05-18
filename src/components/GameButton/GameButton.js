import React, {useState, useEffect} from 'react'

const GameButton = ({func,id, clickedLib, reset, setReset}) => {
    const[clicked, setClicked] = useState(false)
    const [hidden, setHidden] = useState(false)

    console.log(clickedLib.length)

    useEffect(() => {
        if(reset && !hidden) setClicked(false)
        if(clickedLib.length === 2 && clickedLib[0] === clickedLib[1]) {
           if(clickedLib.length === 2 && clickedLib[0] === id) setHidden(true)
        }
    })
    
    const onButtonClick = () => {
        setClicked(true)
        if(clickedLib.length < 2){
            func([...clickedLib, id])
            setReset(false)
        } else {
            func([])
            setReset(true)
        }
    }

    return (
    <button 
        onClick={() => onButtonClick()} 
        className={`card ${clicked ? 'rotateY flame' : 'zomp'} ${hidden ? 'hidden' : ''}`}  
        id={id}>
        <span className={`front zomp ${clicked ? 'hidden' : ''}`}></span>
        <div className={`back flame ${clicked ? '' : 'hidden'}`}>
        <p className='card-name'>{id}</p>
        </div>
    </button>)
}

export default GameButton