import React from "react";
import { render } from "@testing-library/react-native";
import WidgetContainer from "../conponents/WidgetContainer";
import api from "../api/testApi";

jest.mock("../api/testApi");

describe("WidgetContainer", () => {
  it("loads widgets upon mount", async() => {
  
  api.get.mockResolvedValue({
    data: [
      { id: 1, name: "Widget 1" },
      { id: 2, name: "Widget 2" },
    ],
  });

    const { findByText, queryByText, debug } = render(<WidgetContainer />);

    // debug()
    
        await findByText('Widget 1');
      expect(queryByText('Widget 2')).not.toBeNull()
});
});
