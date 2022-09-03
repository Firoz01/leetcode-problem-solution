var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let sObj = {};
  let tObj = {};

  for (let i = 0; i < s.length; i++) {
    if (!sObj[s[i]] && !tObj[t[i]]) {
      sObj[s[i]] = t[i];
      tObj[t[i]] = s[i];
    } else if (sObj[s[i]] !== t[i] || tObj[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("foo", "bar"));
