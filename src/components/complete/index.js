import React from 'react'
import { Space_Grotesk } from "next/font/google";
const grotesk = Space_Grotesk({ subsets: ["latin"] });
function Form() {

  return (
    <main
    className={`flex flex-col h-screen w-screen ${grotesk.className} overflow-hidden lg:flex-row`}
  >
    <div
      className={
        "flex flex-col h-[40%] bg-cover bg-main-desktop bg-no-repeat lg:w-1/3 lg:h-full"
      }
    >
      
      
      <footer className="flex relative bottom-0 justify-center text-xs mb-4 mt-48 lg:absolute lg:mt-0">
        <div>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Emre Kalfa</a>.
        </div>
      </footer>
    </div>
  </main>
  )
}

export default Form