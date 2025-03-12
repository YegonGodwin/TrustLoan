// Add at the top with other imports
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Wallet,
  Clock,
  Calculator,
  Building2,
  BadgeCheck,
  ChevronRight,
  ArrowRight,
  Star,
} from 'lucide-react';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_ANON_KEY!
);

// Update the handleSubmit function in the ApplyPage component
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const { data, error } = await supabase
      .from('loan_applications')
      .insert([{
        name: formData.name,
        mpesa_number: formData.mpesaNumber,
        nationalID: formData.nationalId,
        loan_type: formData.loanType
      }]);

    if (error) throw error;
    
    setSubmitted(true);
  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to submit application. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};