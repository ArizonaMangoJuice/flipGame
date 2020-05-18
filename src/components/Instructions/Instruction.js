import React from 'react'

const Instructions = ({instruction, derotate, func}) => {
    return (
        <>
            <div className='back-cover'></div>
            <div onClick={() => func()}  className={`instructions flame ${instruction ? 'rotateY' : ''} ${derotate ? 'derotateY' : ''}`}>  
                    <h2 className='title'>INSTRUCTIONS</h2>
                    <p className='info'>Press [p] to pause, or [Esc] to abandon game</p>
                    <p className='info'>
                        Flip is a timed card memory game. Click the green cards to see what symbol they uncover and try to find 
                        the matching symbol underneat the other cards.
                    </p>
                    <p className='info'>Uncover tow matching symbols at once to elimiate them from the game.</p>
                    <p className='info'>Eliminate all cards as fast as you can to win the game. Have fun FLIPing!</p>
                </div>
        </>
    )
}

export default Instructions