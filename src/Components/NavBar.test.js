import { shallow } from "enzyme";
import React from "react";

import { NavBar } from "./NavBar";

describe("NavBar", () => {
  test.each([[0, "What is Pursuit?", 1, "Create an account", 2, "Sign in"]])(
    "child at %i is a button with %s",
    (index, text) => {
      const wrapper = shallow(<NavBar />);

      const child = wrapper.childAt(index);

      expect(child).toHaveDisplayName("button");
      expect(child).toHaveText(text);
    }
  );
});
