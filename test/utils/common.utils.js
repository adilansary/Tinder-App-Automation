class commonutils {
  async doClick(element, timeout) {
    await element.isDisplayed({ timeout: timeout });
    await element.click();
  }
  async doGetText(element, timeout) {
    await element.isDisplayed({ timeout: timeout });
    return element.getText();
  }
  async doInputText(element, timeout, value) {
    await element.isDisplayed({ timeout: timeout });
    await element.setValue(value);
  }
  async getBack() {
    await driver.back();
  }
  async doWaitUntil(element, timeout) {
    await element.waitUntil(async function () {
      const res = await element.isDisplayed();
      return res === true
    }, timeout, "Account Can't register after the given time")
  }
  async doClearValue(element, timeout) {
    await element.isDisplayed({ timeout: timeout });
    await element.clearValue();
  }
  async doDisplayed(element, timeout) {
    return await element.isDisplayed({ timeout: timeout });
  }
  async doSelected(element, timeout) {
    return await element.isSelected({ timeout: timeout });
  }
  async doLongPress(element) {
    let ele = element;
    await driver.touchPerform([
      { action: 'longPress', options: [{ element: ele }] }, { action: 'release' }
    ]);
  }
  async doLongSwap(element) {
    let ele = element;
    const windowSize = await driver.getWindowSize();
    const screenWidth = windowSize.width;
    const screenHeight = windowSize.height;
    console.log('Width', screenWidth);
    const elementLocation = await ele.getLocation();
    const elementX = elementLocation.x;
    console.log('elementX', elementX);
    const elementY = elementLocation.y;
    await ele.touchAction([
      'longPress',
      { action: 'moveTo', x: -1000, y: 0 },
      'release'
    ]);
  }
}
module.exports = new commonutils();
