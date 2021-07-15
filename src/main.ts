let sum: number = 0;
let count: number = 0;
//Count tu 0 -> <30 du 30 so
for (let i = 2; count < 30; i++) {
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    let isPrime: boolean = true;
    for (let j = 2; j < Math.sqrt(i); j++) {
        if(i%j==0){
            isPrime = false;
            break;
        }
    }
    if(!isPrime){
        continue;
    }
    sum+= i;
    count++;
}
console.log(sum);