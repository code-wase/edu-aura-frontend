import { useState } from 'react';
import { FileText, Download, Star, Users, Briefcase, GraduationCap, Code, Palette, ChevronRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ResumeTemplate {
  id: string;
  name: string;
  category: 'fresher' | 'intermediate' | 'advanced' | 'creative';
  description: string;
  bestFor: string[];
  features: string[];
  previewColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const templates: ResumeTemplate[] = [
  {
    id: 'clean-starter',
    name: 'Clean Starter',
    category: 'fresher',
    description: 'Perfect for freshers with minimal experience. Clean layout that highlights education and skills.',
    bestFor: ['Fresh Graduates', 'Internship Seekers', 'Entry-Level Jobs'],
    features: ['Education-focused', 'Skills section', 'Projects highlight', 'Clean typography'],
    previewColor: 'from-blue-500 to-cyan-500',
    icon: GraduationCap
  },
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    category: 'fresher',
    description: 'Minimalist design that lets your content shine. Great for tech freshers.',
    bestFor: ['Tech Freshers', 'IT Graduates', 'Data Science Beginners'],
    features: ['Minimalist design', 'Tech-friendly', 'GitHub/Portfolio links', 'ATS-friendly'],
    previewColor: 'from-slate-600 to-slate-800',
    icon: Code
  },
  {
    id: 'professional-classic',
    name: 'Professional Classic',
    category: 'intermediate',
    description: 'Traditional professional layout perfect for 1-3 years of experience.',
    bestFor: ['Mid-level Professionals', 'Corporate Jobs', 'Business Roles'],
    features: ['Experience-focused', 'Achievement highlights', 'Professional summary', 'References section'],
    previewColor: 'from-emerald-500 to-teal-600',
    icon: Briefcase
  },
  {
    id: 'tech-pro',
    name: 'Tech Pro',
    category: 'intermediate',
    description: 'Designed for developers and IT professionals with 2-4 years experience.',
    bestFor: ['Software Developers', 'DevOps Engineers', 'Full Stack Developers'],
    features: ['Technical skills grid', 'Project portfolio', 'Certifications', 'GitHub integration'],
    previewColor: 'from-purple-500 to-pink-500',
    icon: Code
  },
  {
    id: 'executive-elite',
    name: 'Executive Elite',
    category: 'advanced',
    description: 'Premium template for senior professionals and executives with 5+ years experience.',
    bestFor: ['Senior Managers', 'Directors', 'C-Level Executives'],
    features: ['Leadership highlights', 'KPI achievements', 'Board positions', 'Publications'],
    previewColor: 'from-amber-500 to-orange-600',
    icon: Star
  },
  {
    id: 'senior-tech-lead',
    name: 'Senior Tech Lead',
    category: 'advanced',
    description: 'For tech leaders, architects, and senior engineers with extensive experience.',
    bestFor: ['Tech Leads', 'Solution Architects', 'Engineering Managers'],
    features: ['Architecture experience', 'Team leadership', 'Tech stack mastery', 'Open source contributions'],
    previewColor: 'from-indigo-500 to-violet-600',
    icon: Users
  },
  {
    id: 'creative-designer',
    name: 'Creative Portfolio',
    category: 'creative',
    description: 'Eye-catching design for creative professionals and designers.',
    bestFor: ['UI/UX Designers', 'Graphic Designers', 'Creative Directors'],
    features: ['Visual portfolio', 'Color customization', 'Creative layout', 'Brand identity'],
    previewColor: 'from-pink-500 to-rose-500',
    icon: Palette
  },
  {
    id: 'academic-scholar',
    name: 'Academic Scholar',
    category: 'advanced',
    description: 'Perfect for academics, researchers, and PhD candidates.',
    bestFor: ['Researchers', 'Professors', 'PhD Candidates'],
    features: ['Publications list', 'Research experience', 'Grants & funding', 'Conference papers'],
    previewColor: 'from-teal-500 to-cyan-600',
    icon: GraduationCap
  }
];

const ResumeBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [step, setStep] = useState<'browse' | 'fill' | 'preview'>('browse');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    projects: '',
    certifications: ''
  });

  const stepsList = [
    { key: 'browse' as const, label: 'Choose Template', num: 1 },
    { key: 'fill' as const, label: 'Fill Details', num: 2 },
    { key: 'preview' as const, label: 'Download', num: 3 }
  ];

  const categories = [
    { id: 'all', name: 'All Templates', icon: FileText },
    { id: 'fresher', name: 'Fresher', icon: GraduationCap },
    { id: 'intermediate', name: 'Intermediate', icon: Briefcase },
    { id: 'advanced', name: 'Advanced', icon: Star },
    { id: 'creative', name: 'Creative', icon: Palette }
  ];

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  const handleSelectTemplate = (template: ResumeTemplate) => {
    setSelectedTemplate(template);
    setStep('fill');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatePDF = () => {
    // Create resume content
    const resumeContent = `
      <html>
        <head>
          <title>${formData.fullName} - Resume</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; padding: 40px; max-width: 800px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 20px; }
            .name { font-size: 32px; font-weight: bold; color: #1e40af; margin-bottom: 10px; }
            .contact { font-size: 14px; color: #666; }
            .contact span { margin: 0 10px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: bold; color: #1e40af; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 10px; text-transform: uppercase; }
            .content { font-size: 14px; white-space: pre-line; }
            .skills-list { display: flex; flex-wrap: wrap; gap: 8px; }
            .skill-tag { background: #e0e7ff; color: #3730a3; padding: 4px 12px; border-radius: 15px; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="name">${formData.fullName || 'Your Name'}</div>
            <div class="contact">
              <span>${formData.email || 'email@example.com'}</span> |
              <span>${formData.phone || '+91 XXXXX XXXXX'}</span> |
              <span>${formData.location || 'City, Country'}</span>
            </div>
            ${formData.linkedin || formData.portfolio ? `
              <div class="contact" style="margin-top: 5px;">
                ${formData.linkedin ? `<span>LinkedIn: ${formData.linkedin}</span>` : ''}
                ${formData.portfolio ? `<span>Portfolio: ${formData.portfolio}</span>` : ''}
              </div>
            ` : ''}
          </div>
          
          ${formData.summary ? `
            <div class="section">
              <div class="section-title">Professional Summary</div>
              <div class="content">${formData.summary}</div>
            </div>
          ` : ''}
          
          ${formData.experience ? `
            <div class="section">
              <div class="section-title">Work Experience</div>
              <div class="content">${formData.experience}</div>
            </div>
          ` : ''}
          
          ${formData.education ? `
            <div class="section">
              <div class="section-title">Education</div>
              <div class="content">${formData.education}</div>
            </div>
          ` : ''}
          
          ${formData.skills ? `
            <div class="section">
              <div class="section-title">Skills</div>
              <div class="content">${formData.skills}</div>
            </div>
          ` : ''}
          
          ${formData.projects ? `
            <div class="section">
              <div class="section-title">Projects</div>
              <div class="content">${formData.projects}</div>
            </div>
          ` : ''}
          
          ${formData.certifications ? `
            <div class="section">
              <div class="section-title">Certifications</div>
              <div class="content">${formData.certifications}</div>
            </div>
          ` : ''}
        </body>
      </html>
    `;

    // Open print dialog for PDF
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(resumeContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        
        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Smart Resume Builder</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Create Your Smart Resume
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Choose from professional templates designed for freshers to executives. 
              Build your resume in minutes and download in HD PDF format.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            {stepsList.map((s, i) => (
              <div key={s.key} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step === s.key 
                    ? 'bg-primary text-primary-foreground' 
                    : stepsList.findIndex(st => st.key === s.key) < stepsList.findIndex(st => st.key === step)
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                }`}>
                  {stepsList.findIndex(st => st.key === s.key) < stepsList.findIndex(st => st.key === step) ? <Check className="h-4 w-4" /> : s.num}
                </div>
                <span className={`text-sm font-medium hidden md:block ${step === s.key ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
                {i < 2 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {step === 'browse' && (
            <>
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-primary text-primary-foreground shadow-glow-sm'
                        : 'bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <cat.icon className="h-4 w-4" />
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Templates Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTemplates.map((template) => (
                  <Card 
                    key={template.id}
                    className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm overflow-hidden"
                    onClick={() => handleSelectTemplate(template)}
                  >
                    {/* Preview Header */}
                    <div className={`h-32 bg-gradient-to-br ${template.previewColor} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-4 bg-white/90 rounded-lg p-3">
                        <div className="h-2 w-20 bg-gray-300 rounded mb-2" />
                        <div className="h-1.5 w-32 bg-gray-200 rounded mb-1" />
                        <div className="h-1.5 w-24 bg-gray-200 rounded" />
                        <div className="mt-3 flex gap-2">
                          <div className="h-1 w-8 bg-gray-200 rounded" />
                          <div className="h-1 w-8 bg-gray-200 rounded" />
                          <div className="h-1 w-8 bg-gray-200 rounded" />
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white capitalize`}>
                          {template.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <template.icon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">{template.name}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">{template.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="mb-3">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Best for:</p>
                        <div className="flex flex-wrap gap-1">
                          {template.bestFor.map((item, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground" variant="outline">
                        Use Template
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {step === 'fill' && selectedTemplate && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Fill Your Details</h2>
                  <p className="text-muted-foreground">Using: {selectedTemplate.name}</p>
                </div>
                <Button variant="outline" onClick={() => setStep('browse')}>
                  Change Template
                </Button>
              </div>

              <div className="space-y-8">
                {/* Personal Information */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location" 
                        placeholder="Mumbai, India"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn URL</Label>
                      <Input 
                        id="linkedin" 
                        placeholder="linkedin.com/in/johndoe"
                        value={formData.linkedin}
                        onChange={(e) => handleInputChange('linkedin', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio/Website</Label>
                      <Input 
                        id="portfolio" 
                        placeholder="johndoe.com"
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange('portfolio', e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Professional Summary */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Professional Summary</CardTitle>
                    <CardDescription>Write 2-3 sentences about your professional background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Results-driven software developer with 2+ years of experience in building scalable web applications..."
                      className="min-h-[100px]"
                      value={formData.summary}
                      onChange={(e) => handleInputChange('summary', e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Work Experience */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Work Experience</CardTitle>
                    <CardDescription>List your work experience (most recent first)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Software Developer | ABC Company | 2023 - Present
• Developed and maintained web applications using React and Node.js
• Improved application performance by 40%

Junior Developer | XYZ Corp | 2021 - 2023
• Assisted in developing mobile applications
• Collaborated with cross-functional teams"
                      className="min-h-[200px]"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Education */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Bachelor of Technology in Computer Science
XYZ University | 2017 - 2021 | CGPA: 8.5/10

Higher Secondary (XII)
ABC School | 2017 | 92%"
                      className="min-h-[120px]"
                      value={formData.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Skills</CardTitle>
                    <CardDescription>List your technical and soft skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Technical Skills: JavaScript, TypeScript, React, Node.js, Python, SQL, Git, AWS

Soft Skills: Problem Solving, Team Collaboration, Communication, Leadership"
                      className="min-h-[100px]"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Projects */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Projects</CardTitle>
                    <CardDescription>Highlight your key projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="E-Commerce Platform | React, Node.js, MongoDB
• Built a full-stack e-commerce platform with 10K+ users
• Implemented secure payment integration

AI Chatbot | Python, TensorFlow
• Developed an AI-powered customer support chatbot
• Achieved 85% accuracy in intent recognition"
                      className="min-h-[150px]"
                      value={formData.projects}
                      onChange={(e) => handleInputChange('projects', e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Certifications */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="AWS Certified Solutions Architect | Amazon Web Services | 2023
Google Cloud Professional Data Engineer | Google | 2022
Meta Frontend Developer Certificate | Meta | 2021"
                      className="min-h-[100px]"
                      value={formData.certifications}
                      onChange={(e) => handleInputChange('certifications', e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4">
                  <Button variant="outline" onClick={() => setStep('browse')}>
                    Back
                  </Button>
                  <Button onClick={() => setStep('preview')} className="bg-primary">
                    Preview & Download
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 'preview' && selectedTemplate && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Preview & Download</h2>
                  <p className="text-muted-foreground">Review your resume and download in HD PDF</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep('fill')}>
                    Edit Details
                  </Button>
                  <Button onClick={generatePDF} className="bg-primary">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>

              {/* Resume Preview */}
              <Card className="border-border/50 overflow-hidden">
                <div className="bg-white p-8 text-gray-900">
                  {/* Header */}
                  <div className="text-center border-b-2 border-blue-600 pb-6 mb-6">
                    <h1 className="text-3xl font-bold text-blue-800 mb-2">
                      {formData.fullName || 'Your Name'}
                    </h1>
                    <p className="text-gray-600">
                      {formData.email || 'email@example.com'} | {formData.phone || '+91 XXXXX XXXXX'} | {formData.location || 'City, Country'}
                    </p>
                    {(formData.linkedin || formData.portfolio) && (
                      <p className="text-gray-600 text-sm mt-1">
                        {formData.linkedin && <span>LinkedIn: {formData.linkedin}</span>}
                        {formData.linkedin && formData.portfolio && ' | '}
                        {formData.portfolio && <span>Portfolio: {formData.portfolio}</span>}
                      </p>
                    )}
                  </div>

                  {/* Sections */}
                  {formData.summary && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-blue-800 border-b border-gray-200 pb-1 mb-2 uppercase">
                        Professional Summary
                      </h2>
                      <p className="text-sm whitespace-pre-line">{formData.summary}</p>
                    </div>
                  )}

                  {formData.experience && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-blue-800 border-b border-gray-200 pb-1 mb-2 uppercase">
                        Work Experience
                      </h2>
                      <p className="text-sm whitespace-pre-line">{formData.experience}</p>
                    </div>
                  )}

                  {formData.education && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-blue-800 border-b border-gray-200 pb-1 mb-2 uppercase">
                        Education
                      </h2>
                      <p className="text-sm whitespace-pre-line">{formData.education}</p>
                    </div>
                  )}

                  {formData.skills && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-blue-800 border-b border-gray-200 pb-1 mb-2 uppercase">
                        Skills
                      </h2>
                      <p className="text-sm whitespace-pre-line">{formData.skills}</p>
                    </div>
                  )}

                  {formData.projects && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-blue-800 border-b border-gray-200 pb-1 mb-2 uppercase">
                        Projects
                      </h2>
                      <p className="text-sm whitespace-pre-line">{formData.projects}</p>
                    </div>
                  )}

                  {formData.certifications && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-blue-800 border-b border-gray-200 pb-1 mb-2 uppercase">
                        Certifications
                      </h2>
                      <p className="text-sm whitespace-pre-line">{formData.certifications}</p>
                    </div>
                  )}
                </div>
              </Card>

              <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  💡 Tip: Click "Download PDF" to save your resume. Use Ctrl+P (or Cmd+P on Mac) and select "Save as PDF" for the best quality.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResumeBuilder;
