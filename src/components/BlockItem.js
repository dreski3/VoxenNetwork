import React from 'react'
import { Link } from 'react-router-dom';
import './Blocks.css';

function BlockItem(props) {
    return (
        <>
            <li className='blocks__item'>
                <div className='blocks__item__link'>
                    <Link  to={props.path}>
                        <figure className='blocks__item__pic-wrap' >
                            <img 
                                src={props.src} 
                                alt=''
                                className='blocks__item__img'
                            />
                        </figure>
                    </Link>
                </div>
                
                <div className='blocks__item__info'>
                    <h5 className='blocks__item__text'>
                        Description: '{props.text}'
                    </h5>
                    <h5 className='block_cid'>
                        CID: {props.cid}
                    </h5>
                    <h5 className='block_label'>
                        Category: {props.label}
                    </h5>
                </div>   
            </li>
        </>
    )
}

export default BlockItem
