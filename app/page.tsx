import { ChatAssisantPopOver } from "@/components/home/ChatAssistantPopOver";
import { TabsDemo } from "@/components/home/TabsDemo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <TabsDemo />
        <ChatAssisantPopOver />
      </div>
    </>
  );
}
