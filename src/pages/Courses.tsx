import { useEffect, useState } from 'react';
import api from '../api/axios';
import Container from '../components/Container';

interface Course {
  _id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get('/courses');
        setCourses(res.data.data);
      } catch (err) {
        console.error('Courses API Error:', err);
        setError('Failed to load courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <Container>
        <p className="mt-20 text-center text-muted-foreground">
          Loading courses...
        </p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p className="mt-20 text-center text-destructive">{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="my-10 text-center text-3xl font-bold text-primary">
        Our Courses
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="overflow-hidden rounded-xl bg-card shadow transition hover:shadow-lg"
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.title}
              className="h-44 w-full object-cover"
            />

            {/* Course Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold">{course.title}</h3>

              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                {course.description}
              </p>

              <p className="mt-3 text-sm">
                Duration:{' '}
                <span className="font-medium">{course.duration}</span>
              </p>

              <p className="mt-2 font-bold text-primary">
                ₹{course.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Courses;
