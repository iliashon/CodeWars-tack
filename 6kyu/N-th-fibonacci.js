function nthFibo(n) {
    let arr=[0,1];
    for(let i=1; i<n;i++){
        arr.push(arr[i-1]+arr[i]);
    }
    return n > 0 ? arr[n-1] : 0;
}

console.log(nthFibo(4));