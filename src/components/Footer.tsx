import React from "react";
import { Link } from "react-router-dom";
import {
  GithubIcon,
  MailIcon,
  TwitterIcon,
  GlobeIcon,
  HeartIcon,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Footer navigation links
  const quickLinks = [
    { name: "홈", path: "/" },
    { name: "서버 체크", path: "/ping" },
    { name: "냥냥식당타이쿤", path: "/nyangnyang" },
    { name: "BlastLoop", path: "/blastloop" },
    { name: "미니게임", path: "/minigames" },
    { name: "뉴스", path: "/news" },
  ];

  const legalLinks: any[] = [
    //{ name: "Privacy Policy", path: "/privacy" },
    //{ name: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: GithubIcon, url: "https://github.com/dorajhhub" },
  ];

  return (
    <footer className="w-full py-12 mt-auto border-t bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-800/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 text-xl shadow-lg rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                🎮
              </div>
              <h3 className="text-xl font-black tracking-tighter text-slate-800 dark:text-white">
                MinDevX
              </h3>
            </div>
            <p className="max-w-xs mb-4 text-sm text-slate-600 dark:text-slate-400">
              혁신적인 아이디어로 새로운 가치를 만들어갑니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 transition-colors duration-300 rounded-full hover:bg-slate-200 hover:text-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="block px-2 py-1 text-sm text-slate-600 transition-colors duration-300 rounded hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="block px-2 py-1 text-sm text-slate-600 transition-colors duration-300 rounded hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-200/50 dark:border-slate-800/50 md:flex-row">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} MinDevX. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            Made with{" "}
            <HeartIcon className="w-4 h-4 text-red-500 fill-current" /> by
            MinDevX
          </div>

          <div className="flex items-center space-x-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="px-2 py-1 text-sm text-slate-500 transition-colors duration-300 rounded hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
