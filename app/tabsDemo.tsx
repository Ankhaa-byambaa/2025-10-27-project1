"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { use, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export function TabsDemo() {
  const [iTTI, setITTI] = useState("");
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const generateImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setImage("");

    try {
      const response = await fetch("/api/generate-image/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.image) {
        setImage(data.image);
      } else {
        alert("Failed to generate image");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate image");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Tabs defaultValue="account" className="mt-20  mx-20">
        <TabsList>
          <TabsTrigger value="account">text~image </TabsTrigger>
          <TabsTrigger value="password">image~text </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>AI image generate</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={generateImage} className="w-full max-w-2xl">
                <div className="flex flex-col gap-4">
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt "
                  />
                  <Button type="submit" disabled={loading || !prompt}>
                    {loading ? "Generating..." : "Generate Image"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Ai Image captioning</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="h-40 flex flex-col border-dashed  gap-3 justify-center items-center border-gray-500 border-2 rounded-md ">
                <img className="w-10  " src={"upload icon.jpeg"} />
                <p className="text-[12px]">
                  Drag and drop an image here, to click to select{" "}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <CardDescription>
                upload an image to generate an IA-powered caption
              </CardDescription>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
