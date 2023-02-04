import {css} from 'lit';

export default css`
  :host {
    --sg-border-radius-md: 5px;

    --sg-whitespace-xs: 1px;
    --sg-whitespace-sm: 2px;
    --sg-whitespace-md: 5px;

    --sg-color-primary: hsl(218, 100%, 61%);
    --sg-color-secondary: hsl(199, 100%, 62%);
    --sg-color-tertiary: hsl(235, 100%, 66%);
    --sg-color-success: hsl(144, 65%, 50%);
    --sg-color-warning: hsl(46, 100%, 52%);
    --sg-color-danger: hsl(352, 81%, 59%);

    --sg-color-shadow: hsl(0, 0%, 0%, 0.5);
    --sg-color-highlight: hsl(0, 0%, 100%, 0.5);
  }

  :host {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    height: auto;
    width: 100%;
    flex-wrap: wrap;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
