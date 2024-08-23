var majorityElement = function(nums) {

    let arr = parseInt(nums.length/2)
    // return arr
    if(nums.length == 1){
        return nums[0];
    }
  let  x =  nums.slice(0, arr)
    let y = Math.max(...x)
    return y
    
};

console.log(majorityElement([6,5,5]));