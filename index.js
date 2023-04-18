let arr=[3,4,5,5,7,8,89]


let m1= -Infinity;
let m2= -Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>m1){
    m2=m1
        m1=arr[i];
    }else if(arr[i]>m2){
        m2=arr[i];
    }
}
console.log(m1+m2)
