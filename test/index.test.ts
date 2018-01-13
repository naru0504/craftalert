import {
  $,
  cral,
  removecral,
  $$,
  CLASS_NAMES,
} from './utils';

const { 
  MODAL, 
  OVERLAY, 
  MODAL_TITLE,
  MODAL_TEXT, 
  ICON,
  FOOTER,
} = CLASS_NAMES;

afterEach(() => removecral());

describe("init", () => {

  test("adds elements on first call", () => {
    expect($$(OVERLAY).length).toEqual(0);

    cral("Hello world!");

    expect($$(OVERLAY).length).toBe(1);
    expect($$(MODAL).length).toBe(1);
  });

});

describe("string parameters", () => {

  test("shows text when using 1 param", () => {
    cral("Hello world!");

    expect($$(MODAL_TEXT).is(':first-child')).toBeTruthy();
    expect($$(MODAL_TEXT).text()).toBe("Hello world!");
    expect($$(MODAL_TEXT).next().hasClass(FOOTER)).toBeTruthy();
  });

  test("shows title and text when using 2 params", () => {
    cral("Title", "text");

    expect($$(MODAL_TITLE).is(':first-child')).toBeTruthy();
    expect($$(MODAL_TITLE).text()).toBe("Title");
    expect($$(MODAL_TEXT).text()).toBe("text");
    expect($$(MODAL_TEXT).next().hasClass(FOOTER)).toBeTruthy();
  });

  test("shows icon, title and text when using 3 params", () => {
    cral("Oops", "text", "error");

    expect($$(ICON).is(':first-child')).toBeTruthy();
    expect($$(ICON).hasClass(`${ICON}--error`)).toBeTruthy();

    expect($$(MODAL_TITLE).is(':nth-child(2)')).toBeTruthy();
    expect($$(MODAL_TITLE).text()).toBe("Oops");

    expect($$(MODAL_TEXT).is(':nth-child(3)')).toBeTruthy();
    expect($$(MODAL_TEXT).text()).toBe("text");
    expect($$(MODAL_TEXT).next().hasClass(FOOTER)).toBeTruthy();
  });

});


