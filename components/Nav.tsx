import Link from "next/link";
import Image from "next/image";

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <Image
                                src="/icons/home-static.png"
                                alt="Home icon"
                                width={50}
                                height={50}
                            />
              Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a>
                            <Image
                                src="/icons/projects-static.png"
                                alt="Projects icon"
                                width={50}
                                height={50}
                            />
                Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cv">
                        <a>
                            <Image
                                src="/icons/cv-static.png"
                                alt="CV icon"
                                width={50}
                                height={50}
                            />
                CV</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>
                            <Image
                                src="/icons/contact-static.png"
                                alt="Contact icon"
                                width={50}
                                height={50}
                            />
                Contact</a>
                    </Link>
                </li >
            </ul >
        </nav>
    )
}

export default Nav;