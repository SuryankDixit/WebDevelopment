function echo(str1, num) {
    for (let i = 0; i < num; i++)
        console.log(str1);
};
echo("HelloWorld Node", 10);

function average(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++)
        sum += nums[i];
    console.log(sum / nums.length);
};
average([10, 20, 30, 40, 50]);