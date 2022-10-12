type Employety = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let emplyee: Employety = {
    id: 1, 
    name:"Mosh",
    retire: (date: Date) => {console.log(date)}
};
