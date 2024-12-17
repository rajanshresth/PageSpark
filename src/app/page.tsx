import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Button variant='destructive'>Button</Button>
      <Image src={"./logo.svg"} width={36} height={36} alt='logo' />
    </main>
  );
}
