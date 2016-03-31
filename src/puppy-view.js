'use strict';

export default class PuppyView {
  constructor(el, info) {
    this.el = el;
    this.info = info;

    this.render();
    this.renderDogImage();
    this.renderDogInfo();
  }

  renderDogImage() {
    document.querySelector(`.card__image`).innerHTML = `<img src="${this.info.photoUrl}" alt="" class="puppy-img">`;
  }

  renderDogInfo() {

  }
}
