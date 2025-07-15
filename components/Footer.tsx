import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
    return(
        <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact" >
            <div className="flex flex-col items-center ">
                <h1 className="heading lg:max-w-[45vw]">Ready to take <span className="text-violet-100">your</span> digital presence to the next level?</h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how i can help you achieve your goals. </p>
                <a href="mailto:abdulrehmantariq.52.art93@gmail.com?subject=Let%27s%20Talk&body=Hi%20Abdul%2C%0A%0AI%20wanted%20to%20get%20in%20touch%20about...">
  <MagicButton 
    title="Let's get in Touch"
    icon={<FaLocationArrow />} 
    position="right"
  />
</a>

            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
  <p className="md:text-base text-sm md:font-normal font-light">
    CopyRight © 2025 Abdul Rehman
  </p>
  <div className="flex items-center md:gap-3 gap-6">
    {socialMedia.map((profile) => (
      <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounder-lg border border-black-300 ">
         <a
      key={profile.id}
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={profile.img} alt={`social-${profile.id}`} width={20} height={20} />
    </a>
      </div>
    ))}
  </div>
</div>

            
        </footer>
    )
}

export default Footer;