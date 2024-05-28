# BCSPro Employers Dashboard

This project is a React application built with TypeScript and Vite. It replicates the BCSPro Employers Dashboard.

## Project Structure

The main application entry point is [`src/App.tsx`](src/App.tsx). The Employers Dashboard is implemented in [`src/modules/Dashboard/Dashboard.tsx`](src/modules/Dashboard/Dashboard.tsx).

Components used in the dashboard can be found in the [`src/components/`](src/components/) directory. Notable components include:

- [`Header`](src/components/Header.tsx): The application header with navigation links.
- [`CreateNote`](src/components/CreateNote.tsx): A component for creating notes with a character limit.
- [`EmployerDetailsCard`](src/modules/Dashboard/Dashboard.tsx): A component displaying details about an employer.

## Running the Project

To run the project, first install the dependencies:

```sh
npm install