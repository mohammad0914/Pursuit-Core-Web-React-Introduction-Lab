import { shallow } from "enzyme";
import React from "react";

import App from "./App";

describe("App", () => {
  it("renders NavBar, UserProfile, Posts, and Contacts", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.children().map((child) => child.type().name)).toEqual([
      "NavBar",
      "UserProfile",
      "Posts",
      "Contacts",
    ]);
  });
});
