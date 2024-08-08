import { useChat } from "ai/react";
import Image from "next/image";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Chat({ scroll }: { scroll: () => void }) {
  const { messages, input, isLoading, handleInputChange, handleSubmit } =
    useChat({
      api: "/chat",
    });

  useEffect(() => {
    scroll();
  }, [messages, scroll]);

  const renderResponse = () => {
    return (
      <div className="flex-grow flex-1 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.role === "assistant" && (
              <Image
                src="/avatar.webp"
                alt={m.role}
                width={30}
                height={30}
                className="rounded-full mr-3"
              />
            )}
            <div
              className={`max-w-[500px] px-4 py-2 rounded-lg ${
                m.role === "user"
                  ? "bg-primary text-secondary-light rounded-tr-none"
                  : "bg-background-dark dark:bg-background-light text-secondary-light dark:text-secondary-light rounded-tl-none"
              }`}
            >
              <p>
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </p>
            </div>
            {m.role === "user" && (
              <Image
                src="/your-avatar.webp"
                alt={m.role}
                width={30}
                height={30}
                className="rounded-full ml-3"
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-10 flex flex-col justify-between h-full">
      {renderResponse()}
      <div className="flex-none bg-background-dark sticky bottom-0 pb-6">
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
        <form
          onSubmit={handleSubmit}
          className="flex items-center space-x-2 bg-background-light rounded-full shadow-md p-1"
        >
          <input
            className="flex-grow px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light text-secondary-light"
            name="input-field"
            type="text"
            placeholder="Say something"
            onChange={handleInputChange}
            value={input}
          />
          <button
            type="submit"
            className="flex items-center justify-center w-10 h-10 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none disabled:opacity-50"
            disabled={isLoading}
          >
            <Image src="/plane.svg" alt="Send" width={20} height={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
