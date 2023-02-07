import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import styleForAll from '../../utils/style-for-all';
import styles from './app.style';

@customElement('sg-app')
export class SgApp extends LitElement {
  static styles = [styleForAll, styles];

  render() {
    return html`<slot></slot>`;
  }
}
