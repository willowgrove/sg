import {css} from 'lit';

export default css`
  :host {
    display: flex;
    position: relative;
    left: 0;
    right: 0;
    height: fit-content;
    z-index: 1;
  }

  :host([position-type='absolute']) {
    position: absolute;
  }

  :host([position-type='fixed']) {
    position: fixed;
  }

  :host([position-type='sticky']) {
    position: sticky;
  }
`;
