"use client"
import Link from "next/link";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Menu() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-6">
                <Sidebar />
                <Content />
            </div>
            <div className="mt-8 flex-center">
                <Link className="mx-auto btn-outline" href="/reservation">Book a Reservation</Link>
            </div>
        </>
    )
}
