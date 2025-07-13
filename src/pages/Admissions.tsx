import { useState } from "react";
import {
  UserCheck,
  FileText,
  CreditCard,
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  User,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    level: "",
    message: "",
  });

  const detailedCourses = [
    { id: 1, title: 'B.Tech Computer Science', department: 'engineering', duration: '4 Years', level: 'UG' },
    { id: 2, title: 'B.Tech Mechanical Engineering', department: 'engineering', duration: '4 Years', level: 'UG' },
    { id: 3, title: 'BCA (Computer Applications)', department: 'engineering', duration: '3 Years', level: 'UG' },
    { id: 4, title: 'BBA (Business Administration)', department: 'management', duration: '3 Years', level: 'UG' },
    { id: 5, title: 'B.Sc in Hospitality Studies', department: 'arts', duration: '3 Years', level: 'UG' },
    { id: 6, title: 'MBA – General Management', department: 'management', duration: '2 Years', level: 'PG' },
    { id: 7, title: 'MCA (Computer Applications)', department: 'engineering', duration: '2 Years', level: 'PG' },
    { id: 8, title: 'M.Tech in Computer Science', department: 'engineering', duration: '2 Years', level: 'PG' },
  ];

  // Map courses for dropdown
  const courses = detailedCourses.map(course => ({
    value: course.id.toString(),
    label: course.title,
    level: course.level,
    duration: course.duration,
    department: course.department
  }));

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseChange = (value: string) => {
    const selected = courses.find((c) => c.value === value);
    setFormData((prev) => ({
      ...prev,
      course: value,
      level: selected?.level || "",
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Find selected course details
    const selectedCourse = courses.find(c => c.value === formData.course);
    const courseName = selectedCourse?.label || "Selected Course";
    
    // Prepare WhatsApp message
    const whatsappMessage = `*New Application Submission*%0A%0A
*Name:* ${formData.firstName} ${formData.lastName}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Course:* ${courseName}%0A
*Level:* ${formData.level}%0A%0A
*Personal Statement:*%0A${formData.message}`;
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/918830772432?text=${whatsappMessage}`, '_blank');
    
    // Show toast notification
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We'll contact you shortly.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      course: "",
      level: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Floating Contact Icons */}
      <div className="fixed top-[35%] right-3 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/918830772432"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 bg-white transition-transform hover:scale-110"
          style={{ boxShadow: "0 0 10px rgba(37, 211, 102, 0.5)" }}
        >
          <img
            src="https://img.icons8.com/color/36/whatsapp--v1.png"
            alt="WhatsApp"
            className="w-9 h-9"
          />
        </a>

        <a
          href="mailto:principal@ssbesitm.org"
          className="rounded-full p-2 bg-white transition-transform hover:scale-110"
          style={{ boxShadow: "0 0 10px rgba(234, 67, 53, 0.5)" }}
        >
          <img
            src="https://img.icons8.com/color/36/gmail-new.png"
            alt="Gmail"
            className="w-9 h-9"
          />
        </a>

        <a
          href="tel:+918830772432"
          className="rounded-full p-2 bg-white transition-transform hover:scale-110"
          style={{ boxShadow: "0 0 10px rgba(0, 132, 255, 0.5)" }}
        >
          <img
            src="https://img.icons8.com/color/36/phone.png"
            alt="Phone"
            className="w-9 h-9"
          />
        </a>
      </div>

      {/* Admission Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
          <p className="text-xl text-gray-600">
            Fill out the form below to start your application process.
          </p>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="course">Select Course</Label>
                <Select onValueChange={handleCourseChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        <div className="flex justify-between items-center w-full">
                          <span>{c.label}</span>
                          <Badge variant="secondary" className="ml-2">
                            {c.level}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.level && (
                <div>
                  <Label>Course Level</Label>
                  <Input disabled value={formData.level} />
                </div>
              )}

              <div>
                <Label htmlFor="message">Personal Statement</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're applying..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Admissions;