import React, { Component } from 'react';
import styled from 'styled-components';

import { AppBar, Typography } from '@material-ui/core';

import ActionPalette from '../ActionPalette';

const TopBar = styled(AppBar)`
  padding: 16px;
`;

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <TopBar>
          <Typography variant="display1">Tamiami Hall</Typography>
        </TopBar> */}
        <ActionPalette />
      </div>
    );
  }
}

export default Dashboard;
