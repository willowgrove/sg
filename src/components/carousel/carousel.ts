import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styleForAll from '../../utils/style-for-all';
import styles from './carousel.style';

@customElement('sg-carousel')
export class SgCarousel extends LitElement {
  static styles = [styleForAll, styles];

  private refreshTimeoutId?: number;

  @property({attribute: 'current-index', type: Number, reflect: true})
  currentIndex = 0;

  @property({type: Number, reflect: true})
  timeout = 5;

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('currentIndex')) {
      this.resetRefreshTimeout();
      this.updateSlider();
    } else if (changedProperties.has('timeout')) {
      this.resetRefreshTimeout();
    }
  }

  render() {
    return html`
      <div id="slider" style="width: ${(this.childElementCount ?? 1) * 100}%;">
        <slot></slot>
      </div>
      <div id="button-container">
        <button class="left" @click="${this.goToPrevious}">
          ${this.renderSVGArrow({direction: 'left'})}
        </button>
        <button class="right" @click="${this.goToNext}">
          ${this.renderSVGArrow({direction: 'right'})}
        </button>
      </div>
      <div id="indicator-container">
        ${new Array(this.childElementCount ?? 0)
          ?.fill(0)
          ?.map(
            (_, i) =>
              html`<div
                class="indicator"
                style=${i === this.currentIndex ? 'opacity: 1' : 'opacity: 0.5'}
                @click=${() => (this.currentIndex = i)}
              ></div>`
          )}
      </div>
    `;
  }

  private renderSVGArrow(options?: {
    fill?: string;
    direction?: 'left' | 'right';
  }) {
    return html`<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      transform=${options?.direction === 'right' ? 'rotate(180)' : ''}
    >
      <path
        d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
        fill=${options?.fill ?? 'hsl(0, 0%, 0%)'}
      />
    </svg>`;
  }

  private goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.childElementCount - 1;
    }
  }

  private goToNext() {
    if (this.currentIndex < this.childElementCount - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  private updateSlider() {
    const slider = this.shadowRoot?.querySelector('#slider') as HTMLDivElement;
    slider.style.transform = `translateX(-${
      this.currentIndex * (100 / this.childElementCount ?? 1)
    }%)`;
  }

  private resetRefreshTimeout() {
    clearTimeout(this.refreshTimeoutId);
    if (this.timeout > 0) {
      this.refreshTimeoutId = setTimeout(
        () => this.goToNext(),
        this.timeout * 1000
      );
    }
  }
}
