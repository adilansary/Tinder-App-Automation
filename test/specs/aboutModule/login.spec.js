const loginScreen = require('../../screenobjects/Login/Login.screen.js');
const testConfig = require('../../../testConfig');
const commonUtils = require('../../utils/common.utils');
describe('About Module', () => {
    // before(async () => {
    // });
    it('Print user name from Faker', async () => {
     await loginScreen.userNameFromFaker();
    });
    // after(async () => {
    // });
});

