import React from 'react'

const IntroBlock = ({background, letter, introFunc, instruction}) => {
    return (
        <div onClick={introFunc} className={`intro-blocks ${background ? background + ' reversed' : ''} ${background ? '' : 'main-blocks'}`}>
            <span className='intro-text'>
                {letter}
            </span>
        </div>
    )
}

export default IntroBlock