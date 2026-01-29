import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Target,
  Calendar,
  Bell,
  ClipboardList,
  LucideIcon,
} from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

/* ---------- CAROUSEL IMAGES ---------- */
import itm1 from '../Assets/images/itm1.jpg';
import itm2 from '../Assets/images/itm2.jpg';
import itm3 from '../Assets/images/itm3.jpg';
import itm4 from '../Assets/images/itm4.jpg';
import itm5 from '../Assets/images/itm5.jpg';
import itm6 from '../Assets/images/itm6.jpg';
import itm7 from '../Assets/images/itm7.jpg';

/* ---------- TYPES ---------- */

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface CarouselItem {
  image: string;
}

interface NoticeItem {
  id: number;
  title: string;
  date: string;
  program: string;
  icon: LucideIcon;
}

const Home: React.FC = () => {
  /* ---------- DATA ---------- */

  const features: FeatureItem[] = [
    {
      title: 'Quality Education',
      description: 'World-class curriculum.',
      icon: BookOpen,
    },
    {
      title: 'Expert Faculty',
      description: 'Industry professionals.',
      icon: Users,
    },
    {
      title: 'Modern Facilities',
      description: 'Smart campus & labs.',
      icon: Target,
    },
    {
      title: 'Career Support',
      description: 'Placement guidance.',
      icon: Award,
    },
  ];

  const carouselItems: CarouselItem[] = [
    { image: itm1 },
    { image: itm2 },
    { image: itm3 },
    { image: itm4 },
    { image: itm5 },
    { image: itm6 },
    { image: itm7 },
  ];

  const notices: NoticeItem[] = [
    {
      id: 1,
      title: 'BCA Mid-Term Exams',
      date: 'May 25, 2025',
      program: 'BCA',
      icon: ClipboardList,
    },
    {
      id: 2,
      title: 'BBA Industry Visit',
      date: 'June 5, 2025',
      program: 'BBA',
      icon: Calendar,
    },
    {
      id: 3,
      title: 'MCA Project Deadline',
      date: 'June 15, 2025',
      program: 'MCA',
      icon: Bell,
    },
  ];

  /* ---------- AUTO SCROLL NOTICE BOARD ---------- */

  const AutoScrollNoticeBoard: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      let pos = 0;
      const interval = window.setInterval(() => {
        pos += 1;
        if (pos >= el.scrollHeight - el.clientHeight) {
          pos = 0;
        }
        el.scrollTop = pos;
      }, 80);

      return () => window.clearInterval(interval);
    }, []);

    return (
      <div className="h-72 sm:h-80 md:h-96 overflow-hidden rounded-xl border bg-card">
        <div ref={ref}>
          {notices.map((n) => (
            <div key={n.id} className="border-b p-4 last:border-none">
              <div className="flex gap-3">
                <n.icon className="mt-1 text-primary" size={18} />
                <div>
                  <p className="text-sm sm:text-base font-medium">
                    {n.title}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {n.date} • {n.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  /* ---------- CAROUSEL SETTINGS ---------- */

  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* RIGHT FLOATING CONTACT ICONS */}
      <div className="fixed top-[35%] right-3 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/918830772432"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110"
          style={{ boxShadow: '0 0 10px rgba(37, 211, 102, 0.4)' }}
        >
          <img
            src="https://img.icons8.com/color/36/whatsapp--v1.png"
            alt="WhatsApp"
            className="h-9 w-9"
          />
        </a>

        <a
          href="mailto:principal@ssbesitm.org"
          className="rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110"
          style={{ boxShadow: '0 0 10px rgba(234, 67, 53, 0.4)' }}
        >
          <img
            src="https://img.icons8.com/color/36/gmail-new.png"
            alt="Gmail"
            className="h-9 w-9"
          />
        </a>

        <a
          href="tel:+918830772432"
          className="rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110"
          style={{ boxShadow: '0 0 10px rgba(0, 132, 255, 0.4)' }}
        >
          <img
            src="https://img.icons8.com/color/36/phone.png"
            alt="Phone"
            className="h-9 w-9"
          />
        </a>
      </div>

      {/* HERO / CAROUSEL */}
      <section className="pt-2 md:pt-4">
        <Slider {...carouselSettings}>
          {carouselItems.map((item, i) => (
            <div
              key={i}
              className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh]"
            >
              <img
                src={item.image}
                alt={`Slide ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </Slider>

        {/* ✅ BUTTONS BELOW CAROUSEL */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link to="/admissions" className="flex items-center gap-2">
              Apply Now <ArrowRight size={16} />
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link to="/courses">Explore Courses</Link>
          </Button>
        </div>
      </section>

      {/* NOTICE BOARD */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl md:text-2xl font-bold text-primary">
              Student Notice Board
            </h2>
            <AutoScrollNoticeBoard />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-card py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <f.icon className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {f.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
