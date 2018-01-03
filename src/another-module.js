import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);

// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//     console.log(
//       _.join(['Another', 'module', 'loaded!'], ' ')
//     );
//   });
// }

// getComponent();