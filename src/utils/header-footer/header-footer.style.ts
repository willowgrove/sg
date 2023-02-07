import {css} from 'lit';

export default css`
  :host {
    left: 0;
    right: 0;
    height: fit-content;
    width: 100%;
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
