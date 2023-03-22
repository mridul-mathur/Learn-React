const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 3000);
    });
mypromise.then(value =>console.log(value));