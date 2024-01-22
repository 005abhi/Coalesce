"use client";
import { useState, useEffect } from "react";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  temperature: 0.9,
});
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });

const run = async (input: string) => {
  const response = await chain.call({ input: input });
  return response.response;
};

const categories = [
  { label: "C++", value: "C++" },
  { label: "SQL", value: "sql" },
  { label: "Algorithms", value: "algorithms" },
  { label: "Java", value: "java" },
];

const Main = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [category, setCategory] = useState("");

  const askFirstQuestion = async () => {
    const firstQuestionResponse = await run(
      `Ask a trivia question in the ${category} category.`
    );

    // Assuming the question and answer are separated by a newline character
    const question = firstQuestionResponse.split("\n")[0];
    setResponse(question);
  };

  useEffect(() => {
    if (category !== "") {
      askFirstQuestion();
    }
  }, [category]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await run(
      `AI: ${response}\nYou: ${input}\nAI: Evaluate the answer only then ask another trivia question.`
    );
    setResponse(result);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto p-8 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl font-bold mb-6">GAMEIT QUIZBOT</h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded"
            placeholder="Your answer"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded"
          >
            Submit
          </button>
        </form>
        {response && (
          <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
