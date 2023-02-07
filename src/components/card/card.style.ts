import {css} from 'lit';

export default css`
  :host {
    height: 100%;
    width: 100%;
    padding: var(--sg-whitespace-md);
    margin: var(--sg-whitespace-md);
    background: var(--sg-color-success);
    border-radius: var(--sg-border-radius-md);
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

  slot {
    flex: 1;
    display: block;
  }
`;
