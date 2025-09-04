import { supabase } from './supabaseClient';
import type { Student, Offer, Review, User, Appointment } from './types';

// Traer todos los estudiantes
export const getStudents = async (): Promise<Student[]> => {
  const { data, error } = await supabase
    .from('students')
    .select(`
      *,
      reviews(*),
      offers(*)
    `);

  if (error) throw error;
  return data as Student[];
};

// Traer estudiante por ID
export const getStudentById = async (id: string): Promise<Student | null> => {
  const { data, error } = await supabase
    .from('students')
    .select(`
      *,
      reviews(*),
      offers(*)
    `)
    .eq('id', id)
    .single();

  if (error) return null;
  return data as Student;
};

// Traer usuario por username
export const getUserByUsername = async (username: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .ilike('username', username)
    .single();

  if (error) return null;
  return data as User;
};

// Agregar una cita
export const addAppointment = async (appointment: Omit<Appointment, 'id'>) => {
  const { data, error } = await supabase.from('appointments').insert([appointment]).select().single();
  if (error) throw error;
  return data as Appointment;
};

// Agregar una oferta
export const addOffer = async (offer: Omit<Offer, 'id'>) => {
  const { data, error } = await supabase.from('offers').insert([offer]).select().single();
  if (error) throw error;
  return data as Offer;
};
