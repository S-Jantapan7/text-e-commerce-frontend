import React, { useState } from "react"
import Link from "next/link"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import styles from '../styles/Products.module.css'

const SIGN_UP = gql`
  mutation SIGN_UP($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [success, setSuccess] = useState(false)

    const [signup, { loading, error }] = useMutation(SIGN_UP, {
        variables: { ...userInfo },
        onCompleted: data => {
            if (data) {
                setSuccess(true)
                setUserInfo({
                    name: "",
                    email: "",
                    password: ""
                })
            }
        }
    })

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await signup()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className={styles.products}>
                <div className={styles.grid}>

                    <div className={styles.card}>
                        <form
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "auto",
                                width: "100%"
                            }}
                            onSubmit={handleSubmit}
                        >
                            <input
                                style={{ margin: "5px", height: "30px" }}
                                type="text"
                                name="name"
                                placeholder="Username"
                                value={userInfo.name}
                                onChange={handleChange}
                            />
                            <input
                                style={{ margin: "5px", height: "30px" }}
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={userInfo.email}
                                onChange={handleChange}
                            />
                            <input
                                style={{ margin: "5px", height: "30px" }}
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={userInfo.password}
                                onChange={handleChange}
                            />
                            <button className={styles.btnb} type="submit" disabled={loading} >
                                Submit
                            </button>
                        </form>
                        
                        <div style={{ width: "100%", margin: "auto" }}>
                            {success && (
                                <p>
                                    You successfully signed up, please{" "}
                                    <Link href='/signin'>
                                        <a>sign in</a>
                                    </Link>
            
                                </p>
                            )}
                            {error && (
                                <p style={{ color: "red" }}>{error.graphQLErrors[0].message}</p>
                            )}
                        </div>
</div>
                       
                  
                    
                </div>
            </section>
        </>
    )
}

export default Signup