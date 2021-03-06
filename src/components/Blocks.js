import React from 'react'
import BlockItem2 from './BlockItem2'
// import BlockItem from './BlockItem'
import './Blocks.css';

function Blocks() {
    return (
        <div className='blocks'>
            <div className='blocks__container'>
                <div className='blocks__wrapper'>
                    <ul className='blocks__items'>
                        <BlockItem2  
                            src='images/img-1.jpg'
                            text='Volume description'
                            label='adventure stuff'
                            path='/categories'
                            cid='QmX4nZh3fJgKkFbuKisUK6qr4zNwjvkHtJmoToofYNJDb7'
                        />                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blocks
