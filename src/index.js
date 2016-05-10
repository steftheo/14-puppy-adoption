'use strict';

import PuppyView from 'puppy-view';
// import applicationView from 'application';

export default function () {
  fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((response) => response.json())
    .then((info) => {
      const el = document.querySelector('.card');
      const PuppyInfo = new PuppyView(el, info);
    });
}
