import {css} from 'lit';

export default css`
  :host {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    height: fit-content;
    border-radius: var(--sg-border-radius-md);
    width: 100%;
    margin: var(--sg-whitespace-md);
    box-shadow: var(--sg-whitespace-sm) var(--sg-whitespace-sm)
      var(--sg-whitespace-sm) 0 var(--sg-color-shadow);
    overflow: hidden;
  }

  .collapse {
    display: flex;
    position: relative;
    flex-direction: column;
    height: fit-content;
    width: 100%;
  }

  .collapse-header {
    flex: 1 1 auto;
    display: block;
    position: relative;
    padding: 5px 10px;
    backdrop-filter: contrast(0.9);
    cursor: pointer;
  }

  .collapse-header:hover {
    backdrop-filter: contrast(0.7);
  }

  .collapse-header:active {
    backdrop-filter: contrast(0.6);
  }

  .collapse-content {
    flex: 1 1 auto;
    display: block;
    position: relative;
    overflow: hidden;
    height: 0;
    transition: height 0.3s ease-out;
  }

  :host([open]) .collapse-content {
    padding: 5px 10px;
  }
`;
