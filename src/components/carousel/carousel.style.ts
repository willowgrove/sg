import {css} from 'lit';

export default css`
  :host {
    height: 20rem;
    width: 100%;
    overflow: hidden;
    border-radius: var(--sg-border-radius-md);
    margin: var(--sg-whitespace-md);
  }

  #slider {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    max-height: 100%;
    transition: transform 0.5s ease;
  }

  slot {
    display: flex;
    flex: 1;
  }

  ::slotted(*) {
    flex: 1;
  }

  #button-container > button {
    display: flex;
    position: absolute;
    padding: 0.5em;
    top: 50%;
    transform: translateY(-50%);
    background: hsl(0, 0%, 100%, 0.5);
    border: none;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  #button-container > button:hover {
    filter: contrast(0.7);
  }

  #button-container > button:active {
    filter: contrast(0.5);
  }

  #button-container > button.left {
    left: 10px;
  }

  #button-container > button.right {
    right: 10px;
  }

  #indicator-container {
    display: flex;
    position: absolute;
    padding: 2px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    background: hsl(0, 0%, 50%, 0.5);
    border-radius: 10px;
  }

  #indicator-container > .indicator {
    --size: 10px;

    flex: 1;
    height: var(--size);
    width: var(--size);
    margin: 3px;
    background: hsl(0, 0%, 100%);
    border-radius: 100%;
    cursor: pointer;
  }
`;
