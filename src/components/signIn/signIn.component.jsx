import React, { useState, useEffect } from 'react'
import StyledComponents from './styles'
import { Form, Input, Radio } from 'antd'
import 'antd/dist/antd.css'

const { StyledForm, SignInButton, RadioGroup, Text } = StyledComponents;


function SignIn() {

    const showSignScreen = () => {
        console.log("yes")
    }

    return (
        <StyledForm name="sign_in" onClick={() => showSignScreen()}>
            <RadioGroup>
                <Radio value="organizations">Organizations</Radio>
                <Radio value="changeMakers">Change-makers</Radio>
            </RadioGroup>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder="Password" />
            </Form.Item>
            <SignInButton type="primary" htmlType="submit">
                Log In
            </SignInButton>
        </StyledForm>   
    )
}

export default SignIn