const ages = [1, 2, 5, 8];
const ages2 = [4, 4, 8 ];
// const all = ages.concat(ages2);
const all = [...ages, ...ages2]
console.log(all);

function total(x, y, z){
    return x + y + z;
}
const arry = [1 , 4 , 8, 12];
console.log(total(...arry));