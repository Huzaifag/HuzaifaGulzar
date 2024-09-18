import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaFacebook />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
];

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
