import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex p-2">
     <h1>Hello world</h1>
     <Button label={'Login'} />
    </main>
  );
}
