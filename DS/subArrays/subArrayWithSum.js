function longestPalindrome(s) {
    if (s === null || s.length < 1) {
      return "";
    }
  
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      console.log(left , right , ":::::")
      return s.slice(left + 1, right);
    }
  
    let longest = "";
  
    for (let i = 0; i < s.length; i++) {
      let palindrome1 = expandAroundCenter(i, i);
      let palindrome2 = expandAroundCenter(i, i + 1);
      console.log(palindrome1 , palindrome2)
  
      if (palindrome1.length > longest.length) {
        longest = palindrome1;
      }
  
      if (palindrome2.length > longest.length) {
        longest = palindrome2;
      }
    }
  
    return longest;
  }
  
  const s = "aaaabbaa";
  const result = longestPalindrome(s);
  console.log(result); 
  