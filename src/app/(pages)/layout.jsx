"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init(); // initialize aos on component mount
  }, []);
  return (
    <main id="main">{children}</main>
  )
}
