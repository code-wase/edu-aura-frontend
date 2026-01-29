import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white/80">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Edu Aura Institute
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Edu Aura Institute is committed to delivering quality education
              with modern infrastructure, expert faculty, and industry-oriented
              programs.
            </p>

            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-secondary transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {['/', '/about', '/courses', '/faculty', '/admissions', '/contact'].map(
                (p, i) => (
                  <li key={p}>
                    <Link
                      to={p}
                      className="hover:text-white transition"
                    >
                      {[
                        'Home',
                        'About Us',
                        'Courses',
                        'Faculty',
                        'Admissions',
                        'Contact Us',
                      ][i]}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Our Programs
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>BCA</li>
              <li>BBA</li>
              <li>B.Com</li>
              <li>MCA</li>
              <li>MBA</li>
              <li>Skill Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin size={16} className="text-secondary" />
                Maharashtra, India
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="text-secondary" />
                +91 88307 72432
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="text-secondary" />
                principal@ssbesitm.org
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Edu Aura Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
