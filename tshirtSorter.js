// Write your solution below:
// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll

function tshirtSorter(x) {
  let large = "";
  let medium = "";
  let small = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "s") {
      small += "s";
    } else if (x[i] === "m") {
      medium += "m";
    } else {
      large += "l";
    }
  }
  return small + medium + large;
}

console.log(tshirtSorter("lms"));
console.log(tshirtSorter("slsmmsllsmsmlmsls"));
