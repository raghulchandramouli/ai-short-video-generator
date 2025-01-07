import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>this is Raghul </h2>
      <Button>Subscribe</Button>


      <UserButton/>
    </div>
  );
}
