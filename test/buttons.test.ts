import {
  $,
  cral,
  removecral,
  $$,
  onAction,
  CLASS_NAMES,
  delay,
} from './utils';

const {
  BUTTON,
  CONFIRM_BUTTON,
  CANCEL_BUTTON,
  MODAL,
} = CLASS_NAMES;

afterEach(() => removecral());

describe("show buttons", () => {

  test("shows only confirm button by default", () => {
    cral();

    expect($$(BUTTON).length).toBe(1);
    expect($$(BUTTON).hasClass(CONFIRM_BUTTON)).toBeTruthy();
  });

  test("hides all buttons", () => {
    cral({
      buttons: false,
    });

    expect($$(BUTTON).length).toBe(0);
  });

  test("shows confirm and cancel buttons", () => {
    cral({
      buttons: true,
    });

    expect($$(BUTTON).length).toBe(2);
    expect($$(CONFIRM_BUTTON).length).toBe(1);
    expect($$(CANCEL_BUTTON).length).toBe(1);
  });

  test("sets button text", () => {
    cral({
      button: "Test",
    });

    expect($$(CONFIRM_BUTTON).text()).toBe("Test");
  });

  test("sets button texts with array", () => {
    cral({
      buttons: ["Stop", "Do it"],
    });

    expect($$(CONFIRM_BUTTON).text()).toBe("Do it");
    expect($$(CANCEL_BUTTON).text()).toBe("Stop");
  });

  test("sets default button texts with array", () => {
    cral({
      buttons: [true, true],
    });

    expect($$(CONFIRM_BUTTON).text()).toBe("OK");
    expect($$(CANCEL_BUTTON).text()).toBe("Cancel");
  });

  test("uses button object", () => {
    cral({
      buttons: {
        cancel: "Run away!",
        confirm: true,
      }
    });

    expect($$(CANCEL_BUTTON).text()).toBe("Run away!");
    expect($$(CONFIRM_BUTTON).text()).toBe("OK");
  });

  test("sets more than 2 buttons", () => {
    cral({
      buttons: {
        cancel: "Run away!",
        catch: {
          text: "Throw Pokéball!",
        },
        defeat: true,
      },
    });

    expect($$(BUTTON).length).toBe(3);
    expect($$(CANCEL_BUTTON).text()).toBe("Run away!");
    expect($$(CONFIRM_BUTTON).length).toBe(0);

    expect($$(`${BUTTON}--catch`).length).toBe(1);
    expect($$(`${BUTTON}--catch`).text()).toBe("Throw Pokéball!");

    expect($$(`${BUTTON}--defeat`).length).toBe(1);
    expect($$(`${BUTTON}--defeat`).text()).toBe("Defeat");
  });

});

describe("buttons resolve values", () => {

  test("confirm button resolves to true", async () => {
    expect.assertions(1);

    setTimeout(() => {
      $$(CONFIRM_BUTTON).click();
    }, 500);

    const value = await cral();

    expect(value).toBeTruthy();
  });

  test("cancel button resolves to null", async () => {
    expect.assertions(1);

    setTimeout(() => {
      $$(CANCEL_BUTTON).click();
    }, 500);

    const value = await cral({
      buttons: true,
    });

    expect(value).toBeNull();
  });

  test("can specify resolve value", async () => {
    expect.assertions(1);

    setTimeout(() => {
      $$(CONFIRM_BUTTON).click();
    }, 500);

    const value = await cral({
      button: {
        value: "test",
      },
    });

    expect(value).toBe("test");
  });

  test("extra button resolves to string by default", async () => {
    expect.assertions(1);

    setTimeout(() => {
      $(`.${BUTTON}--test`).click();
    }, 500);

    const value = await cral({
      buttons: {
        test: true,
      },
    });

    expect(value).toBe("test");
  });

});

describe("loading", () => {

  test("shows loading state", async () => {
    cral({
      button: {
        text: "HEPP",
        closeModal: false,
      },
    });

    const $button = $(`.${BUTTON}--confirm`);

    expect($button.hasClass('cral-button--loading')).toBeFalsy();

    $button.click();

    expect($button.hasClass('cral-button--loading')).toBeTruthy();
  });

});

describe("set class name", () => {

  test("sets single class name as string", async () => {
    cral({
      button: {
        text: "TEST",
        closeModal: true,
        className: 'single-class'
      },
    });

    const $button = $(`.${BUTTON}--confirm`);
    expect($button.hasClass('single-class')).toBeTruthy();
  });

  test("sets multiple class names as string", async () => {
    cral({
      button: {
        text: "TEST",
        closeModal: true,
        className: 'class1 class2'
      },
    });

    const $button = $(`.${BUTTON}--confirm`);
    expect($button.hasClass('class1')).toBeTruthy();
    expect($button.hasClass('class2')).toBeTruthy();
  });

  test("sets multiple class names as array", async () => {
    cral({
      button: {
        text: "TEST",
        closeModal: true,
        className: ["class1", "class2"]
      },
    });

    const $button = $(`.${BUTTON}--confirm`);
    expect($button.hasClass('class1')).toBeTruthy();
    expect($button.hasClass('class2')).toBeTruthy();
  });

});
