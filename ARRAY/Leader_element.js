const leader = function (arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let leader = true;

    //Checking whether arr[i] is greater than all
    //the elements in its right side
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] > arr[i]) {
        // If any element found is greater than current leader
        // curr element is not the leader.
        leader = false;
        break;
      }

    // Push all the leaders in ans array.
    if (leader) ans.push(arr[i]);
  }

  return ans;
};

console.log(leader([16, 17, 4, 3, 5, 2]));
