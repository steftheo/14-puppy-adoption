'use strict';

export default class PuppyView {
  constructor(el, info) {
    this.el = el;
    this.info = info;

    // this.render();
    this.renderDogImage();
    this.renderDogInfo();
  }

  renderDogImage() {
    this.el.querySelector(`.card__image`).setAttribute(`src`, this.info[0].photoUrl);
  }

  renderDogInfo() {

  }
}
