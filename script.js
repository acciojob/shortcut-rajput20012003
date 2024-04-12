function shortcut(s1, s2) {
  // Check if either input string is empty
  if (s1 === '' || s2 === '') {
    return ''; // Return an empty string if either string is empty
  }

  // Extract the initial letters of the input strings and concatenate them
  return s1[0].toUpperCase() + s2[0].toLowerCase();
}

// Test cases
console.log(shortcut("Amnesty", "International")); // Output: 'AI'
console.log(shortcut("Hello", "world")); // Output: 'Hw'
console.log(shortcut("", "International")); // Output: ''
console.log(shortcut("Amnesty", "")); // Output: ''
