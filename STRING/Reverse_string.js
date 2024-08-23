const reverseString = function (str) {
  let x = str.split(" ");
  let xy = " ";
  for (let i = x.length - 1; i >= 0; i--) {
    xy += x[i] + " ";
  }
  console.log(xy);

  // x.reverse();

  // let newString = x.join(" ")
  // console.log(newString);
};

reverseString("geeks quiz practice code");

// time complexity  = O(N) ans space also = O(N)

function reverse(str) {
  if (str === "") {
    return str;
  } else return reverse(str.substr(1))+" " + str+str.charAt(0) ;
} // helo

console.log(reverse("helo"));

let x = "abcd";
let res = x.split("").reverse().join("");
console.log(res);
