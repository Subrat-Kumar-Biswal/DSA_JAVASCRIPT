var singleNumber = function(nums) {
    for(let i = 0; i<nums.length; i++){
        let count = 0;
        for(let j = 0; j<nums.length; j++){
            if(nums[j] === nums[i]){
                count ++;
            }
        }

        if(count == 1){
            return nums[i]
        }
    }
};

console.log(singleNumber([2,2,1]))