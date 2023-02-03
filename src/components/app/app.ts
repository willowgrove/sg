import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './app.style';

@customElement('sg-app')
export class SgApp extends LitElement {
  static styles = styles;

  render() {
    return html`<slot></slot>`;
  }
}
