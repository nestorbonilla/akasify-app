import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Popover, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import SignIn from '../signIn/signIn.component'

import StyledComponents from './styles'

const { HeaderWrapper, Header, Navigation, AkasifyIcon, AkasifyLogo } = StyledComponents

const Navbar = () => {

    return (
        <HeaderWrapper>
            <Header>
                <Navigation>
                <AkasifyIcon />
                <Menu mode="horizontal" style={{backgroundColor: '#F26B55'}}>
                    <Menu.Item key="1">
                        <NavLink style={{color: '#F6EAD1'}} className="nav-link" to="/">About</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink style={{color: '#F6EAD1'}} className="nav-link" to="/">How it works?</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink style={{color: '#F6EAD1'}} className="nav-link" to="/">Community</NavLink>
                    </Menu.Item>
                </Menu>
                </Navigation>
                <Popover placement="bottomRight" content={<SignIn />} trigger="click">
                    <Button type="primary" shape="circle" style={{color: '#3A2040', backgroundColor: '#F6EAD1', borderColor: '#F6EAD1'}} icon={<UserOutlined />} />
                </Popover>
                {/* <Button type="primary" shape="circle" icon={<UserOutlined />} onClick={<SignIn />} /> */}
                
            </Header>
        </HeaderWrapper>
    )
}

export default Navbar
//export default drizzleConnect(mapDispachToProps)(Navbar);