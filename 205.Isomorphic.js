// var isIsomorphic = function (s, t) {
//   let sObj = {};
//   let tObj = {};

//   for (let i = 0; i < s.length; i++) {
//     if (sObj[s[i]] !== tObj[t[i]]) {
//       return false;
//     } else {
//       sObj[s[i]] = i;
//       tObj[t[i]] = i;
//     }
//   }
//   return true;
// };

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapA = new Map();
  const mapB = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapA.has(s[i]) && mapA.get(s[i]) !== t[i]) return false;
    else {
      mapA.set(s[i], t[i]);
    }
    if (mapB.has(t[i]) && mapB.get(t[i]) !== s[i]) return false;
    else mapB.set(t[i], s[i]);
  }
  return true;
};

console.log(isIsomorphic("foo", "bar"));
