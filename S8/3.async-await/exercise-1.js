const runTimeOut = async() => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    });
await promise;
};
console.log('time out');
runTimeOut();