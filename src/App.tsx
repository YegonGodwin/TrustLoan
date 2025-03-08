import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface LoanProductProps {
  icon: React.ReactNode;
  title: string;
  amount: string;
  rate: string;
  onApply: () => void;
}

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  quote: string;
}

interface LoanFormData {
  name: string;
  mpesaNumber: string;
  nationalId: string;
  loanType: string;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
    </Routes>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-xl font-bold">TrustLoan</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-200">Features</a>
            <a href="#products" className="hover:text-blue-200">Products</a>
            <Link to="/calculator" className="hover:text-blue-200">Calculator</Link>
            <a href="#about" className="hover:text-blue-200">About</a>
          </div>
          <button 
            onClick={() => navigate('/apply')}
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Apply Now
          </button>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Quick and Easy Loans for Your Growth
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Get instant access to personal and business loans with competitive rates and flexible repayment options.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => navigate('/apply')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center"
                >
                  Get Started <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigate('/calculator')}
                  className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Calculate Loan
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800"
                alt="Happy customer"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose TrustLoan?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-blue-600" />}
              title="Quick Approval"
              description="Get your loan approved within 24 hours with our streamlined application process"
            />
            <FeatureCard
              icon={<Calculator className="w-8 h-8 text-blue-600" />}
              title="Flexible Terms"
              description="Choose from various repayment options that suit your financial situation"
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-blue-600" />}
              title="Secure & Trusted"
              description="Your data is protected with bank-grade security measures"
            />
          </div>
        </div>
      </section>

      {/* Loan Products Section */}
      <section className="py-20 bg-gray-50" id="products">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Loan Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <LoanProduct
              icon={<Wallet className="w-8 h-8 text-blue-600" />}
              title="Personal Loan"
              amount="Up to $50,000"
              rate="From 8.99% p.a."
              onApply={() => navigate('/apply')}
            />
            <LoanProduct
              icon={<Building2 className="w-8 h-8 text-blue-600" />}
              title="Business Loan"
              amount="Up to $500,000"
              rate="From 10.99% p.a."
              onApply={() => navigate('/apply')}
            />
            <LoanProduct
              icon={<BadgeCheck className="w-8 h-8 text-blue-600" />}
              title="Emergency Loan"
              amount="Up to $10,000"
              rate="From 11.99% p.a."
              onApply={() => navigate('/apply')}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Testimonial
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200"
              name="Sarah Johnson"
              role="Small Business Owner"
              quote="TrustLoan helped me expand my business with their quick and hassle-free business loan. Highly recommended!"
            />
            <Testimonial
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200"
              name="Michael Chen"
              role="Freelancer"
              quote="The personal loan process was smooth and transparent. The customer service team was extremely helpful throughout."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Apply now and get your loan approved within 24 hours</p>
          <button 
            onClick={() => navigate('/apply')}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <ShieldCheck className="w-8 h-8" />
                <span className="text-xl font-bold">TrustLoan</span>
              </Link>
              <p className="text-gray-400">Making financial growth accessible to everyone</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/apply" className="hover:text-white">Personal Loans</Link></li>
                <li><Link to="/apply" className="hover:text-white">Business Loans</Link></li>
                <li><Link to="/apply" className="hover:text-white">Emergency Loans</Link></li>
                <li><Link to="/calculator" className="hover:text-white">Loan Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TrustLoan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ApplyPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoanFormData>({
    name: '',
    mpesaNumber: '',
    nationalId: '',
    loanType: 'personal',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <Link to="/" className="flex items-center space-x-2 mb-8">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">TrustLoan</span>
          </Link>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your application. Our team will review your information and contact you within 24 hours.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ChevronRight className="w-5 h-5 mr-1" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">TrustLoan</span>
        </Link>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8">Loan Application</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="mpesaNumber" className="block text-sm font-medium text-gray-700 mb-1">
                M-Pesa Number
              </label>
              <input
                type="tel"
                id="mpesaNumber"
                name="mpesaNumber"
                value={formData.mpesaNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your M-Pesa number"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit M-Pesa number"
              />
            </div>

            <div>
              <label htmlFor="nationalId" className="block text-sm font-medium text-gray-700 mb-1">
                National ID Number
              </label>
              <input
                type="text"
                id="nationalId"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your National ID number"
              />
            </div>

            <div>
              <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Type
              </label>
              <select
                id="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="personal">Personal Loan</option>
                <option value="business">Business Loan</option>
                <option value="emergency">Emergency Loan</option>
              </select>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-blue-600 hover:text-blue-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">TrustLoan</span>
        </Link>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8">Loan Calculator</h1>
          <p className="text-gray-600 mb-8">This feature is coming soon. Check back later!</p>
          <Link 
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ChevronRight className="w-5 h-5 mr-1" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function LoanProduct({ icon, title, amount, rate, onApply }: LoanProductProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        <p className="text-gray-600">Amount: <span className="font-semibold text-gray-900">{amount}</span></p>
        <p className="text-gray-600">Rate: <span className="font-semibold text-gray-900">{rate}</span></p>
      </div>
      <button 
        onClick={onApply}
        className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
      >
        Learn More
      </button>
    </div>
  );
}

function Testimonial({ image, name, role, quote }: TestimonialProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{quote}</p>
      <div className="flex mt-4">
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
      </div>
    </div>
  );
}

export default App;