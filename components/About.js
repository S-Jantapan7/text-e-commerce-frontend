import React from 'react'
const About = () => {
    return (
        < >
            <section className="about">
                <div className="aboutlogo">
                    <img src="/S-back.png" className="imgabout" />
                </div>
                <div className="aboutcase">
                    <p>About</p>
                    <p>     I am interested learn develop and design 
                        web application with new technology
                    </p>
                </div>
            </section>
            <style jsx>{`
                .about{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    color:  #FFF;
                    max-width: 100%;
                    margin-top: 100px;    
                    margin-bottom: 100px;
                    background: #07e9e9;
                    

                }
                .aboutcase{
                    width: 45%;
                    margin: 1rem;
                    flex-basis: auto;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                .aboutlogo{
                    width: 40%;
                    margin: 1rem;
                    align-items: center;
                    flex-basis: auto;
                }
                .imgabout{
                    height: 20em;
                }

                .aboutcase p:nth-child(1){
                    text-align: center;

                    font-family: Cambria;
                    font-weight: bold;
                    font-size: 22px;
                }
               
                .aboutcase p:nth-child(2){
                    margin: 0px 0px 0px 30px;
                    font-family: myriad pro regular;
                    font-size: 20px;
                    line-height: 30px;
                }
                @media (max-width: 650px) { 
                    .aboutlogo {
                        display: none;  
                    }
                    .aboutcase{
                        width: 100%;
                    }
                }


            `}</style>
        </>
    )
}

export default About