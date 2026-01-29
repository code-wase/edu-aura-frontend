import { useState } from 'react';
import api from '../api/axios';
import Container from '../components/Container';
import toast, { Toaster } from 'react-hot-toast';

const Admissions = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    if (!form.name || !form.email || !form.phone || !form.course) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      setLoading(true);
      await api.post('/admissions/apply', form);
      toast.success('Admission applied successfully');

      setForm({
        name: '',
        email: '',
        phone: '',
        course: '',
      });
    } catch (error: any) {
      console.error('Admission API Error:', error);
      toast.error(
        error?.response?.data?.message || 'Failed to apply admission',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {/* TOASTER */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { fontSize: '14px' },
        }}
      />

      <h2 className="my-10 text-center text-3xl font-bold text-primary">
        Admission Form
      </h2>

      <div className="mx-auto max-w-xl rounded-xl bg-card p-6 shadow">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            value={(form as any)[key]}
            className="mb-4 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={key.toUpperCase()}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            disabled={loading}
          />
        ))}

        <button
          onClick={submitHandler}
          disabled={loading}
          className={`w-full rounded-lg py-2 text-white transition ${loading
              ? 'cursor-not-allowed bg-secondary/70'
              : 'bg-primary hover:bg-secondary'
            }`}
        >
          {loading ? 'Submitting...' : 'Apply Now'}
        </button>
      </div>
    </Container>
  );
};

export default Admissions;
