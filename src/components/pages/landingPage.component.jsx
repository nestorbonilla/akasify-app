import React, { useState, useEffect } from 'react'
import { Layout, Row, Typography, Col } from 'antd'
import StyledComponents from './styles'
import akasifyCommunity from '../../assets/logo_with_phrase.png'
import SignUp from '../signUp/signUp.component'

const { StyledContent, ButtonsWrapper, StyledButton, Image, StyledColLeft, RegisterWrapper } = StyledComponents
const { Title, Paragraph } = Typography


function LandingPage() {

    return (
        <StyledContent>
        <RegisterWrapper>
          <Row>
            <Col span={12} offset={6} className="gutter-row">
              <Image src={akasifyCommunity} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '60%'}} alt="Join our community" />
              <Paragraph style={{textAlign: 'justify', textJustify: 'inter-word'}}>We make the interaction between non-profit organizations and young change-makers smoothly in the process of opportunities application, and keep a decentralized and immutable record of their commitments. Be part of the community of change-makers in Latin America.</Paragraph>
              <ButtonsWrapper>
                <SignUp />
                <StyledButton size="large" disabled={true}>Take a tour</StyledButton>
                <StyledButton size="large" onClick={()=> window.open("https://docs.google.com/presentation/d/1BOSZX_r_qw9tSglhVz3pGjxtTPj88st9ytD0I6YFQmE/edit?usp=sharing", "_blank")}>Pitch</StyledButton>
                <StyledButton size="large" onClick={()=> window.open("", "_blank")}>Video</StyledButton>
              </ButtonsWrapper>
            </Col>
          </Row>
        </RegisterWrapper>
      </StyledContent>
    );
}

export default LandingPage