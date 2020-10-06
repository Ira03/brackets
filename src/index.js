module.exports = function check(str, bracketsConfig) {
  let config = {};
  let arr = [];
  
  for (let item of bracketsConfig) {
   config[item[0]] = item[1];
  }

  for (let char of str) {
    if (Object.keys(config).includes(char) &&  config[char] !== char) {
      arr.push(char);
      
    } 
    else if ((Object.values(config).includes(char) || Object.keys(config).includes(char))&& char === config[arr[arr.length - 1]]) {
console.log(char);
      arr.pop();
      
    } else if (Object.values(config).includes(char)){
    arr.push(char);
   
  }
}
return arr.length === 0 ? true : false;
}


