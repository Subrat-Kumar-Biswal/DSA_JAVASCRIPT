let arr = [1, 2, 0, 0, 3, 0, 4, 0, 0, 5];

let temp = [];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] !== 0){
//         temp.push(arr[i]);
//         }
//     }
//     for(let i = 0; i<temp.length; i++){
//         arr[i] = temp[i]
//         };
//     for(let i = temp.length; i<arr.length; i++){
//         arr[i] = 0;
//         }
        
//         console.log(arr)

//Brute force soution

var moveZeroes = function(nums) {
    let temp = []
    for(let i = 0; i<nums.length; i++){
        if(nums[i] != 0 ){
            temp.push(nums[i])
            console.log(temp);
        }
    }

    for(let i = 0; i<temp.length; i++){
        nums[i]  = temp[i]
        console.log(nums[i]);
    }
    for(let i = temp.length; i<nums.length; i++){
        nums[i] = 0
    }
    return nums;
};
let x = moveZeroes([0,1,0,3,12])
console.log(x);

// time complexity = O(N) + O(X) + O(N-X) == O(2N)
// space complexity = O(N)


// var Optimal = function(arr){

//     let count = 0;
//     let n = arr.length;

//     for(let i = 0; i<n;i++){
//         if(arr[i] == 0){
//             arr.splice(i, 1);
//             count++;
//             i--;
//         }
//     }

//     for(let i = 0; i<count;i++){
//         arr.push(0)
//     }
// }

// let result = console.log(Optimal[1, 2, 0, 0, 3, 0, 4, 0, 0, 5]);
// console.log(result);

