
var countDigits = function(num) {
        let count= 0;
        let nums =String(num)
       
        for(i=0;i<nums.length;i++){
            if(num%nums[i] == 0){
                count++
            }
        }
        console.log(count); 
    };

countDigits(1248)