

/**
 * 深层比较。阅读第四章函数最后的习题“深层比较”,完成函数deepEqual
 * 提示：看看是否需要运用递归。
 */
const deepEqual=function(m,n){
    if (m === n) {
        return true;
    }
    if (m == null || typeof m!= "object" ||n == null || typeof n != "object") {
    return false;
    }
    let keysM = Object.keys(m), keysN = Object.keys(n);
    if (keysM.length != keysN.length) {
        return false;
    }    
    for (let key of keysM) {
      if (!keysN.includes(key) || !deepEqual(m[key], n[key])){
        return false;
    }
    return true;
  }
}
    //TODO


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
    