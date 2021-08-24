class BaseStorage {

    findBy(data){
        console.error(`${this.constructor.name} Missing implimantation for find`)
        throw new Error(`${this.constructor.name} Missing implimantation for find`)
    }
    findAll(){
        console.error(`${this.constructor.name} Missing implimantation for findAll`)
        throw new Error(`${this.constructor.name} Missing implimantation for findAll`)
    }
    create(data){
        console.error(`${this.constructor.name} Missing implimantation for create`)
        throw new Error(`${this.constructor.name} Missing implimantation for create`)
    }
    update(data){
        console.error(`${this.constructor.name} Missing implimantation for update`)
        throw new Error(`${this.constructor.name} Missing implimantation for update`)
    }
    delete(data){
        console.error(`${this.constructor.name} Missing implimantation for delete`)
        throw new Error(`${this.constructor.name} Missing implimantation for delete`)
    }

}

module.exports = BaseStorage