# Tailwind CSS 3

## Installation
1. Install Vite
    ```
     npm create vite@latest
    ```
1. Install Tailwind
    ```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```

1. Add Tailwind to your PostCSS configuration(postcss.config.js)
    ```
    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    }
    ```
1. Configure your template paths
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
            extend: {},
        },
        plugins: [],
    }
    ```
1. Add the Tailwind directives to your CSS(style.css)
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
1. Start application
    ```
    npm run dev
    ```