import React from 'react'
import { Link } from 'react-router-dom';
import './Blocks.css';

function BlockItem(props) {
    return (
        <>
            <li className='blocks__item'>
                <Link className='blocks__item__link' to={props.path}>
                    <figure className='blocks__item__pic-wrap' >
                        <img src={props.src} alt=''
                            className='blocks__item__img'
                        />
                    </figure>
                    <div className='blocks__item__info'>
                        <h5 className='blocks__item__text'>
                            Description: '{props.text}'
                        </h5>
                        <h5 className='block_cid'>
                            CID: {props.cid}
                        </h5>
                        <h5 className='block_label'>
                            Cat: {props.label}
                        </h5>
                    </div>
                </Link>
                
            </li>
        </>
    )
}

export default BlockItem
