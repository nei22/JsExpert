class EntityBase {
    #name
    #age
    #gender

    constructor({name ,age ,gender}){
        this.#age = age
        this.#name = name
        this.#gender = gender
      
    }
  
    get name(){
        const preffix = this.#gender === "male" ? "Mr." : "Ms."
        return `${preffix} ${this.#name}`
    }

    get birthYear(){
        if(!this.#age){
            throw new Error("You , must define age first Peew!!")
        }

        return new Date().getFullYear() - this.#age
    }

    set age(value){
        this.#age = value
    }


}
module.exports = EntityBase

