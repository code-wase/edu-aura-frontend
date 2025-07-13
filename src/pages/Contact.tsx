import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  BookOpen,
  Computer,
  Briefcase,
  Microscope,
  Palette,
  Navigation
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    course: '',
    department: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['5895+MHR, VIP Rd, Vishnu Nagar, Nanded-Waghala, Maharashtra 431602'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8830772432', '+91 8830772433 (Admissions)'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['principal@ssbesitm.org', 'admissions@ssbesitm.org'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Saturday: 8:00 AM - 6:00 PM', 'Sunday: Closed'],
      color: 'text-orange-600'
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      phone: '+91 8830772433',
      email: 'admissions@ssbesitm.org',
      description: 'For questions about applications, requirements, and enrollment.'
    },
    {
      name: 'Academic Affairs',
      phone: '+91 8830772434',
      email: 'academics@ssbesitm.org',
      description: 'For course information, curriculum, and academic policies.'
    },
    {
      name: 'Student Services',
      phone: '+91 8830772435',
      email: 'students@ssbesitm.org',
      description: 'For student support, housing, and campus life inquiries.'
    },
    {
      name: 'Financial Aid',
      phone: '+91 8830772436',
      email: 'financial@ssbesitm.org',
      description: 'For scholarships, grants, and financial assistance programs.'
    }
  ];

  const courses = [
    { value: "btech-cse", label: "B.Tech Computer Science", icon: Computer },
    { value: "btech-mech", label: "B.Tech Mechanical Engineering", icon: Computer },
    { value: "bca", label: "BCA (Computer Applications)", icon: Computer },
    { value: "bba", label: "BBA (Business Administration)", icon: Briefcase },
    { value: "bsc-hospitality", label: "B.Sc in Hospitality Studies", icon: Palette },
    { value: "mba", label: "MBA – General Management", icon: Briefcase },
    { value: "mca", label: "MCA (Computer Applications)", icon: Computer },
    { value: "mtech-cse", label: "M.Tech in Computer Science", icon: Computer },
  ];

  const departmentsOptions = [
    { value: "engineering", label: "Engineering", icon: Computer },
    { value: "management", label: "Management", icon: Briefcase },
    { value: "science", label: "Science", icon: Microscope },
    { value: "arts", label: "Arts & Hospitality", icon: Palette },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const courseName = courses.find(c => c.value === formData.course)?.label || "Not specified";
    const departmentName = departmentsOptions.find(d => d.value === formData.department)?.label || "Not specified";
    
    const whatsappMessage = `*New Contact Inquiry*%0A%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Department:* ${departmentName}%0A
*Course:* ${courseName}%0A
*Subject:* ${formData.subject}%0A%0A
*Message:*%0A${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/918830772432?text=${whatsappMessage}`, '_blank');
    
    // Show toast notification
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon via WhatsApp.",
    });
    
    // Reset form
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      subject: '', 
      message: '',
      course: '',
      department: ''
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="fixed top-[35%] right-3 z-50 flex flex-col gap-3">
        <a href="https://wa.me/918830772432" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-white shadow-md transition-transform hover:scale-110" style={{ boxShadow: '0 0 10px rgba(37, 211, 102, 0.4)' }}>
          <img src="https://img.icons8.com/color/36/whatsapp--v1.png" alt="WhatsApp" className="w-9 h-9" />
        </a>
        <a href="mailto:principal@ssbesitm.org" className="rounded-full p-2 bg-white shadow-md transition-transform hover:scale-110" style={{ boxShadow: '0 0 10px rgba(234, 67, 53, 0.4)' }}>
          <img src="https://img.icons8.com/color/36/gmail-new.png" alt="Gmail" className="w-9 h-9" />
        </a>
        <a href="tel:+918830772432" className="rounded-full p-2 bg-white shadow-md transition-transform hover:scale-110" style={{ boxShadow: '0 0 10px rgba(0, 132, 255, 0.4)' }}>
          <img src="https://img.icons8.com/color/36/phone.png" alt="Phone" className="w-9 h-9" />
        </a>
      </div>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for any questions about admissions, courses, or campus life. We're here to help!
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <info.icon className={`h-12 w-12 ${info.color} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-blue-600" /> Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}
                      value={formData.department}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departmentsOptions.map((dept) => (
                          <SelectItem key={dept.value} value={dept.value}>
                            <div className="flex items-center gap-2">
                              <dept.icon className="h-4 w-4" />
                              <span>{dept.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="course">Course Interest</Label>
                    <Select 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, course: value }))}
                      value={formData.course}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.value} value={course.value}>
                            <div className="flex items-center gap-2">
                              <course.icon className="h-4 w-4" />
                              <span>{course.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required />
                </div>
                
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Popular Courses</h3>
                  <div className="flex flex-wrap gap-2">
                    {courses.slice(0, 4).map(course => (
                      <Badge 
                        key={course.value}
                        variant={formData.course === course.value ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => setFormData(prev => ({ ...prev, course: course.value }))}
                      >
                        {course.label}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Send className="h-4 w-4 mr-2" /> Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Navigation className="h-6 w-6 mr-2 text-blue-600" /> Find Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.593891114111!2d77.30412069678955!3d19.169245999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6608f835e5d%3A0x77334c6ef2a354f7!2sInstitute%20of%20Management%20and%20Technology!5e0!3m2!1sen!2sin!4v1752394127551!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-red-600" />
                  Campus Location
                </h3>
                <a 
                  href="https://maps.app.goo.gl/examplelink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Open in Maps
                  <Navigation className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">1</span>
                    Campus Directions
                  </h4>
                  <p>5895+MHR, VIP Rd, Vishnu Nagar, Nanded-Waghala, Maharashtra 431602.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                    <span className="bg-green-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">2</span>
                    Public Transportation
                  </h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><span className="font-medium">Bus:</span> Routes 15, 23, 47 (Campus Stop)</li>
                    <li><span className="font-medium">Auto Rickshaw:</span> Available from all city points</li>
                    <li><span className="font-medium">Free Shuttle:</span> From Amravati Railway Station (every 30 mins)</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">3</span>
                    Parking & Facilities
                  </h4>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Badge className="bg-white text-purple-700">
                      🅿️ Free Visitor Parking
                    </Badge>
                    <Badge className="bg-white text-purple-700">
                      ♿ Wheelchair Access
                    </Badge>
                    <Badge className="bg-white text-purple-700">
                      🪑 Visitor Lounge
                    </Badge>
                    <Badge className="bg-white text-purple-700">
                      ☕ Cafeteria
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Reach out to the right department for specific inquiries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <a href={`tel:${dept.phone}`} className="text-gray-700 hover:text-blue-600">{dept.phone}</a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <a href={`mailto:${dept.email}`} className="text-gray-700 hover:text-blue-600">{dept.email}</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;