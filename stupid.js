// unpack an array of callbacks in method sig after the promise
// EXAMPLE: let cbArr = [cb, cb, cb, cb]; thenUntilOutOfCallBacks(myPromise, ...cbArr)

function thenUntilOutOfCallBacks(promise) {
    let count = 0;
    while(arguments[count]) {
        let callback = arguments[count]
        promise = promise.then(callback)
        count += 1
    }
    return promise
}

// WORKING EXAMPLE
// create a promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I AM HERE!")
        resolve(0)
      }, 3000)
})  
// Callback Section  
let cb = (x) => { console.log(x + 1); return x + 1 }
// Array Of Callbacks
let cbArr = [cb, cb, cb, cb]
// Calling the function with the promise and unpacked cbs
thenUntilOutOfCallBacks(promise, ...cbArr)
