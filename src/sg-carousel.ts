import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('sg-carousel')
export class SgCarousel extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      height: 20rem;
      width: 100%;
      overflow: hidden;
    }

    #slider {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      height: auto;
      max-height: 100%;
      transition: transform 0.5s ease;
    }

    slot {
      display: flex;
      width: 100%;
    }

    ::slotted(*) {
      flex: 1;
      height: 100%;
      min-width: 0;
    }

    ::slotted(img) {
      object-fit: contain;
    }

    button {
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

    button:hover {
      filter: contrast(0.7);
    }

    button:active {
      filter: contrast(0.5);
    }

    button.left {
      left: 10px;
    }

    button.right {
      right: 10px;
    }
  `;

  @property({attribute: 'current-index', type: Number, reflect: true})
  currentIndex = 0;

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('currentIndex')) {
      this.updateSlider();
    }
  }

  render() {
    return html`
      <div id="slider" style="width: ${(this.childElementCount ?? 1) * 100}%;">
        <slot></slot>
      </div>
      <button class="left" @click="${this.goToPrevious}">
        ${this.renderSVGArrow({direction: 'left'})}
      </button>
      <button class="right" @click="${this.goToNext}">
        ${this.renderSVGArrow({direction: 'right'})}
      </button>
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
}
