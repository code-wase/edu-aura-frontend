import { CheckCircle, XCircle, Star, FileText, Briefcase, Key, Trophy, GraduationCap, Code, Smartphone, Rocket, ExternalLink, AlertTriangle, Layers, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ResumeBuilder = () => {
  const doThisRight = [
    { icon: Star, text: "Use simple, clean templates (ATS can't read fancy graphics)" },
    { icon: FileText, text: "Include keywords from job description (Be a keyword ninja)" },
    { icon: Trophy, text: "Focus on achievements, not responsibilities (Numbers speak louder!)" },
    { icon: Briefcase, text: "Keep it concise and relevant (No one wants your life story)" }
  ];

  const avoidTheseTraps = [
    { icon: XCircle, text: "Don't use tables or columns (ATS sees them as alien hieroglyphics)" },
    { icon: AlertTriangle, text: "Never lie about skills (You don't want to explain blockchain in interview)" },
    { icon: XCircle, text: "Avoid \"References available\" (They'll ask if they want)" },
    { icon: AlertTriangle, text: "Skip the profile photo (Unless you're applying to be a model)" },
    { icon: XCircle, text: "Leave out hobbies (Unless your hobby is \"being awesome at work\")" }
  ];

  const resumeFormats = [
    {
      icon: Layers,
      title: "Chronological",
      description: "Best for traditional industries. Show your steady career growth",
      bestFor: "Experienced professionals",
      colorClass: "text-cyan-400"
    },
    {
      icon: Key,
      title: "Functional",
      description: "Focus on skills over experience. Fresher's secret weapon",
      bestFor: "Career changers & freshers",
      colorClass: "text-emerald-400"
    },
    {
      icon: Zap,
      title: "Combination",
      description: "Mix of both worlds. Show skills AND progression",
      bestFor: "Most modern industries",
      colorClass: "text-amber-400"
    }
  ];

  const freeResumeBuilders = [
    { name: "Canva", description: "Beautiful templates", url: "https://www.canva.com/", gradientClass: "from-cyan-500 to-blue-500" },
    { name: "Novoresume", description: "ATS-friendly", url: "https://novoresume.com/", gradientClass: "from-purple-500 to-pink-500" },
    { name: "Google Docs", description: "Simple & clean", url: "https://docs.google.com/", gradientClass: "from-green-500 to-emerald-500" },
    { name: "Zety", description: "Guided builder", url: "https://zety.com/", gradientClass: "from-orange-500 to-red-500" }
  ];

  const resumeAnatomy = [
    { icon: Smartphone, title: "Contact Info", description: "Pro Email Only! (No 'cool_dude69@...)", colorClass: "text-cyan-400" },
    { icon: GraduationCap, title: "Education", description: "GPA 3.5+? Show it off!", colorClass: "text-emerald-400" },
    { icon: Code, title: "Skills", description: "Max 10 relevant skills", colorClass: "text-purple-400" },
    { icon: Rocket, title: "Projects", description: "3-5 STAR method projects", colorClass: "text-pink-400" },
    { icon: Trophy, title: "Achievements", description: "Hackathons? Yes!", colorClass: "text-amber-400" }
  ];

  const exampleResumes = [
    {
      title: "Software Developer Fresher Resume",
      description: "A sample resume for fresh graduates aiming for software developer positions, highlighting academic projects and technical skills.",
      url: "https://www.naukri.com/career-advice/information-technology-it-resume-sample-ffid"
    },
    {
      title: "IT Fresher Resume Sample",
      description: "Guidance on creating an IT fresher resume with examples of abilities, profile summary, achievements, and education.",
      url: "https://www.naukri.com/career-advice/it-fresher-resume-sample-ffid"
    },
    {
      title: "Software Engineer Resume Sample",
      description: "A comprehensive guide with multiple software engineer resume examples to help you land your desired job.",
      url: "https://www.naukri.com/career-advice/software-engineer-resume-sample-ffid"
    },
    {
      title: "Experienced Developer Resume Thread",
      description: "A community-driven thread where experienced developers share their anonymized resumes for reference and inspiration.",
      url: "https://www.reddit.com/r/cscareerquestions/"
    }
  ];

  const badResumeExample = `EDUCATION:
B.Tech CSE - XYZ College (2020-2024)
- Was class representative

SKILLS:
- MS Office
- "Good communicator"
- Internet

HOBBIES:
- Watching movies
- Hanging with friends

REFERENCES:
Available on request`;

  const goodResumeExample = `EDUCATION:
B.Tech Computer Science - XYZ College | 2020-2024
- GPA: 3.8/4.0
- Coursework: Data Structures, Cloud Computing

SKILLS:
- React, Node.js, Python
- AWS EC2, Docker
- Jest, Postman

PROJECTS:
E-Commerce Dashboard (React, Node)
- Built admin panel with 15+ CRUD operations
- Reduced API response time by 40% using caching

ACHIEVEMENTS:
- 1st Prize: CodeStorm Hackathon 2023
- Published paper on AI in IEEE Journal`;

  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Craft Your ATS-Killer Resume
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From Zero to Hero: Fresher Edition
            </p>
          </div>
        </section>

        {/* Do This Right & Avoid These Traps */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Do This Right */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-7 h-7 text-emerald-400" />
                  <h2 className="text-xl font-bold text-foreground">Do This Right</h2>
                </div>
                <ul className="space-y-4">
                  {doThisRight.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Avoid These Traps */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-destructive/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-7 h-7 text-destructive" />
                  <h2 className="text-xl font-bold text-foreground">Avoid These Traps</h2>
                </div>
                <ul className="space-y-4">
                  {avoidTheseTraps.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Winning Resume Formats */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
              Winning Resume Formats
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resumeFormats.map((format, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <format.icon className={`w-6 h-6 ${format.colorClass}`} />
                      <h3 className="text-lg font-semibold text-foreground">{format.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{format.description}</p>
                    <div className="flex items-center gap-2 text-amber-400 text-sm">
                      <Trophy className="w-4 h-4" />
                      <span>Best for: {format.bestFor}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Free Resume Builders */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
              Free Resume Builders
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {freeResumeBuilders.map((builder, index) => (
                <a
                  key={index}
                  href={builder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] h-full">
                    <CardContent className="p-5 text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${builder.gradientClass} flex items-center justify-center`}>
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{builder.name}</h3>
                      <p className="text-xs text-muted-foreground">{builder.description}</p>
                      <ExternalLink className="w-4 h-4 mx-auto mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Fresher's Cheat Sheet */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
              🎓 Fresher's Cheat Sheet
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* What to Include */}
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-6">What to Include</h3>
                <div className="space-y-6">
                  <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-2">📁 Projects That Wow:</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      That e-commerce app you built? Show it off! Even if it's just 42 lines of code
                    </p>
                    <div className="bg-muted/50 rounded-lg p-3 font-mono text-xs">
                      <div className="text-destructive">{"// Bad: \"Made a website\""}</div>
                      <div className="text-emerald-400">{"// Good: \"Built React inventory system with 95% test coverage\""}</div>
                    </div>
                  </div>
                  <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-2">💻 Skills That Matter:</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      List actual skills, not "MS Office" (Everyone knows Ctrl+C/V 😉)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">React Hooks</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Python Flask</span>
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs">CI/CD Pipelines</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Avoid */}
              <div>
                <h3 className="text-xl font-bold text-destructive mb-6">What to Avoid</h3>
                <div className="space-y-6">
                  <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-2">🚫 No Hobbies Zone:</h4>
                    <p className="text-muted-foreground text-sm">
                      Unless you're applying to Nintendo, they don't care about your Mario Kart skills 🎮
                    </p>
                  </div>
                  <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-2">📸 Skip the Selfies:</h4>
                    <p className="text-muted-foreground text-sm">
                      Your face belongs on LinkedIn, not here 📸➡️🌐
                    </p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-200 text-sm">
                        <strong>Pro Tip:</strong> That 2MB photo makes your resume heavy. HR hates that!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Anatomy */}
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              📝 Resume Anatomy (Fresher Edition)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {resumeAnatomy.map((item, index) => (
                <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.colorClass}`} />
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Good vs Bad Examples */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
              🆚 Good vs Bad Examples
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Bad Example */}
              <Card className="bg-card/80 backdrop-blur-sm border-destructive/30 hover:border-destructive/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-6 h-6 text-destructive" />
                    <h3 className="text-lg font-bold text-destructive">❌ Disaster Resume</h3>
                  </div>
                  <pre className="bg-muted/50 rounded-lg p-4 text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap font-mono">
                    {badResumeExample}
                  </pre>
                  <p className="mt-4 text-sm text-destructive">
                    <strong>Why bad?</strong> Vague skills, irrelevant hobbies, no projects!
                  </p>
                </CardContent>
              </Card>

              {/* Good Example */}
              <Card className="bg-card/80 backdrop-blur-sm border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-lg font-bold text-emerald-400">✅ Winning Resume</h3>
                  </div>
                  <pre className="bg-muted/50 rounded-lg p-4 text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap font-mono">
                    {goodResumeExample}
                  </pre>
                  <p className="mt-4 text-sm text-emerald-400">
                    <strong>Why good?</strong> Specifics, numbers, relevant tech!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Example Resumes */}
        <section className="py-12 px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
              Example Resumes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {exampleResumes.map((example, index) => (
                <a
                  key={index}
                  href={example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.01] h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {example.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {example.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Example</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeBuilder;
