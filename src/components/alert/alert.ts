import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './alert.style';

@customElement('sg-alert')
export class SgAlert extends LitElement {
  static styles = [styles];

  render() {
    return html`<slot></slot>`;
  }
}
