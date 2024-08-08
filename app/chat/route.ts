import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-2024-08-06"),
    system: "you are a helpful assistant",
    messages,
  });

  return result.toDataStreamResponse();
}
