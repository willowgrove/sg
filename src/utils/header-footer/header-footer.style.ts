import {css} from 'lit';

export default css`
  :host {
    flex: 1 1 auto;
    display: flex;
    position: relative;
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
