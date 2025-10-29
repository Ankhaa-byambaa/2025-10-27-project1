"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function ChatAssisantPopOver() {
  const [clientMessage, setClientMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const chat = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("app/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientMessage }),
      });
      const data = await response.json();
      if (!data.text) {
        setLoading(false);
      } else {
        alert("Failed to generate text");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate chat");
    } finally {
      setLoading(false);
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
      <form onSubmit={chat}>
        <PopoverContent className="h-100">
          <div>
            <div className="flex gap-5">
              <input
                value={clientMessage}
                placeholder=" type your message"
                className="w-full h-10 "
                onChange={(e) => setClientMessage(e.target.value)}
              />
              <button className="w-10 h-10 bg-black text-white text-5 flex justify-center items-center rounded-md">
                ⌲
              </button>
            </div>
            {loading ? <p>{clientMessage}</p> : <></>}
          </div>
        </PopoverContent>
      </form>
    </Popover>
  );
}
