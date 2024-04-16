

function sum(arr: number[]): any{
    if(arr.length === 0){
        return 0
    } else {
   if(arr[arr.length - 1] >= 10){
       return arr[arr.length - 1] + sum([...arr.slice(0, -1)])
   } else {
       return   sum([...arr.slice(0, -1)])
   }

    }
}



console.log(sum([1,2,3, 10, 30 ,40]));