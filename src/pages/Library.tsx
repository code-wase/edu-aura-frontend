import { useEffect, useState } from 'react';
import {
  LogOut,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Search,
  BookOpen,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import api from '../api/axios.js';

interface Book {
  _id: string;
  title: string;
  author: string;
  quantity: number;
  image: string;
}

const Library = () => {
  const { toast } = useToast();

  /* ---------- AUTH ---------- */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ---------- LOGIN / REGISTER ---------- */
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /* ---------- DATA ---------- */
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('library_token');
    if (token) {
      setIsAuthenticated(true);
      fetchBooks(token);
    }
  }, []);

  /* ---------- API HANDLERS (UNCHANGED) ---------- */

  const registerHandler = async () => {
    if (!name || !email || !password) {
      toast({
        title: 'Missing fields',
        description: 'Please fill all the fields',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);
      const res = await api.post('/auth/register', { name, email, password });
      const token = res.data.token;
      localStorage.setItem('library_token', token);
      toast({ title: 'Registered Successfully' });
      setIsAuthenticated(true);
      fetchBooks(token);
    } catch (err: any) {
      toast({
        title: 'Register Failed',
        description: err?.response?.data?.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const loginHandler = async () => {
    if (!email || !password) {
      toast({
        title: 'Missing fields',
        description: 'Email and password required',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);
      const res = await api.post('/auth/login', { email, password });
      const token = res.data.token;
      localStorage.setItem('library_token', token);
      toast({ title: 'Login Successful' });
      setIsAuthenticated(true);
      fetchBooks(token);
    } catch (err: any) {
      toast({
        title: 'Login Failed',
        description: err?.response?.data?.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchBooks = async (token: string) => {
    try {
      const res = await api.get('/library', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks(res.data);
    } catch (err: any) {
      toast({
        title: 'Error',
        description: 'Failed to load books',
        variant: 'destructive',
      });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('library_token');
    setIsAuthenticated(false);
    setBooks([]);
    toast({ title: 'Logged out' });
  };

  /* ---------- BORROW / RETURN (BACKEND SYNC) ---------- */

  const borrowBook = async (id: string) => {
    try {
      const token = localStorage.getItem('library_token');

      const res = await api.put(
        `/library/borrow/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setBooks((prev) => prev.map((b) => (b._id === id ? res.data : b)));

      toast({ title: 'Book borrowed successfully' });
    } catch (err: any) {
      toast({
        title: 'Borrow failed',
        description: err?.response?.data?.message,
        variant: 'destructive',
      });
    }
  };

  const returnBook = async (id: string) => {
    try {
      const token = localStorage.getItem('library_token');

      const res = await api.put(
        `/library/return/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setBooks((prev) => prev.map((b) => (b._id === id ? res.data : b)));

      toast({ title: 'Book returned successfully' });
    } catch (err: any) {
      toast({
        title: 'Return failed',
        description: err?.response?.data?.message,
        variant: 'destructive',
      });
    }
  };

  /* ================= LOGIN / REGISTER UI ================= */
  if (!isAuthenticated) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#060b1f] via-[#0b122e] to-[#150c2c] px-4'>
        <Card className='w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1027]/90 backdrop-blur-xl shadow-2xl'>
          <CardContent className='p-10 space-y-6'>
            <div className='flex flex-col items-center space-y-3'>
              <div className='h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center'>
                <span className='text-white font-bold text-2xl'>SL</span>
              </div>
              <h2 className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500'>
                Smart Library
              </h2>
            </div>

            {isRegister && (
              <div className='relative'>
                <User className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                <Input
                  placeholder='Full name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='pl-12 h-12 bg-[#131a3a] border border-white/10 text-white rounded-xl'
                />
              </div>
            )}

            <div className='relative'>
              <Mail className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
              <Input
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='pl-12 h-12 bg-[#131a3a] border border-white/10 text-white rounded-xl'
              />
            </div>

            <div className='relative'>
              <Lock className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='pl-12 pr-12 h-12 bg-[#131a3a] border border-white/10 text-white rounded-xl'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <Button
              onClick={isRegister ? registerHandler : loginHandler}
              className='w-full h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl'
            >
              {isRegister ? 'Register' : 'Login'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ================= DASHBOARD ================= */

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className='min-h-screen pt-20 px-6'>
      <header className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Library Dashboard</h1>
        <Button
          variant='destructive'
          onClick={logoutHandler}
        >
          <LogOut className='w-4 h-4 mr-2' /> Logout
        </Button>
      </header>

      <div className='relative max-w-md mb-6'>
        <Input
          placeholder='Search books...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='pr-12'
        />
        <Search className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500' />
      </div>

      {filteredBooks.length === 0 && (
        <div className='flex flex-col items-center justify-center mt-20 text-center animate-pulse'>
          <BookOpen className='h-16 w-16 text-gray-400 mb-4' />
          <h2 className='text-xl font-semibold text-gray-600'>
            No books found
          </h2>
        </div>
      )}

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24'>
        {filteredBooks.map((book) => (
          <Card
            key={book._id}
            className='transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'
          >
            <CardContent className='p-6 space-y-3'>
              <img
                src={book.image}
                alt={book.title}
                className='h-48 w-full object-cover rounded'
              />
              <h3 className='text-lg font-bold'>{book.title}</h3>
              <p className='text-sm text-muted-foreground'>by {book.author}</p>

              <div className='flex justify-between items-center'>
                <span>Qty: {book.quantity}</span>
                <Badge variant={book.quantity > 0 ? 'default' : 'destructive'}>
                  {book.quantity > 0 ? 'Available' : 'Out'}
                </Badge>
              </div>

              <div className='flex gap-2 pt-2'>
                <Button
                  onClick={() => borrowBook(book._id)}
                  disabled={book.quantity <= 0}
                  className='flex-1'
                >
                  Borrow
                </Button>
                <Button
                  variant='secondary'
                  onClick={() => returnBook(book._id)}
                  className='flex-1'
                >
                  Return
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Library;
