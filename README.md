# Blog-in-Author

A modern, full-featured blogging platform built with React and Vite. Create, edit, and manage blog posts with a rich text editor, user authentication, and responsive design.

## Features

- **User Authentication**: Secure signup and login system with JWT token management
- **Rich Text Editor**: Integrate TinyMCE for advanced blog post editing
- **Blog Management**: Create, read, and view blog posts with metadata
- **Comments System**: Enable reader engagement with post comments
- **Protected Routes**: Secure pages that require authentication
- **Fast Performance**: Built with Vite for optimal build times and development experience

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.7.1
- **Text Editor**: TinyMCE React 6.3.0
- **UI Icons**: Lucide React 0.536.0
- **Date Utilities**: date-fns 4.1.0
- **Linting**: ESLint 9.30.1

## Project Structure

```
blog-in-author/
├── src/
│   ├── components/
│   │   ├── Blog.jsx              # Blog listing component
│   │   ├── BlogEditor.jsx        # Blog editor interface
│   │   ├── Comment.jsx           # Comment component
│   │   ├── Footer.jsx            # Footer component
│   │   ├── Header.jsx            # Header/navigation component
│   │   ├── Home.jsx              # Home page
│   │   ├── LoginForm.jsx         # Login form
│   │   ├── Post.jsx              # Individual post component
│   │   ├── PostForm.jsx          # Post creation/editing form
│   │   ├── PostPage.jsx          # Full post page view
│   │   └── SignupForm.jsx        # User registration form
│   ├── styles/
│   │   ├── Blog.css
│   │   ├── Form.module.css
│   │   ├── Header.css
│   │   ├── PostForm.module.css
│   │   └── PostPage.css
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── AppContext.jsx            # Global context setup
│   ├── AppProvider.jsx           # Context provider component
│   ├── ProtectedRoutes.jsx       # Route protection wrapper
│   ├── routes.jsx                # Route configuration
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── public/                        # Static assets
├── index.html                    # HTML template
├── package.json                  # Project dependencies
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
├── vercel.json                   # Vercel deployment config
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-in-author
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or the port specified by Vite).

## Available Scripts

### Development
```bash
npm run dev
```
Runs the application in development mode with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates an optimized production build. Output is generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deployment.

### Lint
```bash
npm run lint
```
Run ESLint to check code quality and style issues.

## Usage

### Authentication Flow

1. **Sign Up**: Create a new account at `/signup`
2. **Log In**: Sign in at `/login` to receive a JWT token
3. **Token Storage**: JWT is stored in localStorage for session management

### Creating a Blog Post

1. Navigate to the post creation page (`/posts/create`) after logging in
2. Fill in the post details using the rich text editor
3. Submit to publish the post

### Viewing Posts

- **Home Page**: View all published blog posts
- **Post Detail**: Click on a post to view the full content and comments
- **Edit/Delete**: Manage your own posts from the post detail page

## State Management

The application uses React Context API for global state management:

- **AppContext**: Manages authentication state and JWT token
- **loggedIn**: Boolean flag for user authentication status
- **saveJwtToken()**: Store user token after login
- **logUserOut()**: Clear session on logout

## Styling

The project uses CSS modules for component-scoped styling and global CSS for shared styles:
- **Module files**: `Form.module.css`, `PostForm.module.css`
- **Global styles**: Individual CSS files per component

## Deployment

The project is configured for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy on push

See `vercel.json` for deployment configuration.