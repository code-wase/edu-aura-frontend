import { 
  Server, 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  Database, 
  Blocks, 
  Container, 
  FileCode, 
  Layers, 
  Terminal,
  Cpu,
  Gamepad2,
  Radio,
  Globe,
  Smartphone,
  Cog,
  Lock,
  Activity
} from 'lucide-react';

const careers = [
  { name: 'DevOps Engineer', category: 'Infrastructure', icon: Server, color: 'from-blue-500 to-cyan-400' },
  { name: 'Full Stack Developer', category: 'Development', icon: Code, color: 'from-green-500 to-emerald-400' },
  { name: 'Cloud Architect', category: 'Cloud', icon: Cloud, color: 'from-purple-500 to-pink-400' },
  { name: 'AI Engineer', category: 'AI/ML', icon: Brain, color: 'from-orange-500 to-amber-400' },
  { name: 'Cybersecurity Specialist', category: 'Security', icon: Shield, color: 'from-red-500 to-rose-400' },
  { name: 'Data Engineer', category: 'Data', icon: Database, color: 'from-indigo-500 to-violet-400' },
  { name: 'MLOps Engineer', category: 'AI/ML', icon: Cog, color: 'from-teal-500 to-cyan-400' },
  { name: 'Blockchain Developer', category: 'Web3', icon: Blocks, color: 'from-yellow-500 to-orange-400' },
  { name: 'Kubernetes Administrator', category: 'Cloud', icon: Container, color: 'from-blue-600 to-indigo-400' },
  { name: 'Python Developer', category: 'Development', icon: FileCode, color: 'from-green-600 to-teal-400' },
  { name: 'React Specialist', category: 'Frontend', icon: Layers, color: 'from-cyan-500 to-blue-400' },
  { name: 'Node.js Developer', category: 'Backend', icon: Terminal, color: 'from-lime-500 to-green-400' },
  { name: 'AWS Solutions Architect', category: 'Cloud', icon: Cloud, color: 'from-orange-600 to-yellow-400' },
  { name: 'TensorFlow Expert', category: 'AI/ML', icon: Brain, color: 'from-purple-600 to-pink-400' },
  { name: 'Data Scientist', category: 'Data', icon: Database, color: 'from-blue-500 to-purple-400' },
  { name: 'Game Developer', category: 'Gaming', icon: Gamepad2, color: 'from-pink-500 to-rose-400' },
  { name: 'IoT Developer', category: 'Hardware', icon: Radio, color: 'from-emerald-500 to-teal-400' },
  { name: 'WordPress Developer', category: 'CMS', icon: Globe, color: 'from-blue-400 to-indigo-400' },
  { name: 'Salesforce Developer', category: 'CRM', icon: Cpu, color: 'from-cyan-600 to-blue-400' },
  { name: 'QA Automation Engineer', category: 'Testing', icon: Activity, color: 'from-violet-500 to-purple-400' },
  { name: 'React Native Developer', category: 'Mobile', icon: Smartphone, color: 'from-blue-500 to-cyan-400' },
  { name: 'Rust Developer', category: 'Systems', icon: Cog, color: 'from-orange-500 to-red-400' },
  { name: 'Go Developer', category: 'Backend', icon: Terminal, color: 'from-cyan-500 to-teal-400' },
  { name: 'DevSecOps Engineer', category: 'Security', icon: Lock, color: 'from-red-600 to-orange-400' },
  { name: 'Site Reliability Engineer', category: 'Infrastructure', icon: Server, color: 'from-indigo-500 to-blue-400' },
];

const CourseMarquee: React.FC = () => {
  // Split careers into 5 rows
  const row1 = careers.slice(0, 5);
  const row2 = careers.slice(5, 10);
  const row3 = careers.slice(10, 15);
  const row4 = careers.slice(15, 20);
  const row5 = careers.slice(20, 25);

  return (
    <div className="relative w-full py-4 overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Row 1 - Scrolling Left */}
      <div className="flex mb-3 animate-marquee-row-1">
        {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((career, index) => (
          <CareerCard key={`row1-${index}`} career={career} />
        ))}
      </div>

      {/* Row 2 - Scrolling Right */}
      <div className="flex mb-3 animate-marquee-row-2">
        {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((career, index) => (
          <CareerCard key={`row2-${index}`} career={career} />
        ))}
      </div>

      {/* Row 3 - Scrolling Left (faster) */}
      <div className="flex mb-3 animate-marquee-row-3">
        {[...row3, ...row3, ...row3, ...row3, ...row3, ...row3].map((career, index) => (
          <CareerCard key={`row3-${index}`} career={career} />
        ))}
      </div>

      {/* Row 4 - Scrolling Right (faster) */}
      <div className="flex mb-3 animate-marquee-row-4">
        {[...row4, ...row4, ...row4, ...row4, ...row4, ...row4].map((career, index) => (
          <CareerCard key={`row4-${index}`} career={career} />
        ))}
      </div>

      {/* Row 5 - Scrolling Left */}
      <div className="flex animate-marquee-row-5">
        {[...row5, ...row5, ...row5, ...row5, ...row5, ...row5].map((career, index) => (
          <CareerCard key={`row5-${index}`} career={career} />
        ))}
      </div>
    </div>
  );
};

interface CareerCardProps {
  career: {
    name: string;
    category: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  };
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const IconComponent = career.icon;
  
  return (
    <div className="flex-shrink-0 mx-1.5">
      <div className="group relative px-3 py-2.5 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer min-w-[180px] md:min-w-[200px]">
        {/* Glow Effect on Hover */}
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${career.color} opacity-0 group-hover:opacity-10 transition-opacity blur-sm`} />
        
        <div className="relative flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${career.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
            <IconComponent className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-foreground whitespace-nowrap">{career.name}</span>
            <span className="text-[10px] text-muted-foreground">{career.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMarquee;