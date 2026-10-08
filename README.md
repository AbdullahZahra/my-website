# Abdullah Zahra - Personal Blog CMS

A custom content management system built with Node.js and Express to manage and publish articles. It is designed to handle Markdown content, support bilingual rendering (English and Arabic), and provide a secure administrative dashboard.

## Features

- Markdown processing: Articles are written in Markdown, parsed using `marked`, and sanitized via `sanitize-html` to safely permit specific elements like images and video iframes.
- Bilingual rendering: Dynamic text direction switches between LTR and RTL based on the selected language of the article.
- Admin security: All CRUD routes are protected by custom middleware and `express-session`, requiring environment variable credentials to access.
- Syntax highlighting: Integrated Highlight.js for code block formatting.
- Responsive UI: Frontend layout built with Bootstrap 5 and custom CSS grid.

## Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB Atlas, Mongoose
- Views: EJS
- Styling: Bootstrap 5
- Authentication: express-session

##

1. Configure environment variables:
   Create a `.env` file in the root directory and define the following variables:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_atlas_connection_string
   SESSION_SECRET=your_random_session_secret
   ADMIN_USERNAME=your_username
   ADMIN_PASSWORD=your_password
   ```

## Directory Structure

- `/controllers` - Logic for route handling and database interactions.
- `/middleware` - Route protection and authentication checks.
- `/models` - Mongoose database schemas.
- `/public` - Static files (CSS, images, favicon).
- `/routes` - URL routing definitions.
- `/views` - EJS templates for the public frontend and admin panel.
