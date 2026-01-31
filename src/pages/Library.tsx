import { useEffect, useState } from 'react';
import { BookOpen, Search, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

  /* ---------- AUTH STATE ---------- */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ---------- LOGIN / REGISTER ---------- */
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* ---------- LIBRARY DATA ---------- */
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    const token = localStorage.getItem('library_token');
    if (token) {
      setIsAuthenticated(true);
      fetchBooks(token);
    }
  }, []);

  /* ================= API HANDLERS ================= */

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

      const res = await api.post('/auth/register', {
        name,
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem('library_token', token);

      toast({
        title: 'Registration successful',
        description: 'Welcome to the library',
      });

      setIsAuthenticated(true);
      fetchBooks(token);
    } catch (err: any) {
      toast({
        title: 'Registration failed',
        description: err?.response?.data?.message || 'Unable to register',
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
        description: 'Email and password are required',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);

      const res = await api.post('/auth/login', {
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem('library_token', token);

      toast({
        title: 'Login successful',
        description: 'Welcome back!',
      });

      setIsAuthenticated(true);
      fetchBooks(token);
    } catch (err: any) {
      toast({
        title: 'Login failed',
        description: err?.response?.data?.message || 'Invalid credentials',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchBooks = async (token: string) => {
    try {
      const res = await api.get('/library', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(res.data);
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err?.response?.data?.message || 'Failed to load books',
        variant: 'destructive',
      });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('library_token');
    setIsAuthenticated(false);
    setBooks([]);

    toast({
      title: 'Logged out',
      description: 'You have been logged out successfully',
    });
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  /* ================= LOGIN / REGISTER UI ================= */

  if (!isAuthenticated) {
    return (
      <div className='relative min-h-screen pt-20 flex items-center justify-center'>
        <Card className='w-full max-w-md'>
          <CardContent className='p-8 space-y-4'>
            <h2 className='text-2xl font-bold text-center'>
              {isRegister ? 'Register' : 'Login'}
            </h2>

            {isRegister && (
              <input
                type='text'
                placeholder='Name'
                className='w-full border p-3 rounded'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              type='email'
              placeholder='Email'
              className='w-full border p-3 rounded'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type='password'
              placeholder='Password'
              className='w-full border p-3 rounded'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              onClick={isRegister ? registerHandler : loginHandler}
              disabled={loading}
              className='w-full'
            >
              {loading ? 'Please wait...' : isRegister ? 'Register' : 'Login'}
            </Button>

            <p
              className='text-center text-sm text-blue-500 cursor-pointer'
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister
                ? 'Already have an account? Login'
                : 'New user? Register'}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ================= DASHBOARD ================= */

  return (
    <div className='min-h-screen pt-20 px-4'>
      <header className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Library Dashboard</h1>
        <Button
          variant='destructive'
          onClick={logoutHandler}
        >
          <LogOut className='w-4 h-4 mr-2' /> Logout
        </Button>
      </header>

      <input
        type='text'
        placeholder='Search books...'
        className='w-full max-w-md border p-3 rounded mb-6'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredBooks.map((book) => (
          <Card key={book._id}>
            <CardContent className='p-6 space-y-3'>
              <img
                src={book.image}
                alt={book.title}
                className='w-full h-48 object-cover rounded'
              />

              <h3 className='text-lg font-bold'>{book.title}</h3>
              <p className='text-sm text-muted-foreground'>by {book.author}</p>

              <div className='flex justify-between items-center pt-2'>
                <span>Qty: {book.quantity}</span>
                <Badge variant={book.quantity > 0 ? 'default' : 'destructive'}>
                  {book.quantity > 0 ? 'Available' : 'Out'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Library;
