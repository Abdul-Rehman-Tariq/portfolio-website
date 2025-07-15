"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline as IoCopyOutLine } from "react-icons/io5";
// ✅ The grid container
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// ✅ The grid item
export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied,setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('abdulrehmantariq.52.art93@gmail.com');
    setCopied(true);
  }


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ",
        className
      )}
      style={{
        
background: "  linear-gradient(80deg,rgba(62, 43, 99, 1) 0%, rgba(36, 5, 36, 1) 31%)",
      }}
    >
        <div className={`${id===6 && `flex justify-center`} h-full`}> 
            <div className="w-full h-full absolute">
                {img && (<img 
                    src={img}
                    alt={img}
                    className={cn(imgClassName,'object-cover object-center')}/>)}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 ? 'w-full opacity-80' : ''}`}>
                {spareImg && (
                    <img
                        src={spareImg}
                        alt={spareImg}
                        className={`w-full h-full object-cover object-center`}
                    />
                )}
            </div>

             {id === 6 &&(
              <BackgroundGradientAnimation>
                {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold">

                </div> */}
              </BackgroundGradientAnimation>
                
             )}

             <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
             )}>
              <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
                {description}
              </div>
              <div className="font-sans text-lg font-bold lg:text-3xl max-w-96 z-10">
          {title}
        </div>
       

             
       {id === 2 && <GlobeDemo />}

      {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 ">
                  {['SQL','Next.Js','TypeScript'].map((item) => (
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]" >
                      {item}
                    </span>
                  )) }
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#131316]" ></span>
                </div>
               
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 ">
                   <span className="lg:py-4 lg:px-3 py-4 px-3 
                   rounded-lg text-center bg-[#131316]" ></span>
                  {['Node.Js','React.Js','JavaScript'].map((item) => (
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]" >
                      {item}
                    </span>
                  )) }

                  
                  
                </div>
                
              </div>
            )}
            {id === 6 && (
                    <div className="mt-5 relative">
                      <div className={`absolute -bottom-5 right-0`}>
                        <Lottie options={{
                          loop:copied,
                          autoplay: copied,
                          animationData,
                          rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                          },
                        }} />
                      </div>
                      <MagicButton 
                      title={copied ? 'Email Copied': 'Copy my Email'}
                      icon={<IoCopyOutLine />}
                      position="left"
                      otherClasses="`bg-[#161a31]"
                      handleClick={handleCopy}
                      />
                    </div>
                  )}
        </div>
      
    </div>
     </div>
       
     
    
  );
};