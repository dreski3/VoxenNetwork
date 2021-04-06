import React from 'react'
import { Link } from 'react-router-dom';
// import './Blocks.css';
import './BlockItem2.css'

function BlockItem2(props) {
    return (
        <>
            <section className="box_3">
                <a className="Models M_1"  href="#">Model 1</a>
                <a className="Models M_2" href="#">Model 2</a>
                <a className="Models M_3" href="#">Model 3</a>
                <div className="description D_1"><p>Name:</p><p>Category:</p><p>CID:</p><button className="nav">Download</button></div>
                <div className="description D_2"><p>Name:</p><p>Category:</p><p>CID:</p><button className="nav">Download</button></div>
                <div className="description D_3"><p>Name:</p><p>Category:</p><p>CID:</p><button className="nav">Download</button></div>
                
            
                <a className="Models M_4" href="#">Model 4</a>
                <a className="Models M_5" href="#">Model 5</a>
                <a className="Models M_6" href="#">Model 6</a>
                <div className="description D_4"><p>Name:</p><p>Category:</p><p>CID:</p><button className="nav">Download</button></div>
                <div className="description D_5"><p>Name:</p><p>Category:</p><p>CID:</p><button className="nav">Download</button></div>
                <div className="description D_6"><p>Name:</p><p>Category:</p><p>CID:</p><button className="nav">Download</button></div>  
            </section>
        </>
    )
}

export default BlockItem2
