import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  company: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, company, delay = 0 }) => {
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 fade-in-section opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="h-10 w-10 text-white/50 mb-4" />
      <p className="text-white text-lg mb-6">{text}</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-blue-400 flex items-center justify-center text-xl font-bold text-white">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-medium text-white">{author}</p>
          <p className="text-blue-200">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;