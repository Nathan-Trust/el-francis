# Elfrancis International School Website

A modern, professional website for Elfrancis International School built with Next.js, featuring a beautiful blue theme and comprehensive contact functionality.

## Features

- **Modern Design**: Professional blue theme with responsive layout
- **Contact Integration**: Resend email service with React Email templates
- **WhatsApp Integration**: Direct WhatsApp messaging for instant communication
- **Nigerian Context**: Culturally relevant content and imagery
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Proper meta tags and semantic HTML

## Pages

- **Home**: Hero section, mission/vision, programs overview, and call-to-action
- **About**: Detailed information about the school, values, and achievements
- **Contact**: Contact form with email integration and multiple contact methods

## Environment Variables

To run this project, you'll need to add the following environment variables:

\`\`\`env
# Resend API Key for email functionality
RESEND_API_KEY=your_resend_api_key_here

# Development redirect URL for email confirmations (optional)
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Add your environment variables to `.env.local`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contact Features

- **Email Forms**: Professional contact forms with validation
- **WhatsApp Integration**: Direct messaging with pre-filled templates
- **Phone Integration**: Click-to-call functionality
- **Email Templates**: Beautiful HTML email templates using React Email

## Deployment

This project is optimized for deployment on Vercel. Simply connect your repository and deploy with one click.

## Technologies Used

- Next.js 14
- React 19
- TypeScript
- Tailwind CSS
- Resend (Email Service)
- React Email (Email Templates)
- Lucide React (Icons)
- Radix UI (Components)
