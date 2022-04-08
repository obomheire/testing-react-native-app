// import React from "react";
// import { render } from "@testing-library/react-native";
// import Hello from "../conponents/Hello";

// describe("Hello", () => {
//   it("renders the correct message", () => {
//     const { queryByText } = render(<Hello />);
//     expect(queryByText("Hello, world!")).not.toBeNull();
//   });
// });

import React from "react";
import { render } from "@testing-library/react-native";
import Hello from "../conponents/Hello";

describe("Hello", () => {
  it("displays the passed-in name", () => {
    const { queryByText } = render(<Hello name="Josh" />);
    expect(queryByText("Hello, Josh!")).not.toBeNull();
  });
});