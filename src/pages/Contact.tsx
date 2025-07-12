import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Education Street', 'Learning City, LC 12345', 'United States'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Admissions)'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@itmcollege.edu', 'admissions@itmcollege.edu'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'text-orange-600'
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      phone: '+1 (555) 123-4568',
      email: 'admissions@itmcollege.edu',
      description: 'For questions about applications, requirements, and enrollment.'
    },
    {
      name: 'Academic Affairs',
      phone: '+1 (555) 123-4569',
      email: 'academics@itmcollege.edu',
      description: 'For course information, curriculum, and academic policies.'
    },
    {
      name: 'Student Services',
      phone: '+1 (555) 123-4570',
      email: 'students@itmcollege.edu',
      description: 'For student support, housing, and campus life inquiries.'
    },
    {
      name: 'Financial Aid',
      phone: '+1 (555) 123-4571',
      email: 'financial@itmcollege.edu',
      description: 'For scholarships, grants, and financial assistance programs.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
            <Card key={index} className="text-center">
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
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-blue-600" /> Find Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex flex-col items-center justify-center mb-6">
                <MapPin className="h-16 w-16 text-blue-600 mb-2" />
                <p className="text-gray-600">Interactive Campus Map</p>
                <p className="text-sm text-gray-500">123 Education Street, Learning City</p>
              </div>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Campus Directions</h4>
                  <p>Our campus is in the heart of Learning City, accessible by metro and major highways.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Public Transportation</h4>
                  <ul className="list-disc list-inside">
                    <li>Metro Line 2 - Education Station (5 min walk)</li>
                    <li>Bus Routes 15, 23, 47 - Campus Stop</li>
                    <li>Free campus shuttle service available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Parking</h4>
                  <p>Visitor parking available. Students and staff may obtain permits from campus security.</p>
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
              <Card key={index}>
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
