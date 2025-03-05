function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
let word1 = "listen";
let word2 = "silent";

if (isAnagram(word1, word2)) {
    console.log(`${word1} and ${word2} are anagrams.`);
} else {
    console.log(`${word1} and ${word2} are not anagrams.`);
}
