import React from 'react'
import Hero from '../../components/Hero/Hero'
import Form from '../../components/Form/Form'
import background4 from "../../assets/Images/section2-f4.jpg";

export default function SignUp() {
    return (
        <>
            <Hero background={background4} title={'Sign Up'} True={false} />
            <Form FormTitle={'Create an account'}  x={false} />
        </>
    )
}
