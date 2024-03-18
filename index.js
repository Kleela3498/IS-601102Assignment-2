function countVowelsAndConsonants() {
    const str = document.getElementById('stringInput').value.toLowerCase();
    const vowels = str.match(/[aeiou]/gi);
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    const vowelCount = vowels ? vowels.length : 0;
    const consonantCount = consonants ? consonants.length : 0;
    document.getElementById('vowelConsonantResult').innerText = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}

function checkPalindrome() {
    const str = document.getElementById('numberInput').value;
    const isPalindrome = str === str.split('').reverse().join('');
    document.getElementById('palindromeResult').innerText = isPalindrome ? 'It is a palindrome.' : 'It is not a palindrome.';
}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('billSubtotal').value);
    const tipPercent = parseFloat(document.getElementById('tipPercentage').value) / 100;
    const tipAmount = subtotal * tipPercent;
    const total = subtotal + tipAmount;
    document.getElementById('totalResult').innerText = `Total to be paid (including tip): $${total.toFixed(2)}`;
}
