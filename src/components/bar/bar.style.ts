import {css} from 'lit';

export default css`
  :host {
    display: flex;
    position: relative;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
  }

  * {
    display: flex;
  }

  [part~='before'],
  [part~='after'] {
    flex: 0 0 auto;
  }

  [part~='main'] {
    flex: 1 1 auto;
  }

  ::slotted(*) {
    flex: 1 1 auto;
  }
`;
