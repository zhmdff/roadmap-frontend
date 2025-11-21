import "../ui/header.css";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import wekil from "../public/logo.png";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src="logo.png" alt="Logo"/>
                </div>
                <nav>
                    <Link href="/">Ana səhifə</Link>
                    <Link href="/about">Haqqımızda</Link>
                </nav>
                <div className="login">
                    <a href="/login">
                        <FaRegUser />
                    </a>
                </div>
            </div>
        </>
    )
}