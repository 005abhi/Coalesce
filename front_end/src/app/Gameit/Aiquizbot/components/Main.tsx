"use client";
import { useState, useEffect } from "react";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { motion } from "framer-motion";


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
    <div className="bg-gray-900 min-h-screen flex items-center justify-center relative">
    <div className="absolute inset-0 z-0">
      <img
        src="https://cdn.dribbble.com/users/197766/screenshots/11403978/media/356245418ef47ee7f947bb0c7b09cdb7.gif"
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-black text-center p-8 rounded-md bg-gray-800 max-w-md w-full relative z-10"
    >
      <i><h1 className="text-4xl font-bold mb-6 text-white">GAMEIT QUIZBOT</h1></i>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-6 text-lg border border-gray-300 rounded"
          placeholder="Your answer"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-6 text-lg border border-gray-300 rounded"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="p-6 bg-blue-600 text-white font-semibold rounded cursor-pointer"
        >
          Submit
        </motion.button>
      </form>

      {response && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-6 bg-gray-100 border border-gray-300 rounded"
        >
          <p>{response}</p>
        </motion.div>
      )}
    </motion.div>
  </div>
  );
};

export default Main;
