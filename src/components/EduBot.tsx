import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const EduBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content:
        "Hello! I'm EduBot, your AI assistant at Edu Aura Institute. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  /* ------------------ BOT RESPONSES ------------------ */

  const botResponses = {
    course:
      'We offer BCA, BBA, B.Com, MCA, and MBA programs with industry-focused curriculum.',
    admission:
      'Admissions are open! Apply online or contact us at +91 88307 72432.',
    faculty:
      'Our faculty includes 200+ experienced professors, most with PhDs.',
    fee:
      'Fees:\n• BCA / BBA / B.Com: ₹45,000 per year\n• MCA / MBA: ₹60,000 per year',
    placement:
      '95% placement rate. Top recruiters include TCS, Infosys, Wipro. Avg package: 4.5 LPA.',
    library:
      'Our smart library has 50,000+ books, digital journals, and 24/7 access.',
    hostel:
      'Separate boys & girls hostels with Wi-Fi, mess, AC/Non-AC rooms.',
    contact:
      '📞 +91 88307 72432\n📧 principal@ssbesitm.org\n📍 Maharashtra, India',
    fallback:
      'I can help with courses, fees, placements, admissions, hostel, faculty, or contact info.',
  };

  const hasAny = (text: string, keywords: string[]) =>
    keywords.some((word) => text.includes(word));

  const getBotReply = (userText: string) => {
    const msg = userText.toLowerCase();

    if (hasAny(msg, ['hello', 'hi', 'hey'])) {
      return "Hello! How can I assist you today?";
    }
    if (hasAny(msg, ['fee', 'fees', 'cost', 'price'])) {
      return botResponses.fee;
    }
    if (hasAny(msg, ['placement', 'job', 'career', 'package'])) {
      return botResponses.placement;
    }
    if (hasAny(msg, ['admission', 'apply', 'enroll', 'join'])) {
      return botResponses.admission;
    }
    if (hasAny(msg, ['faculty', 'teacher', 'professor'])) {
      return botResponses.faculty;
    }
    if (hasAny(msg, ['library', 'book', 'study'])) {
      return botResponses.library;
    }
    if (hasAny(msg, ['hostel', 'stay', 'accommodation'])) {
      return botResponses.hostel;
    }
    if (hasAny(msg, ['contact', 'phone', 'email'])) {
      return botResponses.contact;
    }
    if (
      hasAny(msg, [
        'course',
        'courses',
        'program',
        'bca',
        'bba',
        'bcom',
        'mca',
        'mba',
      ])
    ) {
      return botResponses.course;
    }
    if (hasAny(msg, ['thank', 'thanks'])) {
      return 'You’re welcome 😊';
    }

    return botResponses.fallback;
  };

  /* ------------------ SEND MESSAGE ------------------ */

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    await new Promise((res) => setTimeout(res, 1200));

    const botMessage: Message = {
      id: Date.now() + 1,
      role: 'assistant',
      content: getBotReply(userMessage.content),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg"
        >
          <MessageSquare className="h-5 w-5 text-white" />
          <span className="text-white font-semibold">Ask EduBot</span>
          <Sparkles className="h-4 w-4 text-white/80" />
        </button>
      )}

      {isOpen && (
        <div className="w-[380px] h-[520px] bg-card border rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white font-bold">
              <Bot /> EduBot
            </div>
            <X className="text-white cursor-pointer" onClick={toggleChat} />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-xl text-sm ${msg.role === 'user'
                      ? 'bg-secondary text-white'
                      : 'bg-muted'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="text-sm text-muted-foreground">
                EduBot is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border rounded-lg px-3 py-2"
              placeholder="Type your message..."
            />
            <Button onClick={handleSendMessage} disabled={isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EduBot;
