export default class puppyView {
  constructor(el, info) {
    this.el = el;
    this.info = info;

    this.renderDogImage();
  }

  renderDogImage() {
    document.querySelector(`.card__image`).innerHTML = `<img src="http://i.imgur.com/fQCsKr0.gif" alt="" class="puppy-img">`;
  }
}
