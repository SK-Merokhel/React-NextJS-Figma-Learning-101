# Next.js Component Hierarchy Notes

## 1. Link Component
- **Purpose**: `Link` allows navigation between components without reloading the page.
- **Benefit**: Enables smooth, client-side transitions between pages without a full page reload.

## 2. Understanding the Hierarchy of Components

### layout.jsx
- **Function**: Acts as the main layout or "parent" component.
- **Purpose**: Wraps and controls all other nested content, providing a unified structure for the application.
- **Characteristics**:
  - Created by default in Next.js projects.
  - Must use `export default` to export the function.
  - **Parameter**: Takes a parameter called `children`, which represents the content within the layout.
  - Changes made to the `layout.jsx` will affect all children components, including:
    - `error.jsx`
    - `loading.jsx`
    - `page.jsx`

### error.jsx
- **Purpose**: Handles general error states within child components.
- **Usage**: Used to display errors caught in nested child components.
- **Rendering**: Must be a *Client Component*, since error handling is often client-specific.
- **Default Workflow**:
  - By default, Next.js components are server-side rendered.
  - For client-side error handling, use `"use client";` at the top of `error.jsx`.

### loading.jsx / Suspense
- **Purpose**: Provides a temporary loading state while waiting for content to render.
- **Functionality**: Keeps users engaged by displaying a loading indicator or placeholder until the page loads completely.

### not-found.jsx (404 error)
- **Purpose**: Displays a custom "Page Not Found" message when a user tries to access a non-existent page.
- **Common Error**: Known as a "404" error for "page not found".

### page.jsx
- **Purpose**: The primary component used to display content that is accessible to users.
- **Characteristics**: Represents the main content of a page, designed for public access.

---

## Revision Summary:
- Use `Link` to navigate without reloading.
- Understand `layout.jsx` as the parent component and its role in wrapping children.
- `error.jsx` for client-side error handling (use `"use client";`).
- `loading.jsx` to manage loading states.
- `not-found.jsx` for 404 errors.
- `page.jsx` for the main page content.

## ---------------------------------------------------------------------------- ##

Static Route: Folder created within src/app and within that folder we have to make a page.tsx file and here we will create a component. This is called a page/route known as static route.

Key points:
Route is not created by just making the folder but there needs to be a page.tsx file and a component within it.

Nested Route: Within a route having anohter route. Father folder and then within that a child folder.

