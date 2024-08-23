let nums = [1,2,-4,-5]
    let temp = [];
    let neg = [];
    let x = []

    for(let i = 0; i<nums.length; i++){
        if(nums[i] > 0){
            console.log(temp.push(nums[i])); 
        }else{
            console.log(neg.push(nums[i])); 
        }

        for(let i = 0; i<nums.length/2; i++){
            nums[2*i] = temp[i];
            nums[2 * i + 1] = neg[i]
        }
        }
    console.log(nums);
    console.log(temp);
    console.log(neg);
    // console.log(nums);