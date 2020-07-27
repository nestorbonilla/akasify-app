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
              </ButtonsWrapper>
            </Col>
          </Row>
        </RegisterWrapper>
      </StyledContent>
    );
}

export default LandingPage