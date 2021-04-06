import React from 'react'
// import HeroSection from '../HeroSection';
// import LinkBlock from '../Link_Blocks';
import './Home.css'
import { Link } from 'react-router-dom';
import Blocks from '../Blocks'
import SendFleek from '../sendFleek';

function Home() {
    return (
        <>
            <div>
                <header>
                    <nav>
                        <a className='nav' href='#'>Start</a>
                    </nav>
                </header>

                <div>
                    <div className='box_1'>
                        <img className='imagen_prop' src={'/VXN.gif'} alt='VXN Logo'/>
                        <form method='GET' role='search'>
                            <input className='search_bar' type='text' placeholder='Search...'/>
                        </form>
                        <SendFleek/>
                        <h1 className='font'>Welcome to Voxen Network.</h1>
                        <h2 className='font'>The Republic of 3D Models.</h2>
                    </div>

                    <div className='box_2'>
                        <Link to='/categories' className='buttom_1'>
                            Categories 
                        </Link>
                        <Link to='/library' className='buttom_1'>   
                            Library
                        </Link>
                        
                    </div>

                    <h2 className='font'>Featured Volumes</h2>
                    
                </div>
                {/* <div class="box_3">
                    <a className="buttom_2" href="#">Model 1</a>
                    <a className="buttom_2" href="#">Model 2</a>
                    <a className="buttom_2" href="#">Model 3</a>
                    <a className="buttom_2" href="#">Model 4</a>
                    <a className="buttom_2" href="#">Model 5</a>
                    <a className="buttom_2" href="#">Model 6</a>
                </div> */}
                <Blocks />
                <footer>
                    <p>Voxen S.A</p>
                </footer>
            </div> 
        </> 
    );
  }
  
  export default Home;