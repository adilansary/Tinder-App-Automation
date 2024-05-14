const loginScreen = require('../../screenobjects/Login/Login.screen.js');
const testConfig = require('../../../testConfig.js');
const commonUtils = require('../../utils/common.utils.js');
describe('About Module', () => {
    // before(async () => {
    // });
    it('Number input page', async () => {
     await loginScreen.navigateToNumberInput();
    });
    // after(async () => {
    // });
});

