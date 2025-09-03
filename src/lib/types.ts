
export interface Review {
  id: string;
  studentId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Offer {
  id: string;
  studentId: string;
  title: string;
  description: string;
  price: number;
  category: 'Cleaning' | 'Whitening' | 'Check-up' | 'Orthodontics' | 'Other';
}

export interface GalleryImage {
  url: string;
  description: string;
}

export interface Student {
  id: string;
  userId: string; // Added to link to a user
  name: string;
  university: string;
  bio: string;
  avatarUrl: string;
  skills: string[];
  location: string;
  rating: number;
  reviews: Review[];
  offers: Offer[];
  status: 'pending' | 'approved' | 'rejected';
  gallery?: GalleryImage[];
}

export interface User {
  id: string;
  username: string; // 'Admin' for admin, or student's name
  studentId?: string; // Link to student profile if not admin
}

export interface Appointment {
  id: string;
  studentId: string;
  offerId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}
