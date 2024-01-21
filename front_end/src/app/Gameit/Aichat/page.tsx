// pages/index.tsx
"use client";
import React from "react";
import axios, { AxiosResponse } from "axios";
import { useChat } from "ai/react";

interface OpenAIResponse {
  choices: { text: string }[];
}

interface Message {
  id: string;
  role: "user" | "assistant" | "system" | "function" | "data" | "tool";
  content: string;
}

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const sendRequestToOpenAI = async (userMessage: string): Promise<string> => {
    try {
      const apiKey = "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";
      const response: AxiosResponse<OpenAIResponse> = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = response.data;
      return (
        data.choices[0]?.message?.content.trim() || "No response from OpenAI"
      );
    } catch (error: any) {
      console.error("Error sending request to OpenAI API:", error.message);
      return "Error processing your request";
    }
  };

  const handleOpenAIAPIRequest = async () => {
    const aiReply = await sendRequestToOpenAI(input);

    messages.push({
      id: String(messages.length + 1),
      role: "assistant",
      content: aiReply,
    });
    handleInputChange({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);

    // Scroll to the bottom of the chat when a new message is added
    const chatContainer = document.getElementById("chatContainer");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div
        id="chatContainer"
        className="flex-1 overflow-y-auto p-4"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`whitespace-pre-wrap ${
              m.role === "user" ? "text-blue-600" : "text-green-600"
            }`}
          >
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}
      </div>
      <form
  onSubmit={(e) => {
    e.preventDefault();
    handleOpenAIAPIRequest();
  }}
  className="flex items-center p-10 border-t border-gray-300"
>
  <div className="mr-4">
    <img
      src="/Image/logo.png"
      alt="Logo Alt Text"
      width={95}
      height={95}
      className="rounded-full"
    />
  </div>

  <input
  className="flex-1 px-1 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
  value={input}
  placeholder="Say something ..."
  onChange={handleInputChange}
/>


  <button
    type="submit"
    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
  >
    Send
  </button>
</form>

    </div>
  );
};

export default Chat;
