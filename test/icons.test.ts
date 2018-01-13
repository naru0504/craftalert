import {
  cral,
  $$,
  CLASS_NAMES,
  removecral,
} from './utils';

const { 
  ICON,
} = CLASS_NAMES;

afterEach(() => removecral());

describe("show icons", () => {

  test("shows icon depending on third argument", () => {
    cral("Error", "An error occured!", "error");

    expect($$(ICON).length).toBe(1);
    expect($$(ICON).hasClass(`${ICON}--error`)).toBeTruthy();
  });

  test("shows icon when using 'icon' object key", () => {
    cral({
      icon: 'warning',
    });

    expect($$(ICON).length).toBe(1);
    expect($$(ICON).hasClass(`${ICON}--warning`)).toBeTruthy();
  });

  test("hides icon when setting 'icon' key to 'false'", () => {
    cral({
      icon: false,
    });

    expect($$(ICON).length).toBe(0);
  });

});

