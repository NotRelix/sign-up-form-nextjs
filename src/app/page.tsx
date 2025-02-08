import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#605c73] min-h-screen h-full text-foreground flex justify-center items-center p-32">
      <div className="bg-[#2c2638] flex gap-4 p-4 rounded-2xl h-[650px] w-[1000px]">
        <div className="w-[500px] overflow-hidden rounded-2xl">
          <Image src={"/assets/bg.jpg"} alt="a beautiful desert background at night" width={4912} height={7360} className="w-full h-auto object-contain"/>
        </div>
        <div className="w-[500px] p-[3em] flex flex-col gap-4">
          <h1 className="font-sans text-4xl font-semibold">Create an account</h1>
          <p className="text-gray-400">Already have an account? Log in</p>
          <div className="py-6 flex flex-col gap-4">
            <div className="flex gap-4">
              <Input type="text" placeholder="First Name"/>
              <Input type="text" placeholder="Last Name"/>
            </div>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Enter your password"/>
            <div className="flex items-center space-x-2">
              <Checkbox />
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept terms and conditions
              </label>
            </div>
          </div>
          <Button className="bg-[#a872ff] text-primary">Create account</Button>
          <Separator className="my-4 bg-gray-500"/>
          <div className="flex gap-4">
            <Button className="flex-1 bg-ghost border border-white text-white">Google</Button>
            <Button className="flex-1 bg-ghost border border-white text-white">Apple</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
