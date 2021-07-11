
var run = undefined;
console.log(eat('小迟', '番茄炒蛋'));
eat('小王');

run = function(name) {
  console.log(name + '在跑步');
}

run('小迟');

// var dname;

// 函数声明提升
function eat(name, what) {
  console.log(name + '在吃饭, 吃' + what);
  dname = 'xiaowang';
  return name + '在吃饭, 吃' + what + name;
}

console.log(window.run);


var username = 'xiaochi';

console.log(username.indexOf("c"));


console.log(!(1 == '1'));
console.log(!(1 === '1'));

console.log(!true);

console.log(typeof username);
console.log(typeof run);
