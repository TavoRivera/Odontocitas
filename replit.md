# OdontoLink - Dental Services Platform

## Overview
This is a Next.js 15 application for connecting dental students with patients. The platform allows dental students to showcase their services and skills while enabling patients to book appointments and leave reviews.

## Project Structure
- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **UI Components**: Radix UI components with custom styling
- **AI Integration**: Google Genkit AI for profile improvements and review summaries
- **Data**: Mock data structure (ready for backend integration)

## Current Status
- ✅ Configured for Replit environment (port 5000, proxy support)
- ✅ All TypeScript errors resolved
- ✅ Environment variables set up
- ✅ Development workflow working
- ✅ Deployment configuration complete

## Key Features
- Student profiles with galleries, skills, and ratings
- Service offers with pricing and categories
- Appointment booking system
- Review and rating system
- Admin dashboard
- AI-powered profile suggestions

## Technology Stack
- Next.js 15 (React framework)
- TypeScript
- Tailwind CSS
- Radix UI components
- Google Genkit AI
- React Hook Form with Zod validation

## Environment Variables
- `GEMINI_API_KEY`: For AI features (needs to be set)
- `GMAIL_USER`: Email configuration
- `GMAIL_APP_PASSWORD`: Email authentication

## Development
- Run `npm run dev` to start development server on port 5000
- Configured for Replit proxy and cross-origin requests
- Uses Turbopack for faster builds

## Recent Changes (Sep 4, 2025)
- Fixed Next.js configuration for Replit compatibility
- Resolved TypeScript type errors in data models
- Set up proper port binding (0.0.0.0:5000)
- Added cross-origin request handling
- Configured deployment for autoscale target
- Created proper home page with welcome section and platform introduction
- Added featured students section showcasing top-rated dental students
- Added featured offers section displaying services with pricing
- Fixed navigation flow - logo and login now redirect to proper landing page
- Updated project structure to separate home page from students listing