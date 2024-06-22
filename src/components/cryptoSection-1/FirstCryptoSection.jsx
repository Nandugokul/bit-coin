import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./FirstCryptoSection.css";

function FirstCryptoSection() {
  return (
    <div className="px-32 mt-40">
      <div className="flex flex-col items-center text-center">
        <h4 className="secondaryHeading mb-8">
          Most Trusted Cryptocurrency Platform
        </h4>
        <p className="w-1/2">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
          arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus.
        </p>
      </div>
      <div className="mt-14 flex w-full items-center justify-between ">
        <div className="imageWrapper imgWrapper1 relative">
          <div className="heading1 sectionHeadings absolute bottom-10">
            <h4 className="secondaryHeading">Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="imageWrapper imgWrapper2 relative">
          <div className="heading2 sectionHeadings absolute bottom-10">
            <h4 className="secondaryHeading">Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="imageWrapper imgWrapper3 relative">
          <div className="heading3 sectionHeadings absolute bottom-10">
            <h4 className="secondaryHeading">Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCryptoSection;
