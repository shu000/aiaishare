# installation

This is a memo for installation commands to set up the development environment.

```
# Install Node.js and pnpm before the followings.

# Vite
$ pn create vite

# Prettier
$ pn i -D prettier eslint-config-prettier

## Edit eslintrc.cjs
$ vi ./eslintrc.cjs
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
+       'prettier',
    ],
@@
    },
+   ignorePatterns: ['/*.cjs'],
};

# TailwindCSS
$ pn i -D tailwindcss postcss autoprefixer
$ pn dlx tailwindcss init

## Edit postcss.config.cjs
$ vi ./postcss.config.cjs
+module.exports = {
+  plugins: {
+    tailwindcss: {},
+    autoprefixer: {},
+  }
+}

## Edit main.css
$ vi ./src/main.css
+@tailwind base;
+@tailwind components;
+@tailwind utilities;

## Edit main.tsx
$ vi ./src/main.tsx
-import './index.css';
+import './main.css';
```
