import React, { Component } from 'react';
import styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import { Grid, Paper } from '@material-ui/core';
import { Timeline } from 'react-twitter-widgets';

const darkPink = '#ED145A';
const lightPink = '#F090C0';
const middleTeal = '#22ABC7';
const lightBlue = '#18D8F0';
const darkBlue = '#18C0F0';

const AppContainer = styled.div`
  height: 100%;
  display: block;
  position: fixed;
  width: 800px;
  align-self: center;
  margin: auto;
  position: relative;
`;

const Header = styled.div`
  font-family: serif;
  font-size: 48pt;
  text-align: center;
  width: 100%;
  padding-top: 24px;
`;

const SubHeader = styled.div`
  font-family: Futura;
  font-size: 14pt;
  text-align: center;
  width: 100%;
`;

const Headline = styled.div`
  font-size: 21px;
  font-family: Futura;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

const BodyText = styled.div`
  font-family: roboto, helvetica, sans-serifd;
`;

const NavBar = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 8px;
  border-top: 2px solid ${lightPink};
  border-bottom: 1px solid ${lightPink};
`;

const StyledLink = styled(NavLink)`
  padding: 8px 24px;
  color: black;
  text-decoration: none;
  display: inline-block;
  border-top: 3px solid white;
  border-bottom 2px solid white;
`;

const Content = styled(Grid)`
  margin-top: 16px;
`;

const MainBody = styled(Paper)`
  padding: 8px;
  // border-top: 3px solid ${lightBlue};
`;

const RightBar = styled.div`
  padding: 8px;
`;

const Footer = styled.div`
  display: block;
  width: 100%;
  padding: 16px;
  background-color: ${lightBlue};
  padding: 8px;
  position: fixed;
  bottom: 0;
`;

const HomeContent = () => (
  <MainBody square>
    <Headline>What happened to the triple alliance?</Headline>
    <BodyText>
      Once upon a time, it was labor, community activists, and the Democratic
      Party. Then we had to go and fuck that up by selling out to the
      neoliberals.
    </BodyText>
  </MainBody>
);

class Main extends Component {
  render() {
    const activeStyle = {
      borderTop: `3px solid ${lightPink}`,
      borderBottom: `2px solid ${lightPink}`,
      color: `${middleTeal}`,
    };

    return [
      <AppContainer>
        <Header>Tamiami Hall</Header>
        <SubHeader>Taking the fight to the bastards</SubHeader>
        <NavBar>
          <StyledLink exact activeStyle={activeStyle} to="/">
            Home
          </StyledLink>
          <StyledLink activeStyle={activeStyle} to="/organizing">
            Organizing
          </StyledLink>
          <StyledLink activeStyle={activeStyle} to="/messaging">
            Messaging
          </StyledLink>
          <StyledLink activeStyle={activeStyle} to="/gloating">
            Gloating
          </StyledLink>
        </NavBar>
        <Content container>
          <Grid item xs={8}>
            <Switch>
              <Route exact path="/" component={HomeContent} />
              <Route path="/organizing" component={HomeContent} />
              <Route path="/messaging" component={HomeContent} />
              <Route path="/gloating" component={HomeContent} />
            </Switch>
          </Grid>
          <Grid item xs={4}>
            <RightBar>
              <Timeline
                dataSource={{
                  sourceType: 'list',
                  ownerScreenName: 'wm_byatt',
                  slug: 'en-la-lucha',
                }}
                options={{
                  username: 'TwitterDev',
                  height: '400',
                }}
                onLoad={() => console.log('Timeline is loaded!')}
              />
            </RightBar>
          </Grid>
        </Content>
      </AppContainer>,
      <Footer>
        copyright 2018 | <Link to="/dashboard">dashboard</Link>
      </Footer>,
    ];
  }
}

export default Main;
