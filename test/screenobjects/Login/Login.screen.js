const loginData = require('../../data/Login/login.data.json');
const testConfig = require('../../../testConfig');
const commonUtils = require('../../utils/common.utils');
const basicUtils = require('../../utils/basic.utils');
class about {
    
    get createAccount_Button() {
        return $("~Create account");
    }
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
        return $("~continueButton");
    } 
    get iAgree_Button() {
        return $("~button_onboarding_submit");
    }
    get emailField() {
        return $('-ios class chain:**/XCUIElementTypeTextField[`value == "Enter email"`]');
    }
    get emailNext() {
        return $('-ios class chain:**/XCUIElementTypeButton[`name == "Next"`]');
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
    get emailSkipButton() {
        return $('-ios class chain:**/XCUIElementTypeStaticText[`name == "SKIP"`]');
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
        return $('-ios class chain:**/XCUIElementTypeButton[`name == "Man"`]');
    }
    get skipButton() {
        return $("~Skip");
    }
    get LongTerm_Button() {
        return $("~Long-term partner");
    }
    
    async navigateToNumberInput() {
        await commonUtils.doClick(this.createAccount_Button, 5000);
        await commonUtils.doClick(this.regionDropDown, 5000);
        await commonUtils.doInputText(this.searchregionField, 5000, "United States");
        await commonUtils.doClick(this.usaRegion, 5000);
    
        // const rented = await rentNumber();
        // if (rented) {
        //     const { rentalId, phoneNumber } = rented;
        //     await commonUtils.doInputText(this.phoneNumberInputField, 5000, phoneNumber);
        //     await commonUtils.doClick(this.continueButton, 5000);
        //     await driver.pause(30000);  // Adjust the pause duration as needed
    
        //     const verificationCode = await getVerificationCode(rentalId);
        //     if (verificationCode) {
        //         await commonUtils.doInputText(this.verificationCodeField, 5000, verificationCode);
        //         await commonUtils.doClick(this.submitButton, 5000);
        //         await markRentalAsDone(rentalId);
        //     }
        // }
    }
    
    async createProfile() {
        await commonUtils.doClick(this.next_Button, 5000);
        await driver.pause(5000);
        await commonUtils.doClick(this.emailField, 5000);
        await driver.pause(1000);
        await commonUtils.doInputText(this.emailField, 5000, basicUtils.email);
        await driver.pause(1000);
        await commonUtils.doClick(this.emailNext, 5000);
        await commonUtils.doClick(this.emailSkipButton, 5000);
        await driver.pause(1000);
        await commonUtils.doClick(this.iAgree_Button, 5000);
        await commonUtils.doClick(this.nameField, 5000);
        await driver.pause(7000);
        await commonUtils.doInputText(this.nameField, 5000, basicUtils.username);
        await commonUtils.doClick(this.done_Button, 5000);
        await commonUtils.doClick(this.nextFromFirstName, 5000);
        await commonUtils.doClick(this.letsGo_Button, 5000);
        await commonUtils.doClick(this.dateFirstDigit, 5000);
        await commonUtils.doInputText(this.dateFirstDigit, 5000, "1");
        await driver.pause(1000);
        await commonUtils.doClick(this.dateSecondDigit, 5000);
        await commonUtils.doInputText(this.dateSecondDigit, 5000, "2");
        await driver.pause(1000);
        await commonUtils.doClick(this.monthFirstDigit, 5000);
        await commonUtils.doInputText(this.monthFirstDigit, 5000, "1");
        await driver.pause(1000);
        await commonUtils.doClick(this.monthSecondDigit, 5000);
        await commonUtils.doInputText(this.monthSecondDigit, 5000, "2");
        await driver.pause(1000);
        await commonUtils.doClick(this.yearFirstDigit, 5000);
        await commonUtils.doInputText(this.yearFirstDigit, 5000, "1");
        await driver.pause(1000);
        await commonUtils.doClick(this.yearSecondDigit, 5000);
        await commonUtils.doInputText(this.yearSecondDigit, 5000, "9");
        await driver.pause(1000);
        await commonUtils.doClick(this.yearThirdDigit, 5000);
        await commonUtils.doInputText(this.yearThirdDigit, 5000, "9");
        await driver.pause(1000);
        await commonUtils.doClick(this.yearFourthDigit, 5000);
        await commonUtils.doInputText(this.yearFourthDigit, 5000, "9");
        await commonUtils.doClick(this.nextFromFirstName, 5000);
        await commonUtils.doClick(this. genderMale, 5000);
        await commonUtils.doClick(this.nextFromFirstName, 5000);
        await commonUtils.doClick(this.nextFromFirstName, 5000);
        await commonUtils.doClick(this.LongTerm_Button, 5000);
        await commonUtils.doClick(this.nextFromFirstName, 5000);
        await commonUtils.doClick(this.skipButton, 5000);
        await commonUtils.doClick(this.skipButton, 5000);
        await commonUtils.doClick(this.skipButton, 5000);
        await commonUtils.doClick(this.skipButton, 5000);
    }
    async userNameFromFaker(){
        console.log(basicUtils.userName)
    }

}
module.exports = new about();


