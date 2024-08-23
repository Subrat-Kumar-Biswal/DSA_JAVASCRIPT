let nums = [1,2,3,4,5,6,7];


function rotate(nums, k){
    // let newarr = nums.slice(0, k+1);
    // let newarr1 = nums.slice(k+1, nums.length);
    // let x = newarr1.concat(newarr)

    // return x

    let str = nums.slice(nums.length - k);
    console.log(str);
    let ot = nums.slice(0, nums.length - k)
    return str.concat(ot)
}
// console.log(nums[nums.length - 1]);

console.log(rotate([-1,-100,3,99], 2));
