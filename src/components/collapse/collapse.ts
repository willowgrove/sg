import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {createRef, ref} from 'lit/directives/ref.js';
import styles from './collapse.style';

@customElement('sg-collapse')
export class SgCollapse extends LitElement {
  static styles = [styles];

  private contentContainerRef = createRef();

  @property({type: Boolean, reflect: true})
  open = false;

  render() {
    return html`
      <div class="collapse">
        <slot class="collapse-header" @click=${this.toggle} name="header"
          >${this.open ? 'Close' : 'Open'}</slot
        >
        <slot
          class="collapse-content"
          ${ref(this.contentContainerRef)}
          style=${this.open
            ? `height: ${this.contentContainerRef.value?.scrollHeight}px`
            : ''}
        ></slot>
      </div>
    `;
  }

  private toggle() {
    this.open = !this.open;
  }
}
