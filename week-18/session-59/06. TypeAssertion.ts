enum Role{
    ADMIN="ADMIN",
    USER="USER"
}
type Person1={
    name: string
}
type Employee= Person1 & {
    role: Role
}
class CompanyUser<T>{
    data: T;
    constructor(data:T){
        this.data=data;
    }
    print(){
        console.log(this.data);
    }
}

const user: Employee={
    name: "John",
    role: Role.ADMIN
}

const u1= new CompanyUser<Employee>(user);
u1.print(); // Output: { name: 'John', role: 'ADMIN' }