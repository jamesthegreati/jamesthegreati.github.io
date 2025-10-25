'use client';

import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getBotResponse = (userInput: string) => {
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
      return 'Hello there! How can I help you today?';
    }
    if (lowerCaseInput.includes('how are you')) {
      return "I'm just a bot, but I'm doing great! Thanks for asking.";
    }
    if (lowerCaseInput.includes('help')) {
      return 'You can ask me about my skills, projects, or anything else you want to know.';
    }
    return 'That is a great question. While I am not a fully-fledged AI, you can see how I was built in the "My Research & Open-Source Heartbeat" section.';
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessages = [...messages, { text: inputValue, sender: 'user' as const }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-800 rounded-lg h-96 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg my-2 ${
              message.sender === 'user' ? 'bg-coral-accent text-white self-end' : 'bg-gray-700'
            }`}
          >
            {message.text}
          </div>
        ))}
        {isTyping && <div className="text-gray-400">typing...</div>}
      </div>
      <div className="p-4 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 bg-gray-700 text-white p-2 rounded-l-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-coral-accent text-white px-4 py-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
