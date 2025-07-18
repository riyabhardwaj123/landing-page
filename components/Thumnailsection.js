"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Thumnailsection() {
  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6">
        Our Accreditation, Approvals & Recognitions
      </h2>

      <Marquee radient={true} speed={40}>
        <div className="flex gap-8 items-center">
          <Image src="/img1.webp" alt="Logo 1" width={100} height={100} />
          <Image src="/img2.webp" alt="Logo 2" width={100} height={100} />
          <Image src="/img3.webp" alt="Logo 3" width={100} height={100} />
          <Image src="/img4.webp" alt="Logo 4" width={100} height={100} />
          <Image src="/nwac.webp" alt="Logo 4" width={100} height={100} />
          <Image src="/unesco-cid.webp" alt="Logo 4" width={100} height={100} />
          <Image src="/sacs.webp" alt="Logo 4" width={100} height={100} />
          <Image src="/img1.webp" alt="Logo 1" width={100} height={100} />
          <Image src="/img2.webp" alt="Logo 2" width={100} height={100} />
          <Image src="/img3.webp" alt="Logo 3" width={100} height={100} />
          <Image src="/img4.webp" alt="Logo 4" width={100} height={100} />
          <Image src="/nwac.webp" alt="Logo 4" width={100} height={100} />
          <Image src="/unesco-cid.webp" alt="Logo 4" width={100} height={100} />
          <Image src="/sacs.webp" alt="Logo 4" width={100} height={100} />
        </div>
      </Marquee>
    </section>
  );
}
