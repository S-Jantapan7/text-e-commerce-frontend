import React from 'react'
import apolloClient from '../apollo/apolloClient'
import Signup from '../components/Signup'

const SignupPage = () => {
    return <Signup />
}

export default apolloClient(SignupPage)

