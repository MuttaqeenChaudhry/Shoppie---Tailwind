1 - npm install -D tailwindcss postcss autoprefixer
2 - npx tailwindcss init -p
3 - Put ==  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], inside module.export objects in the newly created file tailwind.config.js
4 - Put Tailwind Directives in index.css, which are :: 
@tailwind base;
@tailwind components;
@tailwind utilities;
