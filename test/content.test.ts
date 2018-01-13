import {
  cral,
  removecral,
  $,
  $$,
  CLASS_NAMES,
} from './utils';

const {
  CONTENT,
  MODAL_TEXT
} = CLASS_NAMES;

afterEach(() => removecral());

describe("show content", () => {

  test("shows no content by default", () => {
    cral("Hello");

    expect($$(CONTENT).length).toBe(0);
  });

  test("shows input when using content: 'input'", () => {
    cral({
      content: "input",
    });

    const inputSelector = `${CONTENT}__input`;

    expect($$(CONTENT).length).toBe(1);
    expect($$(inputSelector).length).toBe(1);
    expect($$(inputSelector).get(0).getAttribute('type')).toBeNull();
  });

  test("can customize input with more advanced content options", () => {
    cral({
      content: {
        element: "input",
        attributes: {
          placeholder: "Type your password",
          type: "password",
        },
      },
    });

    const inputSelector = `${CONTENT}__input`;

    expect($$(CONTENT).length).toBe(1);
    expect($$(inputSelector).length).toBe(1);
    expect($$(inputSelector).get(0).getAttribute('type')).toBe('password');
    expect($$(inputSelector).get(0).getAttribute('placeholder')).toBe('Type your password');
  });

  test("can set content to custom DOM node", () => {
    let btn = document.createElement('button');
    btn.classList.add('custom-element');

    cral({
      content: btn,
    });

    expect($$(CONTENT).length).toBe(1);
    expect($$('custom-element').length).toBe(1);
  });

});

describe("show modal text", () => {
  test("transforms newline to break", () => {
    cral('Hello\nWorld\n');

    expect($(`.${MODAL_TEXT} br`).length).toBe(2);
  });

  test("escapes HTML elements", () => {
    const text = '<script>bad stuff</script>';
    cral(text);

    expect($(`.${MODAL_TEXT} script`).length).toBe(0);
    expect($$(MODAL_TEXT).text()).toEqual(expect.stringMatching(text));
  });
});
