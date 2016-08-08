let Tom = {
    firstName:"Tom",
    lastName:"Miller",
    age:30,
    gender:'M',
    birthDate: new Date(1986,5,1),
    toString:function all() {
        return this.firstName + " " + this.lastName + " " + this.age + " " + this.gender + " " + this.birthDate
    }
}
console.log(Tom.toString());