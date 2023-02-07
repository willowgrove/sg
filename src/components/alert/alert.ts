import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import styleForAll from '../../utils/style-for-all';
import styles from './alert.style';

@customElement('sg-alert')
export class SgAlert extends LitElement {
  static styles = [styleForAll, styles];

  render() {
    return html`<slot></slot>`;
  }
}
