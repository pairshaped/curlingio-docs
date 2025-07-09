# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation site for Curling IO, a curling registration and league management platform. The site provides comprehensive documentation for club managers, event organizers, and curlers.

## Common Commands

### Development
- `yarn start` - Start local development server on port 8000
- `yarn build` - Build the documentation site for production
- `yarn serve` - Serve the built site locally

### Setup
- `yarn install` - Install project dependencies (after cloning)

### Deployment
- Automatic deployment via GitHub Actions when pushing to master branch
- Manual deployment: `yarn deploy` (if needed)

## Architecture

### Documentation Structure
- `/docs/` - Main documentation content organized by user type:
  - `getting-started/` - Onboarding and basic setup
  - `club-management/` - Features for club administrators
  - `event-management/` - Tournament and event organization
  - `for-curlers/` - End-user documentation
  - `advanced/` - Advanced features and API documentation
- `/src/pages/` - Custom pages (homepage, legal pages)
- `/static/` - Static assets including images and screenshots
- `sidebars.js` - Navigation structure configuration

### Technology Stack
- **Docusaurus 2.0** - Documentation framework
- **React 16.8** - Component framework
- **MDX** - Markdown with JSX support
- **Algolia** - Search functionality

### Key Configuration Files
- `docusaurus.config.js` - Main configuration including navbar, footer, plugins
- `sidebars.js` - Documentation navigation structure
- `src/css/custom.css` - Custom styling

### Content Guidelines
- Documentation uses markdown (.md) files
- Screenshots are stored in `/static/img/docs/` organized by section
- Navigation items are configured in `sidebars.js`
- Client redirects are handled in `docusaurus.config.js`

### Development Notes
- Local development runs on port 8000
- Changes are reflected live during development
- Search is powered by Algolia with index name 'curling'
- Color mode switching is disabled in the theme configuration