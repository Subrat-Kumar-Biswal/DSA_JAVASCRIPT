

let nums = [-1,1,0,-3,3]
// var productExceptSelf = function(nums) {
//     let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
//     let n = nums.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             // subarray = arr[i.....j]
//             let sum = 0;
//             //add all the elements of subarray:
//             for (let k = i; k <= j; k++) {
//                 sum += nums[k];
//             }

//             maxi = Math.max(maxi, sum);
//         }
//     }

//     return maxi;

// }

// console.log(productExceptSelf([-2,1,-3,4,-1,2,1,-5,4]))


function maxSubarraySum(arr, n) {
    let maxi = 1; // maximum sum
    let sum = 1;

    for (let i = 0; i < n; i++) {
        sum *= arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

const arr = [1,2,-3,0,-4,-5];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);
