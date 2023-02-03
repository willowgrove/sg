import {css} from 'lit';

export default css`
  :host {
    position: relative;
    display: block;
    height: auto;
    width: 100%;
  }

  [part='header'],
  [part='footer'] {
    position: relative;
    left: 0;
    height: fit-content;
    width: 100%;
  }

  [part='header'] {
    top: 0;
  }

  [part='footer'] {
    bottom: 0;
  }

  .position-absolute {
    position: absolute;
  }

  .position-fixed {
    position: fixed;
  }

  .position-sticky {
    position: sticky;
  }
`;
