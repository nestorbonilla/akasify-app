import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';



import Navbar from "./components/layout/navbar.component";
import { Layout, Row, Typography } from 'antd';
import StyledComponents from './styles';

import LandingPage from './components/pages/landingPage.component';

const { StyledContent, ButtonsWrapper, StyledButton, Image, StyledColLeft, StyledColRight, RegisterWrapper } = StyledComponents;
const { Footer } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Layout>
            <Navbar/>
            <StyledContent>
              <Switch>
                <Route exact path='/' component={LandingPage} />
              </Switch>
              <Footer style={{ textAlign: 'center', bottom: '0px', width: '100%', background: '#F6EAD1' }}>© 2020 Created by Digital Bonds</Footer>
            </StyledContent>
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
