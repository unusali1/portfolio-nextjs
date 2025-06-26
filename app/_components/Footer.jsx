import Link from "next/link";
import { Icon } from "@iconify/react";

// Social media links with realistic URLs
const socialMediaLinks = [
  {
    href: "https://wa.me/+8801717609565",
    icon: "ic:baseline-whatsapp",
    background: "#00A884",
  },
  {
    href: "https://www.facebook.com/moham.mada.i.unusa.ali.2024",
    icon: "mingcute:facebook-line",
    background: "#166FE5",
  },
  {
    href: "https://github.com/unusali1",
    icon: "icon-park-outline:github",
    background: "#313131",
  },
  {
    href: "https://www.linkedin.com/in/unus/",
    icon: "et:linkedin",
    background: "#0a66c2",
  },
];

export default function Footer() {
  return (
    <footer className="text-gray-700 py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm md:text-base font-mulish dark:text-gray-100">
          © {new Date().getFullYear()} Md Unus Ali. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <ul className="flex gap-4 items-center">
          {socialMediaLinks.map((item,index) => (
            <li key={item.index}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-pink-500 transition-colors duration-300 dark:text-gray-100"
                aria-label={`Visit our ${item.name} page`}
              >
                <Icon icon={item.icon} className="w-7 h-7" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}