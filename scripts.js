// Time -> O(nlogn) | Space -> O(1)

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Sort redShirtSpeeds in ascending and blueShirtSpeeds in descending order (or, vice-versa) if fastest is true
  // Otherwise, sort both arrays in ascending order to minimize the speed
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest === true ? blueShirtSpeeds.sort((a, b) => b - a) 
      : blueShirtSpeeds.sort((a, b) => a - b));
  
  let result = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let tandemSpeed = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    result += tandemSpeed;
  }
  
  return result;
}
