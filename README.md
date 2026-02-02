# KVTC-DBMS

A comprehensive Database Management System for KVTC (School) built with modern web technologies. This system provides role-based access control for administrators and staff to manage student records, view reports, and track system usage.

## Tech Stack

### Frontend
- **Next.js 15.3.3** - React framework with Pages Router
- **React 19.0.0** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript 5** - Type-safe JavaScript

### Backend & Database
- **Supabase** - Backend as a Service (BaaS)
  - PostgreSQL database
  - Authentication & Authorization
  - Row Level Security (RLS)
  - Real-time subscriptions

### Development Tools
- **Turbopack** - Fast bundler for development
- **PostCSS & Autoprefixer** - CSS processing
- **npm** - Package manager

## Features

### Authentication & User Management
- User registration with role selection (Admin/Staff)
- Secure login with email and password
- Password reset functionality via email
- Role-based access control
- Session management

### Student Management
- Student record management
- Advanced search with filters (by name, gender, etc.)
- Student profile viewing
- Report generation and viewing

### Dashboard Features
- **Admin Dashboard**
  - Full access to all student records
  - Report download capabilities
  - Advanced search and filtering
  - System administration tools

- **Staff Dashboard**
  - View-only access to student reports
  - Search and filter students
  - Report viewing with restrictions (no download)
  - View tracking for audit purposes

### Security Features
- Row Level Security (RLS) policies
- Role-based page access
- Secure authentication through Supabase Auth
- Password validation and encryption
- View-only restrictions for staff reports
- Report view tracking for audit trails

## Prerequisites

- Node.js 20+ installed
- npm or yarn package manager
- Supabase account and project
- Git (for version control)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd KVTC-DBMS
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Supabase

#### Option A: Using Environment Variables (Recommended for Next.js pages)

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

#### Option B: Using Config File (For HTML pages)

Update `public/KVTC/config.js` with your Supabase credentials:

```javascript
const SUPABASE_CONFIG = {
    url: 'https://your-project-id.supabase.co',
    anonKey: 'your-anon-key-here'
};
```

To get your Supabase credentials:
1. Go to your Supabase project dashboard
2. Navigate to **Settings > API**
3. Copy your **Project URL** and **anon public** key

### 4. Database Setup

Run the SQL scripts in your Supabase SQL Editor:

1. **User Table** (`pages/KVTC/script.sql`)
   - Creates the User table with role-based access

2. **Report Views Tracking** (`pages/KVTC/report_views_migration.sql`)
   - Creates the `report_views` table for tracking staff report views
   - Sets up indexes and RLS policies

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
KVTC-DBMS/
├── lib/
│   └── supabaseClient.js      # Supabase client configuration
├── pages/
│   ├── index.js               # Home page
│   ├── details.js             # Student details page
│   ├── upload.js              # File upload page
│   ├── students/
│   │   └── [id].js           # Dynamic student page
│   └── KVTC/
│       ├── login.html         # Login page
│       ├── signup.html        # Registration page
│       ├── role-selection.html # Role selection
│       ├── home.html          # Home dashboard
│       ├── admin-dashboard.html # Admin dashboard
│       ├── staff-dashboard.html # Staff dashboard
│       ├── script.sql         # Database schema
│       └── report_views_migration.sql # Report tracking migration
├── public/
│   └── KVTC/
│       └── config.js          # Supabase config for HTML pages
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Usage

### For Users

1. **Registration**
   - Navigate to role selection page
   - Choose Admin or Staff role
   - Complete registration form
   - Verify email (if required)

2. **Login**
   - Enter email and password
   - Access dashboard based on role
   - Use "Forgot Password?" if needed

3. **Student Management**
   - Search students using the search bar
   - Apply filters (gender, etc.)
   - View student profiles and reports
   - Download reports (Admin only)

### For Developers

#### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Security Considerations

- All database operations use Row Level Security (RLS)
- Passwords are hashed and never stored in plain text
- API keys are stored in environment variables
- Staff users have view-only access to reports
- Report viewing is tracked for audit purposes

**Note:** View-only restrictions work best within the application. For enterprise-level security, consider:
- PDF watermarking
- DRM solutions
- Server-side access controls
- Time-limited access tokens

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy on Netlify

The project includes `netlify.toml` configuration. Deploy by:

1. Connect your repository to Netlify
2. Add environment variables
3. Deploy automatically on push

## 📝 Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Testing

Refer to `IMPLEMENTATION_SUMMARY.md` for a detailed testing checklist.

## Additional Documentation

- `IMPLEMENTATION_SUMMARY.md` - Detailed feature implementation guide
- `pages/KVTC/README.md` - KVTC module specific documentation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For issues and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for KVTC**
