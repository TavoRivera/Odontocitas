// src/lib/email.ts
'use server';

import nodemailer from 'nodemailer';
import { getStudentById } from './data';
import type { Appointment, Offer, User } from './types';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendEmail({ to, subject, html }: SendEmailOptions) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to', to);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

export async function sendProfileApprovedEmail(studentName: string, studentEmail: string) {
  if (!studentEmail) {
    console.error("No email address provided for student:", studentName);
    return;
  }
  
  const subject = '¡Tu perfil de OdontoLink ha sido aprobado!';
  const html = `
    <h1>¡Felicidades, ${studentName}!</h1>
    <p>Tu perfil en OdontoLink ha sido aprobado por nuestros administradores.</p>
    <p>Ya puedes iniciar sesión y comenzar a crear ofertas para clientes.</p>
    <p>¡Gracias por unirte a nuestra comunidad!</p>
    <p>Atentamente,</p>
    <p>El equipo de OdontoLink</p>
  `;
  
  return sendEmail({ to: studentEmail, subject, html });
}


export async function sendNewAppointmentEmail(student: User, appointment: Appointment, offer: Offer) {
    // In a real app, you would fetch the student's actual email.
    // For this demo, we'll use a placeholder or the login email if available.
    const studentInfo = getStudentById(student.id);
    const studentEmail = "octavioriv02@gmail.com";
  
    if (!studentEmail) {
      console.error("Could not find email for student:", student.username);
      return;
    }
  
    const subject = `Nueva Solicitud de Cita para "${offer.title}"`;
    const html = `
      <h1>¡Nueva Solicitud de Cita!</h1>
      <p>Hola ${student.username},</p>
      <p>Un nuevo cliente ha solicitado una cita para tu oferta: <strong>${offer.title}</strong>.</p>
      
      <h2>Detalles del Cliente:</h2>
      <ul>
        <li><strong>Nombre:</strong> ${appointment.patientName}</li>
        <li><strong>Email:</strong> ${appointment.patientEmail}</li>
        <li><strong>Teléfono:</strong> ${appointment.patientPhone}</li>
      </ul>
      
      <p>Por favor, contacta al cliente lo antes posible para confirmar los detalles.</p>
      <p>Puedes ver y gestionar tus citas en tu panel de perfil.</p>
      
      <p>Atentamente,</p>
      <p>El equipo de OdontoLink</p>
    `;
  
    return sendEmail({ to: studentEmail, subject, html });
  }
