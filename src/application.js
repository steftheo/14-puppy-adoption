import 'puppyView';

export default class applicationView {
  constructor(data) {
    this.data = data;

    this.render();
    this.pleaseRefreshFromTheServerNow();
  }

  pleaseRefreshFromTheServerNow() {
    fetch("http://tiny-tn.herokuapp.com/collections/ryan-puppy")
      .then(response => response.json())
      .then(data => {
        this.view = data;
        this.drawPageStuff();
      });
  }
}
