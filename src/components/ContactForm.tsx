import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Web3Forms access key - Your actual access key
      formData.append('access_key', 'f3392b53-245d-4831-9a2b-6fda6a94da41');
      
      // Add form data
      formData.append('name', `${data.firstName} ${data.lastName}`);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      
      // Add additional info
      formData.append('from_name', 'Ali Rizvi Portfolio');
      formData.append('to_name', 'Ali Rizvi');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      console.log(result)

      if (result.success) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 sm:p-6 lg:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
              First Name *
            </Label>
            <Input
              {...register('firstName')}
              id="firstName"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              placeholder="John"
              disabled={isSubmitting}
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
              Last Name *
            </Label>
            <Input
              {...register('lastName')}
              id="lastName"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              placeholder="Doe"
              disabled={isSubmitting}
            />
            {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </Label>
          <Input
            {...register('email')}
            id="email"
            type="email"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject *
          </Label>
          <Input
            {...register('subject')}
            id="subject"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            placeholder="Project Collaboration"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </Label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
            placeholder="Tell me about your project..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;