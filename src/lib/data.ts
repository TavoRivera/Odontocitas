
import type { Student, Offer, Review, User, Appointment } from './types';

// Mock Users
export const users: User[] = [
  { id: 'user-admin', username: 'Admin' },
  { id: 'user-1', username: 'Ana García', studentId: '1' },
  { id: 'user-2', username: 'Ben Allen', studentId: '2' },
  { id: 'user-3', username: 'Carla Lima', studentId: '3' },
  { id: 'user-4', username: 'Daniel Sato', studentId: '4' },
  { id: 'user-5', username: 'Elena Rodriguez', studentId: '5' },
];

let reviews: Review[] = [
  { id: '1', studentId: '1', author: 'John Doe', rating: 5, comment: 'Amazing service, very professional and gentle.', date: '2024-05-10' },
  { id: '2', studentId: '1', author: 'Jane Smith', rating: 4, comment: 'Good experience, but the waiting time was a bit long.', date: '2024-05-12' },
  { id: '3', studentId: '2', author: 'Peter Jones', rating: 5, comment: 'Dr. Allen was fantastic with my kids. Highly recommended!', date: '2024-05-15' },
  { id: '4', studentId: '3', author: 'Emily White', rating: 5, comment: 'The best teeth whitening I have ever had.', date: '2024-05-18' },
  { id: '5', studentId: '3', author: 'Michael Brown', rating: 3, comment: 'The result was good, but the student seemed a bit nervous.', date: '2024-05-20' },
  { id: '6', studentId: '4', author: 'Sarah Green', rating: 5, comment: 'Very thorough and explained everything clearly.', date: '2024-05-21' },
  { id: '7', studentId: '1', author: 'David Williams', rating: 5, comment: 'I\'m very happy with my cleaning. Will come back for sure.', date: '2024-05-22' },
  { id: '8', studentId: '2', author: 'Laura Taylor', rating: 4, comment: 'Friendly and professional, a great combination.', date: '2024-05-23' },
];

let offers: Offer[] = [
  { id: '1', studentId: '1', title: 'Standard Dental Cleaning', description: 'Comprehensive cleaning including plaque removal, tarter removal, and polishing.', price: 50, category: 'Cleaning' },
  { id: '2', studentId: '1', title: 'Basic Check-up', description: 'A complete dental check-up to assess your oral health.', price: 30, category: 'Check-up' },
  { id: '3', studentId: '2', title: 'Professional Teeth Whitening', description: 'Get a brighter smile with our professional-grade whitening treatment.', price: 120, category: 'Whitening' },
  { id: '4', studentId: '3', title: 'Advanced Teeth Whitening', description: 'In-office laser whitening for immediate and dramatic results.', price: 200, category: 'Whitening' },
  { id: '5', studentId: '3', title: 'Full Mouth X-Ray & Check-up', description: 'Includes a full set of x-rays and a comprehensive exam.', price: 75, category: 'Check-up' },
  { id: '6', studentId: '4', title: 'Orthodontic Consultation', description: 'Consultation for braces and other orthodontic treatments.', price: 25, category: 'Orthodontics' },
  { id: '7', studentId: '4', title: 'Deep Cleaning', description: 'Scaling and root planing for patients with gum disease.', price: 150, category: 'Cleaning' },
];

let appointments: Appointment[] = [
    { id: 'appt-1', studentId: '1', offerId: '1', patientName: 'Client Example', patientEmail: 'client@example.com', patientPhone: '555-1234', status: 'pending' },
    { id: 'appt-2', studentId: '1', offerId: '2', patientName: 'Another Client', patientEmail: 'another@example.com', patientPhone: '555-5678', status: 'confirmed' },
];

