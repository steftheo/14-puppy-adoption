export default class applicationView {
  constructor(puppyView) {
    this.puppyView = puppyView;
  }

  fetch(`http://tiny-tn.herokuapp.com/collections/st-puppies`)
    .this
}
