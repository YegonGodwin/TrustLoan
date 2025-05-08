// database.types.ts

// Define the type for the loan_applications table
export interface LoanApplication {
    id: number;               // Auto-incrementing primary key
    full_name: string;        // Applicant's full name
    mpesa_number: string;     // M-Pesa phone number
    national_id_number: string; // National ID number
    loan_type: 'personal' | 'business' | 'emergency'; // Specific loan types
    user_id: string;          // User ID (e.g., UUID linking to a user)
    created_at?: string;      // Optional timestamp for creation
    updated_at?: string;      // Optional timestamp for updates
  }