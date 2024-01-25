// pages/index.tsx
"use client";
import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { AiOutlineSend } from "react-icons/ai";

interface OpenAIResponse {
  choices: { text: string }[];
}

const Chat: React.FC = () => {
  const { messages, input, handleInputChange } = useChat();
  const [loading, setLoading] = useState<boolean>(false);

  const sendRequestToOpenAI = async (userMessage: string): Promise<string> => {
    try {
      setLoading(true);
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
      setLoading(false);
      return (
        data.choices[0]?.message?.content.trim() || "No response from OpenAI"
      );
    } catch (error: any) {
      setLoading(false);
      console.error("Error sending request to OpenAI API:", error.message);
      return "Error processing your request";
    }
  };

  const handleOpenAIAPIRequest = async () => {
    const aiReply = await sendRequestToOpenAI(input);

    messages.push({
      id: String(messages.length + 1),
      role: "user",
      content: input,
    });

    messages.push({
      id: String(messages.length + 1),
      role: "assistant",
      content: aiReply,
    });

    handleInputChange({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          GameIT/AI-Chat
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </a>

      <div
        id="chatContainer"
        className="flex-1 overflow-y-auto p-4 flex flex-col-reverse"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`whitespace-pre-wrap mb-2 ${
              m.role === "user"
                ? "text-blue-600 self-end bg-blue-200 p-2 rounded-lg"
                : "text-green-600 self-start bg-green-200 p-2 rounded-lg"
            } animate__animated animate__fadeIn`}
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
        className="flex items-center p-6 border-t border-gray-300 bg-gray-800"
      >
        <div className="mr-4">
          <img
            src="/Image/logo.png"
            alt="Logo Alt Text"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>

        <motion.input
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="flex-1 px-2 py-4 border rounded-md text-white focus:outline-none focus:border-blue-500 bg-gray-700"
          value={input}
          placeholder="Ask me anything..."
          onChange={handleInputChange}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`ml-2 px-3 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-600 focus:outline-none ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          <span className="flex items-center">
            <AiOutlineSend className="mr-2" />
            Send
          </span>
        </motion.button>
      </form>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 flex justify-center items-center">
          <div
            aria-label="Loading..."
            role="status"
            className="text-center flex flex-col items-center"
          >
            <img
              src="https://media.tenor.com/2YQj1-QHrtMAAAAi/vutura-chatbot.gif"
              alt="GIF from Giphy"
              className="mb-2 max-w-xs"
            />
            <h1 className="font-sans text-2xl font-bold text-white tracking-wide leading-relaxed">
              Weaving through the digital realms
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
