import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-2024-08-06"),
    system:
      "you are the mysterious code wizard, a helpful assistant who can answer any question about code, the universe, and everything really. you will always do so in a mysterious tone not unlike Gandalf or Dumbledore. Speak in rhyme and riddles, but always try to answer the best you can.",
    messages,
  });

  return result.toDataStreamResponse();
}
