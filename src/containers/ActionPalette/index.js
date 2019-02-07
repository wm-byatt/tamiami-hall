import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Card, Modal } from '@material-ui/core';

const StyledCard = styled(Card)`
  margin: 8px;
  padding: 8px;
`;

const BigCard = styled(Card)`
  width: 100%;
  height: 100%;
  position: fixed;
  margin: auto;
`;

class AppThumbnail extends Component {
  state = {
    focused: false,
  };

  render() {
    const {
      state: { focused },
      props: { title },
    } = this;

    return (
      <StyledCard>
        <div onClick={_ => this.setState({ focused: true })}>{title}</div>
        <Modal open={focused}>
          <BigCard>content beneath expansion</BigCard>
        </Modal>
      </StyledCard>
    );
  }
}

class ActionPalette extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={4}>
            <AppThumbnail title="Write Post" />
          </Grid>
          <Grid item xs={4}>
            <AppThumbnail title="Anaylsis" />
          </Grid>
          <Grid item xs={4}>
            <AppThumbnail title="Discussion" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ActionPalette;