let students: Student[] = [
  {
    id: '1',
    userId: 'user-1',
    name: 'Ana García',
    university: 'University of Dental Sciences',
    bio: 'A passionate 4th-year dental student specializing in preventative care. I am dedicated to providing gentle and thorough treatments to ensure my patients leave with a sparkling smile. I believe in patient education and always take the time to explain procedures and proper oral hygiene techniques.',
    avatarUrl: `https://picsum.photos/400/400?random=1`,
    skills: ['Preventative Care', 'Dental Cleanings', 'Patient Education', 'Digital X-Rays'],
    location: 'New York, NY',
    rating: 4.7,
    status: 'approved',
    gallery: [
        { url: 'https://picsum.photos/800/600?random=11', description: 'Our modern and clean treatment room.' },
        { url: 'https://picsum.photos/800/600?random=12', description: 'State-of-the-art dental equipment.' },
    ]
  },
  {
    id: '2',
    userId: 'user-2',
    name: 'Ben Allen',
    university: 'Metropolitan School of Dentistry',
    bio: '5th-year dental student with a focus on pediatric and cosmetic dentistry. My goal is to create a positive and comfortable experience for every patient, especially children. I enjoy transforming smiles and boosting my patients\' confidence through aesthetic treatments.',
    avatarUrl: `https://picsum.photos/400/400?random=2`,
    skills: ['Pediatric Dentistry', 'Teeth Whitening', 'Veneers', 'Cosmetic Bonding'],
    location: 'Los Angeles, CA',
    rating: 4.8,
    status: 'approved',
  },
  {
    id: '3',
    userId: 'user-3',
    name: 'Carla Lima',
    university: 'State Dental College',
    bio: 'I am a final year dental student with a keen interest in restorative dentistry and endodontics. I am proficient in modern techniques for fillings, crowns, and root canals. My meticulous approach ensures long-lasting and aesthetically pleasing results for my patients.',
    avatarUrl: `https://picsum.photos/400/400?random=3`,
    skills: ['Restorative Dentistry', 'Endodontics (Root Canals)', 'Crowns & Bridges', 'Fillings'],
    location: 'Chicago, IL',
    rating: 4.2,
    status: 'pending',
  },
  {
    id: '4',
    userId: 'user-4',
    name: 'Daniel Sato',
    university: 'Advanced Oral Health Institute',
    bio: 'A detail-oriented dental student specializing in orthodontics and periodontics. I am committed to helping patients achieve optimal gum health and perfectly aligned teeth. I have experience with traditional braces, clear aligners, and periodontal maintenance.',
    avatarUrl: `https://picsum.photos/400/400?random=4`,
    skills: ['Orthodontics', 'Periodontics', 'Braces', 'Invisalign'],
    location: 'Houston, TX',
    rating: 5.0,
    status: 'pending',
  },
  {
    id: '5',
    userId: 'user-5',
    name: 'Elena Rodriguez',
    university: 'University of Dental Sciences',
    bio: 'A bright and enthusiastic 3rd-year student, eager to learn and help patients. I am currently focusing on. I am currently focusing on general dentistry and am excited to apply my knowledge in a clinical setting.',
    avatarUrl: `https://picsum.photos/400/400?random=5`,
    skills: ['General Dentistry', 'Patient Care', 'Oral Hygiene'],
    location: 'New York, NY',
    rating: 0,
    status: 'pending',
  },
].map(student => ({
  ...student,
  reviews: reviews.filter(r => r.studentId === student.id),
  offers: offers.filter(o => o.studentId === student.id),
}));


export const getStudents = () => students;
export const getStudentById = (id: string) => students.find(s => s.id === id);
export const getStudentByUserId = (userId: string) => students.find(s => s.userId === userId);
export const getOffers = () => offers;
export const getOfferById = (id: string) => offers.find(o => o.id === id);
export const getReviewsByStudentId = (studentId: string) => reviews.filter(r => r.studentId === studentId);
export const getUserByUsername = (username: string) => users.find(u => u.username.toLowerCase() === username.toLowerCase());
export const getUserByStudentId = (studentId: string) => users.find(u => u.studentId === studentId);
export const getOffersByStudentId = (studentId: string) => offers.filter(o => o.studentId === studentId);
export const getAppointmentsByStudentId = (studentId: string) => appointments.filter(a => a.studentId === studentId);

export const addAppointment = (appointmentData: Omit<Appointment, 'id'>) => {
  const newAppointment: Appointment = { ...appointmentData, id: `appt-${Date.now()}` };
  appointments.unshift(newAppointment);
  return newAppointment;
};

export const addOffer = (offerData: Omit<Offer, 'id'>) => {
  const newOffer = { ...offerData, id: String(Date.now()) };
  offers.push(newOffer);
  // Also add it to the student's offers list
  const student = students.find(s => s.id === newOffer.studentId);
  if (student) {
    student.offers.push(newOffer);
  }
  return newOffer;
};

export const updateOffer = (offerId: string, offerData: Partial<Omit<Offer, 'id' | 'studentId'>>) => {
  let offer = offers.find(o => o.id === offerId);
  if (offer) {
    offer = Object.assign(offer, offerData);
    // Also update the offer in the student's list
    const student = students.find(s => s.id === offer!.studentId);
    if (student) {
      const offerIndex = student.offers.findIndex(o => o.id === offerId);
      if (offerIndex > -1) {
        student.offers[offerIndex] = { ...student.offers[offerIndex], ...offerData };
      }
    }
  }
  return offer;
};

export const deleteOffer = (offerId: string) => {
  const offerIndex = offers.findIndex(o => o.id === offerId);
  if (offerIndex > -1) {
    const studentId = offers[offerIndex].studentId;
    offers.splice(offerIndex, 1);
    // Also remove it from the student's offers list
    const student = students.find(s => s.id === studentId);
    if (student) {
      student.offers = student.offers.filter(o => o.id !== offerId);
    }
    return true;
  }
  return false;
};
