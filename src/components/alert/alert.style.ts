import {css} from 'lit';

export default css`
  :host {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    height: fit-content;
    background: var(--sg-color-success);
    border-radius: var(--sg-border-radius-md);
    width: 100%;
    padding: 5px 10px;
    margin: var(--sg-whitespace-md);
  }
`;
