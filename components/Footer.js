import Image from "next/image";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-900 text-white py-10 px-4 text-center space-y-4">
        <div className="flex flex-col  items-center space-y-2">
          <Image src="/serilogo.png" alt="SERI Logo" width={100} height={40} />
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter.png"
              alt="Twitter"
              width={20}
              height={20}
              className="hover:opacity-70 transition duration-200"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:opacity-70 transition duration-200"
            />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-light">
          <p>Programs</p>
          <p>|</p>
          <p>Credit System for AHSP</p>
          <p>|</p>
          <p>Eligibility for Supplementary</p>
          <p>|</p>
          <p>Re-checking & Re-evaluation</p>
          <p>|</p>
          <p>Downloads</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-light">
          <p>Grading System</p>
          <p>|</p>
          <p>Pass Criteria</p>
          <p>|</p>
          <p>Press Release</p>
          <p>|</p>
          <p>Fee Refund Policy</p>
          <p>|</p>ty6
          <p>Contact Us</p>
        </div>
      </div>
      <div className="bg-black text-white py-3 flex items-center justify-center gap-1 text-sm text-gray-400. gap-y-0.5">
        Copyright <Copyright /> 2020 | All Rights Reserved : SERI
      </div>
    </footer>
  );
}
