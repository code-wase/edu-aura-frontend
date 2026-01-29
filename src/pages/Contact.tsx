import { useState } from 'react';
import api from '../api/axios';
import Container from '../components/Container';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  const submitHandler = async () => {
    if (!message.trim()) {
      toast.error('Please enter a message');
      return;
    }

    try {
      setLoading(true);

      const res = await api.post('/contact', {
        name,
        email,
        phone,
        subject,
        message,
      });


      toast.success(res.data?.message || 'Message sent successfully');

      // ✅ FULL FORM RESET
      resetForm();
    } catch (error: any) {
      console.error('Contact API error:', error);

      toast.error(
        error?.response?.data?.message ||
        'Failed to send message. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* ================= TOASTER ================= */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { fontSize: '14px' },
        }}
      />

      {/* ================= FLOATING CONTACT ICONS ================= */}
      <div className="fixed top-[35%] right-3 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/918830772432"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110"
          style={{ boxShadow: '0 0 10px rgba(37, 211, 102, 0.4)' }}
        >
          <img
            src="https://img.icons8.com/color/36/whatsapp--v1.png"
            alt="WhatsApp"
            className="h-9 w-9"
          />
        </a>

        <a
          href="mailto:principal@ssbesitm.org"
          className="rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110"
          style={{ boxShadow: '0 0 10px rgba(234, 67, 53, 0.4)' }}
        >
          <img
            src="https://img.icons8.com/color/36/gmail-new.png"
            alt="Gmail"
            className="h-9 w-9"
          />
        </a>

        <a
          href="tel:+918830772432"
          className="rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110"
          style={{ boxShadow: '0 0 10px rgba(0, 132, 255, 0.4)' }}
        >
          <img
            src="https://img.icons8.com/color/36/phone.png"
            alt="Phone"
            className="h-9 w-9"
          />
        </a>
      </div>
      {/* =========================================================== */}

      {/* ================= CONTACT FORM ================= */}
      <Container>
        <div className="relative z-10">
          <h2 className="my-12 text-center text-3xl font-bold text-primary">
            Contact Us
          </h2>

          <div className="mx-auto max-w-xl rounded-xl bg-card p-8 shadow">
            <h3 className="mb-6 text-center text-xl font-semibold">
              Send Us a Message
            </h3>

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              className="mb-4 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="mb-4 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
              className="mb-4 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={loading}
              className="mb-4 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* MESSAGE */}
            <textarea
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
              className="mb-6 w-full resize-none rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              onClick={submitHandler}
              disabled={loading}
              className={`w-full rounded-lg py-3 font-medium text-white transition ${loading
                  ? 'cursor-not-allowed bg-secondary/70'
                  : 'bg-primary hover:bg-secondary'
                }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </Container>
      {/* =========================================================== */}
    </div>
  );
};

export default Contact;
