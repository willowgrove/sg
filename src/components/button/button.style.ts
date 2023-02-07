import {css} from 'lit';

export default css`
  :host {
    flex: 0 0 auto;
    height: fit-content;
    width: auto;
    background: var(--sg-color-primary);
    border-radius: var(--sg-border-radius-md);
    margin: var(--sg-whitespace-md);
    padding: var(--sg-whitespace-md) var(--sg-whitespace-md);
    box-shadow: var(--sg-whitespace-sm) var(--sg-whitespace-sm)
      var(--sg-whitespace-sm) 0 var(--sg-color-shadow);
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    transition: box-shadow 0.5s;
  }

  :host(:hover) {
    box-shadow: inset var(--sg-whitespace-xs) var(--sg-whitespace-xs)
        var(--sg-whitespace-xs) 0 var(--sg-color-highlight),
      var(--sg-whitespace-sm) var(--sg-whitespace-sm) var(--sg-whitespace-md) 0
        var(--sg-color-shadow);
  }

  :host(:hover:active) {
    box-shadow: inset var(--sg-whitespace-sm) var(--sg-whitespace-sm)
      var(--sg-whitespace-md) 0 var(--sg-color-shadow);
  }

  a {
    display: flex;
    position: relative;
    flex: 1;
    text-decoration: none;
    color: inherit;
    appearance: none;
    width: 100%;
    height: 100%;
  }

  slot {
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;
  }
`;
