function twoSum(nums,target){
    let map={};
    for (let i=0;i<nums.length; i++){
        let needed= target -nums[i];
        if(map[needed] !==undefined){
            return [map[needed],i];
        }
        map[nums[i]]=i;
    } 
}
let arr=[2,11,15,7];
console.log("Two Sum:",twoSum(arr,9));
//timecomplexity:O(n)