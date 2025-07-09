import { useState } from 'react';
import {
  Clock,
  Users,
  Award,
  BookOpen,
  Computer,
  Briefcase,
  Palette,
  Microscope,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Modal from '@/components/Modal';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showApplyForm, setShowApplyForm] = useState(false);

  const departments = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'computer-science', name: 'Computer Science', icon: Computer },
    { id: 'business', name: 'Business', icon: Briefcase },
    { id: 'arts', name: 'Arts & Design', icon: Palette },
    { id: 'science', name: 'Sciences', icon: Microscope },
  ];

  const courses = [
    {
      id: 1,
      title: 'Computer Science Engineering',
      department: 'computer-science',
      duration: '4 Years',
      level: 'Bachelor',
      students: 120,
      description:
        'Comprehensive program covering programming, algorithms, data structures, and modern computing technologies.',
      subjects: [
        'Programming',
        'Data Structures',
        'Algorithms',
        'Database Systems',
        'Web Development',
      ],
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Business Administration',
      department: 'business',
      duration: '3 Years',
      level: 'Bachelor',
      students: 150,
      description:
        'Learn management principles, marketing strategies, finance, and entrepreneurship skills, with our experienced teachers.',
      subjects: [
        'Management',
        'Marketing Strategie',
        'Finance',
        'Operations',
        'Strategy',
      ],
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Graphic Design',
      department: 'arts',
      duration: '3 Years',
      level: 'Bachelor',
      students: 80,
      description:
        'Creative program focusing on visual communication, digital design, and brand development, with our experienced teachers.',
      subjects: [
        'Design Theory',
        'Digital Arts',
        'Typography',
        'Branding',
        'UI/UX Design',
      ],
      image: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'Data Science',
      department: 'computer-science',
      duration: '2 Years',
      level: 'Master',
      students: 60,
      description:
        'Advanced program in statistical analysis, machine learning, and big data technologies.',
      subjects: [
        'Statistical Analysis',
        'Machine Learning',
        'Python',
        'Big Data',
        'Analytics',
        'AI',
      ],
      image: '/placeholder.svg',
    },
    {
      id: 5,
      title: 'Environmental Science',
      department: 'science',
      duration: '4 Years',
      level: 'Bachelor',
      students: 70,
      description:
        'Study environmental systems, sustainability, and conservation methods.',
      subjects: [
        'Ecology',
        'Chemistry',
        'Environmental Policy',
        'Research Methods',
        'Conservation',
      ],
      image: '/placeholder.svg',
    },
    {
      id: 6,
      title: 'Digital Marketing',
      department: 'business',
      duration: '1 Year',
      level: 'Diploma',
      students: 100,
      description:
        'Intensive program covering online marketing strategies and digital tools.',
      subjects: [
        'SEO/SEM',
        'Social Media',
        'Content Marketing',
        'Analytics',
        'E-commerce',
      ],
      image: '/placeholder.svg',
    },
  ];

  const filteredCourses =
    activeTab === 'all'
      ? courses
      : courses.filter((course) => course.department === activeTab);

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section and Tabs (Same as before) */}

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className="card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-blue-600" />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <Badge variant="outline">{course.duration}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students} students</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.subjects.slice(0, 3).map((subject, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                        {course.subjects.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.subjects.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button
                        className="flex-1"
                        size="sm"
                        onClick={() => {
                          setSelectedCourse(course);
                          setShowApplyForm(false);
                        }}
                      >
                        Learn More
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                          setSelectedCourse(course);
                          setShowApplyForm(true);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCourse && (
        <Modal open={!!selectedCourse} onClose={() => setSelectedCourse(null)}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              {selectedCourse.title}
            </h2>
            <p className="mb-4 text-gray-600">
              {selectedCourse.description}
            </p>

            {showApplyForm ? (
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border px-3 py-2 rounded"
                />
                <textarea
                  placeholder="Why are you applying?"
                  className="w-full border px-3 py-2 rounded"
                />
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            ) : (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">Subjects:</h3>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {selectedCourse.subjects.map((subj, i) => (
                    <li key={i}>{subj}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Courses;
