"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Laptop2, Smartphone } from "lucide-react";

const EditorNavBar = () => {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    // This will run only on the client side
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setView("mobile");
      } else {
        setView("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check window size on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className='flex justify-between w-full items-center bg-white shadow-md h-16 px-6 border-b'>
      {/* Logo Section */}
      <div className='flex items-center gap-2'>
        <Image src='/logo.svg' width={36} height={36} alt='logo' />
        <span className='text-lg font-semibold text-gray-800 hidden lg:flex'>
          PageSpark
        </span>
      </div>

      {/* View Toggle Section */}
      <div className='flex items-center gap-2'>
        <Button
          variant={view === "desktop" ? "default" : "outline"}
          onClick={() => setView("desktop")}
          className='flex items-center gap-2'
        >
          <Laptop2 className='w-5 h-5' />
          <span className='hidden sm:inline'>Desktop</span>
        </Button>
        <Button
          variant={view === "mobile" ? "default" : "outline"}
          onClick={() => setView("mobile")}
          className='flex items-center gap-2'
        >
          <Smartphone className='w-5 h-5' />
          <span className='hidden sm:inline'>Mobile</span>
        </Button>
      </div>

      {/* Action Buttons */}
      <div className='flex items-center gap-4'>
        <Button variant='outline' className='hover:bg-gray-100'>
          Preview
        </Button>
        <Button className='bg-orange-400 text-white hover:bg-orange-700'>
          Publish
        </Button>
      </div>
    </nav>
  );
};

export default EditorNavBar;
