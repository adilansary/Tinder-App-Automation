const faker = require('faker');
class basicUtils {
    async userName(){
        const randomUsername = faker.internet.userName();
        return randomUsername;
    }
    
}
module.exports = new basicUtils();