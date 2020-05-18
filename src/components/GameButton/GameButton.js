import React, {useState, useEffect} from 'react'

const GameButton = ({func,id, clickedLib, reset, setReset}) => {
    const[clicked, setClicked] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [limit, setLimit] = useState(false)
    console.log(clickedLib.length)

    useEffect(() => {
        if(reset && !hidden) {
            setClicked(false)
            setReset(false)
            setLimit(false)
        }
        if(clickedLib.length === 2){
            func([])
            setLimit(true)
        }
        
        if((clickedLib.length === 2 && clickedLib[0] === clickedLib[1]) && (clickedLib.length === 2 && clickedLib[0] === id)){
            setTimeout(() => {
                setHidden(true)
                
            }, 1000);
        }
        
    })
    useEffect(() => {
        if(limit){
            setTimeout(() => {
                setReset(true)
            }, 1000);
        }
    },[limit])
    
    const onButtonClick = () => {
        setClicked(true)
        if(clickedLib.length < 2){
            func([...clickedLib, id])
            // setTimeout(() => {
                setReset(false)
            // }, 1000);
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