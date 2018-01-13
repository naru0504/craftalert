import {
  cral,
  removecral,
  $$,
  CLASS_NAMES,
} from './utils';

const { 
  OVERLAY,
  CONFIRM_BUTTON,
  TITLE,
} = CLASS_NAMES;

afterEach(() => removecral());

describe("promise value", () => {

  test("dismisses modal by clicking on overlay", async () => {
    expect.assertions(1);

    setTimeout(() => {
      $$(OVERLAY).click();
    }, 500);

    const value = await cral();

    expect(value).toBeNull();
  });

  test("changes value with setActionValue", async () => {

    setTimeout(() => {
      cral.setActionValue("test");
      $$(CONFIRM_BUTTON).click();
    }, 500);

    const value = await cral(); 

    expect(value).toEqual("test");
  });

  test("changes cancel value with setActionValue", async () => {

    setTimeout(() => {
      cral.setActionValue({
        cancel: "test",
      });
      $$(OVERLAY).click();
    }, 500);

    const value = await cral();

    expect(value).toEqual("test");
  });

  /*
   * @TODO!
   *
  test("cannot dismiss if 'clickOutside' is false", async () => {

  });
   */

});

