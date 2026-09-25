# Abdullah Zahra - Personal Web Platform

## Overview
A dynamic, MVC-patterned web application serving as a personal portfolio and bilingual publication platform. The system is engineered to distribute content across software engineering, digital marketing, and media buying domains tailored for the MENA region. It features a custom rendering engine that programmatically adapts UI directionality and typography based on the language metadata of the localized content.

## Architecture & Tech Stack
- **Runtime Environment:** Node.js
- **Web Framework:** Express.js
- **Templating Engine:** EJS (Embedded JavaScript)
- **Frontend UI:** HTML5, CSS3, Bootstrap 5
- **Design Pattern:** Model-View-Controller (MVC)
- **Localization:** Inter (EN - LTR) / Cairo (AR - RTL)

## Current Status
The project is currently in the MVP (Minimum Viable Product) phase of active development. The foundational MVC architecture, dynamic routing, and bilingual rendering logic are fully operational.

**Implemented Capabilities:**
- **MVC Architecture:** Strict separation of data structures (Models), request handling logic (Controllers), and rendering (Views).
- **Context-Aware Rendering:** EJS templates conditionally compile text direction (LTR vs RTL) and font payload loading based on the `language` flag of the requested data object.
- **Administrative Interface:** Unrestricted backend route providing a data ingestion form for new publications.

**Development Roadmap:**
- **Data Persistence:** Migration from the current in-memory mock data store to a persistent database solution (e.g., PostgreSQL or MongoDB).
- **Authentication:** Implementation of secure session management and authorization middleware to protect the `/admin` endpoints.
- **Content Parsing:** Integration of a Markdown compiler to support rich text formatting, code blocks, and syntax highlighting within the article payloads.

## Directory Structure
```text
my-website/
├── server.js                 # Application bootstrap and middleware configuration
├── models/
│   └── articleModel.js       # Data schemas and repository methods
├── controllers/
│   └── articleController.js  # Route handlers and business logic
├── routes/
│   └── index.js              # Endpoint definitions and controller mapping
├── views/                    
│   ├── index.ejs             # Root view component
│   ├── article.ejs           # Dynamic article view component
│   └── admin.ejs             # Data entry view component
└── public/                   # Static asset delivery directory