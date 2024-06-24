const strings = ['a', 'b', 'c', 'd'];

//push
strings.push('x'); //O(1)

//pop
strings.pop(); //
strings.pop();

//unshift
strings.unshift('aa'); //O(n)

//splice
strings.splice(2, 0,"Alien"); //O(n)

console.log(strings);