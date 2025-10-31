import { Popover } from "@radix-ui/react-popover";
import { Tabs } from "@radix-ui/react-tabs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Tabs />
        <Popover />
      </div>
    </>
  );
}
