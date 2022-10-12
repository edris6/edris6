const enum Size {Small = "nice", Medium = 5, Large = 7}
let mysize: Size = Size.Medium;
let Small: Size = Size.Small;
console.log(mysize)
console.log(Small)

function calculatesmth(income: number, taxyear = 2022, nice?:number): number{
    console.log("UR MOTHER")
    income + 3

    if(income < 50_000 && taxyear == 2022){
        return income * 3030004
    }
    console.log(nice)
    return income * 3
    
}

calculatesmth(30, 2022)