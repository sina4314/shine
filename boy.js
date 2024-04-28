const home = ['aircondition','standing fan','set of chair','television','bed','washing-Machine'];

  home.push('gas-cooker','freezer');

  home.unshift('generator','inverter');

  home.splice(4, 0, 'Centre table','blender');
  console.log(home);
console.log(home.lastIndexOf('blender'));
console.log(home.includes('generator'));
console.log(home.indexOf('television'));
console.log(home.lastIndexOf('television'));


const children = [
  { name: 'Tunde', position: 1, score: 87},
  { name: 'Kayode', position: 2, score: 75 },
  {name: 'Femi', position: 3, score: 70 }
];

// const child =  children.find(function(child){
// return child.position === 3 ;
// }
// );
console.log(child);

const child = children.find = child => child.name === 'Femi';

// function (child){
//   return child.position === 3;
// }

// child => child.position === 3;