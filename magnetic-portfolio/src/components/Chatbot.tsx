'use client';

import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate a bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'This is a simulated response.', sender: 'bot' },
      ]);
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
