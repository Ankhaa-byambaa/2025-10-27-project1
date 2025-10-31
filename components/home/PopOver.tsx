"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Input } from "../ui/input";
export function ChatAssisantPopOver() {
  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const onSendChat = async () => {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat: input }),
    });
    const data = await response.json();
    console.log(data.message);
    if (data) {
      setResponse(data.message);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="h-10 rounded-full bg-black text-white"
          variant="outline"
        >
          @
        </Button>
      </PopoverTrigger>
      <form>
        <PopoverContent className="h-100">
          <div>
            <div className="flex gap-5">
              <Input onChange={(e) => setInput(e.target.value)} value={input} />
              <button
                onClick={onSendChat}
                className="w-10 h-10 bg-black text-white text-5 flex justify-center items-center rounded-md"
              >
                {`>`}
              </button>
            </div>
            {response && <p>{response}</p>}
          </div>
        </PopoverContent>
      </form>
    </Popover>
  );
}
