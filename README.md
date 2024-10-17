# Tandem Bicycle

This repository contains a function tandemBicycle that calculates the total speed of pairs of cyclists riding tandem bicycles. Each pair consists of one cyclist from the redShirtSpeeds array and one from the blueShirtSpeeds array. The pairing strategy depends on whether the goal is to maximize or minimize the overall speed.

**Problem Description**

Given two arrays:

redShirtSpeeds: An array of positive integers representing the speeds of cyclists wearing red shirts.

blueShirtSpeeds: An array of positive integers representing the speeds of cyclists wearing blue shirts.

fastest: A boolean indicating whether the goal is to maximize (true) or minimize (false) the total tandem speed.

Each tandem bicycle is ridden by two cyclists (one from each group), and the speed of the tandem is determined by the faster cyclist in the pair.

The goal is to return the total tandem speed based on the given pairing strategy.

Example

	const redShirtSpeeds = [5, 5, 3, 9, 2];
	const blueShirtSpeeds = [3, 6, 7, 2, 1];
	const fastest = true;

	const result = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
	console.log(result); // Output: 32

In this example, with the goal of maximizing the total speed, the cyclists are paired in a way that yields the highest possible total tandem speed.

**Code Explanation**

tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)

Input:

Two arrays: redShirtSpeeds and blueShirtSpeeds.

A boolean fastest indicating the goal of the pairing.

Output:

An integer representing the total tandem speed.

**Steps:**

1. If fastest is true, sort redShirtSpeeds in ascending order and blueShirtSpeeds in descending order. This ensures the fastest cyclists are paired with the slowest ones to maximize the overall speed.
2. If fastest is false, sort both arrays in ascending order. This pairs cyclists of similar speeds to minimize the total speed.
3. In both cases, the speed of a tandem is determined by the faster cyclist in each pair. Sum up the speeds of all pairs and return the result.
   
**Time and Space Complexity**

Time Complexity: O(n log n), where n is the number of cyclists in each group. This comes from the sorting operation.

Space Complexity: O(1), since the sorting is done in place and the space used is constant.

License
This project is licensed under the MIT License - see the LICENSE file for details.

