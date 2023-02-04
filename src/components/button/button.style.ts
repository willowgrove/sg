import {css} from 'lit';

export default css`
  :host {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    height: fit-content;
    background: var(--sg-color-primary);
    border-radius: var(--sg-border-radius-md);
    width: 100%;
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
    flex: 1 1 auto;
    display: flex;
    position: relative;
    text-decoration: none;
    color: inherit;
    appearance: none;
    width: 100%;
    height: 100%;
  }

  slot {
    flex: 1 1 auto;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;
