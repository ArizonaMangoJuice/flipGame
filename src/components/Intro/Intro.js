import React, { useState, useRef, useEffect } from 'react'
import './intro.css'
import IntroBlock from '../IntroBlock/IntroBlock'
import Instructions from '../Instructions/Instruction'
import GameButton from '../GameButton/GameButton'
import shuffleArray from '../../util/ArrayShuffle'

let characters =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
characters = shuffleArray(characters)

const Intro = props => {
    const [instruction, setInstruction] = useState(false)
    const [derotate, setDerotate] = useState(false)
    const [game, setGame] = useState(false)
    const [start, setStart] = useState(false)
    const [clickedLib, setClickedLib] = useState([])
    const [reset, setReset] = useState(false)
    let changeStyleTimerToClear = useRef(false)

    const changeStyle = () => {
        setTimeout(() => {
            setInstruction(!instruction)
            setDerotate(false)
        }, 1000)
            setDerotate('inside derotate',true)
            console.log(derotate)
    }

    const InstructionClicked = () => {
        setInstruction(!instruction)
        setGame(false)
    }

    let gameBoard = []

    characters.forEach((e, i) => {
        gameBoard.push(
            <GameButton 
                func={setClickedLib}
                clickedLib={clickedLib}
                reset={reset}
                setReset={setReset}
                id={characters[i]}    
                key={i}
            />
        )
    })

    return (
        <>
        { !start 
            ?
            <div className='intro-container zomp relative'>
                <IntroBlock introFunc={() => console.log('hello')} letter = 'F'/>
                <IntroBlock background='flame' letter = 'L' />
                <IntroBlock introFunc={() => InstructionClicked()} instruction={instruction} letter = 'I' />
                <IntroBlock introFunc={() => setGame(!game)} letter = 'P' />
            {instruction 
                ? 
                    <Instructions
                        instruction={instruction}
                        derotate={derotate}
                        func={() => changeStyle()}
                    />
                : null}
            
            {game
                ?
                <div className={`intro-blocks difficulty-back flame ${game ? 'rotateY' : ''}`}>
                    <button onClick={() => setStart(true)} className='difficulty flame'>Start</button>
                    {/* <button className='difficulty flame'>Medium</button>
                    <button className='difficulty flame'>Hard</button> */}
                </div>
                :
                null
            }
            </div>
            :
            <div className='game-container'>
                {gameBoard}
            </div>
        }

        </>
    )
    }


export default Intro


