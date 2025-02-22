# Flashcard App

This is a Next.js project for a flashcard application. It allows users to study and manage flashcard sets.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── study/[id]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   ├── data/
│   │   └── flashcards.ts
│   └── models/
│   │   └── FlashCard.ts
├── public/
│   ├── file.svg
│   └── ...
├── next.config.ts
├── tsconfig.json
├── .eslintrc.json
└── package.json
```

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ⚡️ Next.js App Router
- ⚛️ React Server Components
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- ✨ Modern UI with Radix UI and Shadcn UI components
- 💾 Local data storage (src/data/flashcards.ts)
- 🗂️ Route Groups and Layouts for organization (/dashboard, /study/[id])

## UI Components

The project uses a variety of custom and pre-built UI components, including:

- `Button`: Customizable button component (src/components/ui/button.tsx)
- `Card`: Card component for content display (src/components/ui/card.tsx)
- `DropdownMenu`: Dropdown menu component (src/components/ui/dropdown-menu.tsx)
- `Sheet`: A side drawer component (src/components/ui/sheet.tsx)
- `Header`: Application header with menu and navigation (src/components/Header.tsx)
- `Flashcard`: Reusable flashcard component (src/components/Flashcard.tsx)

## Scripts

- `dev`: Run development environment
- `build`: Build the project for production
- `start`: Start the production server
- `lint`: Run ESLint for code linting
- `test`: Run tests (if any)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building performant web applications
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - JavaScript linting tool
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS
- [clsx](https://github.com/lukeed/clsx) and [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Utilities for constructing class names

## Deployment

The project can be deployed to [Vercel](https://vercel.com), Netlify, or any other platform that supports Next.js deployments.

## License

MIT

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push to the branch
5. Create a pull request
