import { useEffect, useState } from 'react';
import api from '../api/axios';
import Container from '../components/Container';

interface Faculty {
  _id: string;
  name: string;
  designation: string;
  subject: string;
  experience: string;
  image: string;
}

const Faculty = () => {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await api.get('/faculty');
        setFaculty(res.data.data);
      } catch (error) {
        console.error('Faculty API Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  if (loading) {
    return (
      <Container>
        <p className="mt-20 text-center text-muted-foreground">
          Loading faculty...
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="my-10 text-center text-3xl font-bold text-primary">
        Our Faculty Members
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((member) => (
          <div
            key={member._id}
            className="overflow-hidden rounded-xl bg-card text-center shadow transition hover:shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{member.name}</h3>

              <p className="mt-1 text-sm text-primary">
                {member.designation}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Subject: {member.subject}
              </p>

              <p className="text-sm text-muted-foreground">
                Experience: {member.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faculty;
