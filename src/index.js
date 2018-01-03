import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

//   function getComponent() {
//     var element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//       var element = document.createElement('div');
 
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
//       return element;
 
//     }).catch(error => 'An error occurred while loading the component');
//   }

// document.body.appendChild(component());
// getComponent().then(component => {
//     document.body.appendChild(component);
// })