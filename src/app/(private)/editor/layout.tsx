"use client";

import React from "react";
import EditorNavBar from "./_components/navbar";
import AddComponents from "./_components/add-component";
import CustomizeComponents from "./_components/customize-component";

type Props = {
  children: React.ReactNode;
};

const EditorLayout = ({ children }: Props) => {
  return (
    <div className='flex flex-col h-screen w-screen'>
      {/* Navbar Section */}
      <header className='fixed top-0 left-0 right-0 z-10 bg-white shadow-md w-full'>
        <div className='container'>
          <EditorNavBar />
        </div>
      </header>

      <main className='flex gap-4 h-screen w-screen mt-16 bg-gray-50 p-4'>
        <div className='w-[20%] rounded-lg bg-white shadow-md p-6'>
          <AddComponents />
        </div>
        <iframe className=' w-[60%] h-full rounded-lg bg-white shadow-md '>
          {children}
        </iframe>
        <div className='w-[20%] rounded-lg bg-white shadow-md p-6'>
          <CustomizeComponents />
        </div>
      </main>
    </div>
  );
};

export default EditorLayout;
