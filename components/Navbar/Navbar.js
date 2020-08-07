import React, { useState } from 'react'
import Link from "next/link"
import { NavbarData } from "../datadummy/NavbarData"

function Navbar() {
    const [status, setStatus] = useState('close');
    return (
        <nav>
            <div className="NavBarmain">
                <Link href=''>
                    <img src="/s-back.png" className="imgnav" />
                </Link>
                <Link href=''>
                    <h1 className="navbar-logo"> LOGAX </h1>
                </Link>
                <div className="BurgerMenu_container" role="button"
                    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                    <i className={status}></i>
                    <i className={status}></i>
                    <i className={status}></i>
                </div>
                <ul className={status === 'open' ? 'nav-menu active' : 'nav-menu'}>
                    {NavbarData.map(prod => (
                        <li key={prod.id} >
                            <Link href={prod.Url}>
                                <a className="buttonneon">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  {prod.links}
                                </a>
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
            <style jsx>{`
                nav {
                    position: fixed;
                    width: 100%;
                    background: #fff;
                   
                }
                  .NavBarmain {
                    width: 80%;
                    margin: auto;
                    min-height: 0vh;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                  }
                  .imgnav {
                    width: 60px;
                    height: 60px;
                  }

                  .nav-menu {
                    width: 80%;
                    display: grid;
                    grid-template-columns: repeat(5, auto);
                    list-style: none;
                    text-align: center;
                    justify-content: end;
                    margin-right: 2rem;
                    
                    
                }
                .nav-menu li {
                  text-align: center;
                  top: 55px;
                  color: #fff;
                  width: 100%;
                  padding: 0.5rem 1rem;
                }
                  .BurgerMenu_container {
                    display: none;
                  }

                  @media (max-width: 780px) {
                    .NavBar-s {
                        width: 100%;
                        padding: 0px;
                    }
                    .nav-menu {
                      display: flex;
                      background: #fff;
                      flex-direction: column;
                      position: absolute;
                      top: 55px;
                      left: -100%;
                      opacity: 1;
                      padding: 0px;
                      transition: all 0.5s ease;
                      
                    }
                    .nav-menu.active {
                      display: flex;
                      width: 100%;
                      top: 55px;
                      left: 0   ;
                      opacity: 1;
                      transition: all 0.5s ease;
                    }
                    .nav-menu li {
                      text-align: center;
                      top: 55px;
                      color: #fff;
                      width: 100%;
                      padding: 0.5rem 1rem;
                    }

                    .BurgerMenu_container {
                      display: flex;
                      flex-direction: column;
                      padding: 18px;
                    }
                    i {
                      background-color: #000;
                      width: 50px;
                      height: 3.5px;
                      margin: 4px;
                      border-radius: 2px;  
                      transition:all ease 0.5s;
                    }
                    .open:nth-child(1) { transform: rotate(45deg) translateY(16px);  }
                    .open:nth-child(2) { opacity: 0; }
                    .open:nth-child(3) { transform: rotate(-45deg) translateY(-16px); }
          
                    .close:nth-child(1) { transform: rotate(0) translateY(0); }
                    .close:nth-child(2) {   opacity: 1; }
                    .close:nth-child(3) { transform: rotate(0) translateY(0); }
                }

                .buttonneon{
                  text-decoration: none;
                  border: none;
                  position: relative;
                  display: inline-block;
                  width: 100%;
                  color: #2196f3;
                  text-transform: uppercase;
                  letter-spacing: 3px;
                  overflow: hidden;
                  
                }
                .buttonneon:hover{
                  color: #fff;
                  background: #2196f3;
                  box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
                  transition-delay: 1s;
                }
                .buttonneon span{
                  position: absolute;
                  display: block;
                }
                .buttonneon span:nth-child(1){
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 2px;
                  background: linear-gradient(90deg,transparent,#2196f3);
                }
                .buttonneon:hover span:nth-child(1){
                  left: 100%;
                  transition: 1s;
                }
                .buttonneon span:nth-child(3){
                  bottom: 0;
                  right: -100%;
                  width: 100%;
                  height: 2px;
                  background: linear-gradient(270deg,transparent,#2196f3);
                }
                .buttonneon:hover span:nth-child(3){
                  right: 100%;
                  transition: 1s;
                  transition-delay: 0.5s;
                }
                .buttonneon span:nth-child(2){
                  top: -100%;
                  right: 0%;
                  width: 2px;
                  height: 100%;
                  background: linear-gradient(180deg,transparent,#2196f3);
                }
                .buttonneon:hover span:nth-child(2){
                  top: 100%;
                  transition: 1s;
                  transition-delay: 0.25s;
                }
                .buttonneon span:nth-child(4){
                  bottom: -100%;
                  left: 0;
                  width: 2px;
                  height: 100%;
                  background: linear-gradient(360deg,transparent,#2196f3);
                }
                .buttonneon:hover span:nth-child(4){
                  bottom: 100%;
                  transition: 1s;
                  transition-delay: 0.75s;
                }

            `}</style>

        </nav>
    )

}
export default Navbar
