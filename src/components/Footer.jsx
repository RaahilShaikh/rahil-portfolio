import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { siteInfo } from "../data/siteInfo";

const socialLinks = [
  { key: "linkedin", icon: FaLinkedinIn, label: "LinkedIn" },
  { key: "github", icon: FaGithub, label: "GitHub" },
  { key: "upwork", icon: SiUpwork, label: "Upwork" },
  { key: "fiverr", icon: SiFiverr, label: "Fiverr" },
  { key: "instagram", icon: FaInstagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-text-dim text-sm">
          © {new Date().getFullYear()} {siteInfo.name}. Built with React &
          Tailwind.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ key, icon: Icon, label }) => {
            const url = siteInfo.social[key];
            if (!url) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-muted hover:text-accent transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
