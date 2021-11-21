const BaseService = require('./base-service')
const User = require('../model/user')

class UserService extends BaseService {

}

module.exports = new UserService(User)
