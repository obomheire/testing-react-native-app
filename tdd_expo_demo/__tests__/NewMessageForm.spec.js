import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import NewMessageForm from "../conponents/NewMessageForm";

describe("NewMessageForm", () => {
  describe("clicking send", () => {
    it("clears the message field", () => {
      // let onSend
      // const { getByPlaceholderText, getByText } = render(<NewMessageForm onSend={onSend} />);
       const { getByPlaceholderText, getByText } = render(<NewMessageForm />);

      fireEvent.changeText(getByPlaceholderText("Message"), "Hello world");
      fireEvent.press(getByText("Send"));

      expect(getByPlaceholderText("Message")).toHaveProp("value", "");
    });

    it("calls the onSend prop", () => {
      const messageText = "Hello world";
      const sendHandler = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <NewMessageForm onSend={sendHandler} />
      );

      fireEvent.changeText(getByPlaceholderText("Message"), "Hello world");
      fireEvent.press(getByText("Send"));

      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
