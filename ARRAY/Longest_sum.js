var singleNumber = function(nums, K) {
    let len = 0;
    for(let i = 0; i<nums.length; i++){
       for(let j = i; j<nums.length; j++){
           
            let s = 0;

            for(let k=i; k<=j;k++){
                s += nums[k];
            }

            if(s == K){
                len = Math.max(len, i-j+1)
            }
       }
       return len;
   }
};

console.log(singleNumber([2, 3, 5, 1, 9], 10))