// function a(...args: any[]) {
//     console.log(arguments)
// }
// a(1, 2)


// function add(a: number, b: number) {
//     return a + b;
// }


// console.log(add(1, 2));

//定義對象


interface User {
    name: string
    age: number
    email: string
}


// function add(user: User) {
//     return '姓名:' + user.name + ' '+'年紀' + user.age + ' '+'信箱' + user.email;
// }
// console.log(add({name: "John", age:12, email: "John@example"}));

interface Obj {
    ueerid: number[],
    add: (this: Obj, num: number) =>void
}


let obj: Obj = {
    ueerid: [1, 2, 3],
    add(this: Obj, num: number) {
        this.ueerid.push(num);
    }
}

obj.add(10);