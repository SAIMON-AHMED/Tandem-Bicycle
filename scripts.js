function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Sort redShirtSpeeds in ascending and blueShirtSpeeds in descending order (or, vice-versa) if fastest is true
  // Otherwise, sort both arrays in ascending order to minimize the speed
  if (fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  let len = redShirtSpeeds.length; // Both arrays have the same length
  let result = 0;

  for (let i = 0; i < len; i++) {
    let tandemSpeed = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    result += tandemSpeed;
  }
  
  return result; 
}
