import React from 'react'
import About from './About'
import Products from './Products'
const Home = () => {
    return (
        < >
            <section className="home">
                <div className="showcase">
                    <p>hello</p>
                    <p>I'm LOGAX</p>
                    <p>I am Developer & Desing</p>
                    <a href=" "  >
                        <button className="btn-b">
                            <img src="/Asset 1.png" className="logohome" />
                        </button>
                    </a>
                    <a href="https://github.com/S-Jantapan7"  >
                        <button className="btn-w"  >
                            <img src="/logo-github.png" className="logohome" />
                        </button>
                    </a>

                </div>
                <div className="img-home">
                    <img src="/Assets1.png" className="imghome" />
                </div>
            </section>
            <About />
            <Products />
            <style jsx>{`
                .home{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    color:  #000;
                    max-width: 100%;
                    margin-top: 100px;    
                    margin-bottom: 50px;
                }
                .showcase{
                    width: 45%;
                    margin: 1rem;
                    flex-basis: auto;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                .img-home{
                    width: 40%;
                    margin: 1rem;
                    flex-basis: auto;
                }
                .imghome{
                    height: 20em;
                }

                .showcase p:nth-child(1){
                    margin: 0px 0px 0px 60px;
                    font-family: Cambria;
                    font-weight: bold;
                    font-size: 22px;
                }
                .showcase p:nth-child(2){
                    font-family: Cambria;
                    font-weight: bold;
                    font-size: 60px;
                }
                .showcase p:nth-child(3){
                    margin: 0px 0px 30px 30px;
                    font-family: myriad pro regular;
                    font-size: 20px;
                    line-height: 30px;
                }
                
                .showcase button{
                    width: 150px;
                    height: 60px;
                    margin: 0px;
                }

                .btn-b{
                    border: none;
                    background: #000;
                    display: inline-block;
                    width: 150px;
                    height: 60px;
                    color: #2196f3;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    margin-bottom: 100px;
                    overflow: hidden;
                  }
                  .btn-b:hover{
                    color: #255784;
                    background: #2196f3;
                    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
                    transition-delay: 0.25s;
                  }
                  
                .btn-w{
                    border: none;
                    background: #fff;
                    display: inline-block;
                    width: 150px;
                    height: 60px;
                    color: #2196f3;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    margin-bottom: 100px;
                    overflow: hidden;
                  }
                  .btn-w:hover{
                    color: #255784;
                    background: #2196f3;
                    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
                    transition-delay: 0.25s;
                  }
                .logohome {
                    height: 3em;
                }

            @media (max-width: 880px) {
                .showcase{
                    width: auto;
                }
            
                .img-home{
                    display: none;
                    width: auto;
                    margin: 1rem;
                }
                .showcase button{
                    width: 120px;
                    height: 50px;
                    margin: 0px;
                }
                .logohome {
                    height: 2em;
                }
            }
            @media (max-width: 350px) {
                .showcase button{
                    width: 80px;
                    height: 40px;
                    margin: 0px;
                }
                .logohome {
                    height: 2em;
                }
            }

            `}</style>
        </>
    )
}

export default Home