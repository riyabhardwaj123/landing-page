"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Header({ onMenuToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDropdown = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    onMenuToggle(newState);
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-12 py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
              <ul className="p-2">
                <li>
                  <a>Our Vision</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Govt. Approvals</a>
              <ul className="p-2">
                <li>
                  <a>CBSE</a>
                </li>
                <li>
                  <a>State Boards</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Programs</a>
              <ul className="p-2">
                <li>
                  <a>Primary</a>
                </li>
                <li>
                  <a>Secondary</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Services</a>
              <ul className="p-2">
                <li>
                  <a>Consulting</a>
                </li>
                <li>
                  <a>Training</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Downloads</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Image
            src="/headerlogo.png"
            alt="SERI Logo"
            width={120}
            height={40}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[17px] font-medium">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>About Us</summary>

              <ul className="p-2 bg-base-100 rounded-box">
                <li>
                  <a>Our Vision</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Govt. Approvals</summary>
              <ul className="p-2 bg-base-100 rounded-box">
                <li>
                  <a>CBSE</a>
                </li>
                <li>
                  <a>State Boards</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Programs</summary>
              <ul className="p-2 bg-base-100 rounded-box">
                <li>
                  <a>Primary</a>
                </li>
                <li>
                  <a>Secondary</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2 bg-base-100 rounded-box">
                <li>
                  <a>Consulting</a>
                </li>
                <li>
                  <a>Training</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Downloads</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#623F95] text-white rounded-full px-6 hover:bg-purple-800">
          Contact Us
        </a>
      </div>
    </div>
  );
}
