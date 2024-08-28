"use client";

import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function Welcome() {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center" id="welcome">
      <h1 className="text-6xl font-bold animate-fade-in">
        {"Hello, I'm Fernando."}
      </h1>
      <ChevronDownIcon
        className="chevron-icon absolute bottom-10 w-14 h-14 cursor-pointer opacity-0 animate-bounce-delayed"
        style={{
          animationDelay: '2000ms',
        }}
        onClick={scrollToContent}
      />
    </section>
  );
}
