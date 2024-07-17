import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = NaN;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/l2k.png" width="80" height="80" alt="L2K" />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share something</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
