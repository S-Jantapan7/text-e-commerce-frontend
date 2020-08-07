import React from 'react'
import styles from '../styles/Home.module.css'
function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_social}>
                    <p>
                        <a href="https://www.facebook.com/LogaxTrader">
                            <img src="/Icon-facebook-w.png" />
                        </a>
                    </p>
                    <p >
                        <a>
                            <img src="/Icon-twitter-w.png" />
                        </a>
                    </p>
                    <p >
                        <a>
                            <img src="/Icon-instagram-w.png" />
                        </a>
                    </p>
                    <p >
                        <a href="">
                            <img src="/Icon-youtube-w.png" />
                        </a>
                    </p>
                </div>

                <a >Copyright © 2020 by {' '} LOGAX  </a>
            </footer>
        </>
    )
}

export default Footer