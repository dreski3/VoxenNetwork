import React from 'react'
import { Link } from 'react-router-dom';
import './Blocks.css';

function LinkBlock(props) {
    return (
        <>
            <li className='blocks__item'>
                <Link className='blocks__item__link' to={props.path}>
                    <div className='blocks__item__info'>
                        <h1 className='blocks__item__text'>
                            {props.text}
                        </h1>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default LinkBlock
