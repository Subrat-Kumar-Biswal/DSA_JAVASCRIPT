var check = function(nums) {

    for(let i = 0; i<=nums.length; i++){
        if(nums[i]<=nums[i]+1 ){
            return true;
        }else{
            return false;
        }
    }


};

console.log(check([5,1,3,4]))