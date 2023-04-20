//Define a function to generate a random password
function generateRandomPassword(length) {
  // Define the characters that can be used in the password
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';

  // Initialize an empty string to store the generated password
  let password = '';

  // Loop through the desired length of the password
  for (let i = 0; i < length; i++) {
    // Generate a random index to pick a character from the characters string
    const randomIndex = Math.floor(Math.random() * characters.length);

    // Append the randomly picked character to the password string
    password += characters[randomIndex];
  }

  // Return the generated password
  return password;
}

function generatePassword() {
  // Prompt the user for password criteria
  const passwordLength = prompt('Enter the desired password length:');
  const includeUppercase = confirm('Include uppercase letters?');
  const includeLowercase = confirm('Include lowercase letters?');
  const includeNumbers = confirm('Include numbers?');
  const includeSpecialChars = confirm('Include special characters?');

  // Create a string of characters based on the user's criteria
  let characters = '';
  if (includeUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeLowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (includeNumbers) {
    characters += '0123456789';
  }
  if (includeSpecialChars) {
    characters += '!@#$%^&*()_-+=<>?';
  }

  // Call the function with the desired length of the password
  const generatedPassword = generateRandomPassword(passwordLength, characters);
  // Display the generated password in the result element
  document.getElementById('password').innerText = 'Generated Password: ' + generatedPassword;
}