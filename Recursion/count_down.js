function countDown(num) {
    // base case
    if (num <= 0) {
        console.log('all done');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}