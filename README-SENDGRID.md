# SendGrid Email Setup

## Environment Variables

Create a `.env` file in the root directory with your SendGrid API key:

```
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

## Running the Application

### Development Mode (with email functionality):
```bash
npm run dev
```

This will start both the React app (port 3000) and the Express server (port 3001).

### Production Mode:
```bash
npm start
```

## Email Configuration

The contact form will now:
- ✅ Send emails to: rachid@prime-renovation.ca
- ✅ Include all form fields (name, email, phone, service, message)
- ✅ Show success/error messages
- ✅ Handle form validation

## Vercel Deployment

For Vercel deployment, you'll need to:
1. Add the environment variable in Vercel dashboard
2. The server.js will work as a Vercel serverless function
3. Update the API endpoint in Contact.js to use the Vercel function URL

## Testing

1. Start the development server: `npm run dev`
2. Fill out the contact form
3. Check your email at rachid@prime-renovation.ca
4. You should receive a formatted email with all the form details
