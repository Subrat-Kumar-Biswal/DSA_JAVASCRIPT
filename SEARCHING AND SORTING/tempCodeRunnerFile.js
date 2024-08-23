var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(target === nums[mid]){
            console.log(mid);
            break;
        }else if(target > nums[mid]){
            start = mid+1
        }else if(target < nums[mid]){
            end = mid - 1
        }else{
            return -1;
        }
    }
};
console.log(search([-1,0,3,5,9,12], 90))