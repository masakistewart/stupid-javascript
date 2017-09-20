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
