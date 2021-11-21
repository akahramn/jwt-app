require('mongoose')

class BaseService {
    constructor(model) {
        this.model = model
        this.filename = model.name
    }

    save(object){
        return this.model.insertMany(object)
    }

    async findBy(property, value) {
        return await this.model.find({ [property]: value })
      }


}

module.exports = BaseService