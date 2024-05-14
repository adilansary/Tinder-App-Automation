const loginData = require('../../data/Login/login.data.json');
const testConfig = require('../../../testConfig');
const commonUtils = require('../../utils/common.utils');
const basicUtils = require('../../utils/basic.utils');
class about {
    get login_Button() {
        return $("~sign_in_button");
    }
    get signInWithPhone_Button() {
        return $("~sms_signin_button");
    }
    get regionDropDown() {
        return $('-ios class chain:**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeImage');
    }
    get searchregionField() {
        return $("~Search");
    }
    get usaRegion() {
        return $("~United States");
    } 
    get next_Button() {
        return $("~continue_button");
    } 
    get iAgree_Button() {
        return $("~button_onboarding_submit");
    }
    get nameField() {
        return $('-ios class chain:**/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }
    get done_Button() {
        return $("~Done"); 
    }
    get nextFromFirstName() {
        return $("~button_onboarding_submit"); 
    }
    get letsGo_Button() {
        return $('-ios class chain:**/XCUIElementTypeButton[`name == "Let’s go"`]');
    }
    get dateFirstDigit() {
        return $("~D0");
    }
    get dateSecondDigit() {
        return $("~D1");
    }
    get monthFirstDigit() {
        return $("~M0");
    }
    get monthSecondDigit() {
        return $("~M1");
    }
    get yearFirstDigit() {
        return $("~Y0");
    }
    get yearSecondDigit() {
        return $("~Y1");
    }
    get yearThirdDigit() {
        return $("~Y2");
    }
    get yearFourthDigit() {
        return $("~Y3");
    }
    get genderMale() {
        return $("~Selected man");
    }
    get genderMale() {
        return $("~Skip");
    }
    
    
    async navigateToNumberInput() {
        await commonUtils.doClick(this.login_Button, 5000);
        await commonUtils.doClick(this.signInWithPhone_Button, 5000);
        await commonUtils.doClick(this.regionDropDown, 5000);
        await commonUtils.doInputText(this.searchregionField, 5000, "United States");
        await driver.pause(testConfig.forceWaitTimeout);
        await commonUtils.doClick(this.next_Button, 5000);
    }
    async createProfile() {
        await commonUtils.doClick(this.nameField, 5000);
        await commonUtils.doInputText(this.nameField, 5000, basicUtils.userName);
        await commonUtils.doClick(this.regionDropDown, 5000);
        await commonUtils.doClick(commonUtils.doInputText(this.searchregionField, 5000, "United States"));
        await commonUtils.doClick(this.usaRegion, 5000);
    }
    async userNameFromFaker(){
        console.log(basicUtils.userName)
    }

}
module.exports = new about();