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
    box-shadow: var(--sg-whitespace-sm) var(--sg-whitespace-sm)
      var(--sg-whitespace-md) 0 var(--sg-color-shadow);
    transition: box-shadow 0.5s;
  }

  :host([button]) {
    cursor: pointer;
  }

  :host([button]:hover) {
    box-shadow: var(--sg-whitespace-md) var(--sg-whitespace-md)
      var(--sg-whitespace-lg) 0 var(--sg-color-shadow);
  }
  :host([button]:hover:active) {
    box-shadow: inset var(--sg-whitespace-md) var(--sg-whitespace-md)
      var(--sg-whitespace-lg) 0 var(--sg-color-shadow);
  }
`;
