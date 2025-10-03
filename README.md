# Frontend recruitment task - pesi.pl

Recreated a website project based on a [Figma design](https://www.figma.com/design/dRoAW0wC7mY84DGQg0ZbAE/zadanie_testowe_wczesnoszkolni) as part of a recruitment task for **pesi.pl**.

## Tech stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/) (prepared for future scaling)

## Architecture & state management

The project structure includes **Redux Toolkit** for potential centralized state management.  
Currently, the application state is handled with native React hooks (`useState`, `useEffect`, etc.).

## UX & interactions

The **TopBar** component supports:

- mobile devices,
- keyboard navigation,
- mouse navigation.

⚠️ Note: when switching views in DevTools (e.g., mobile ↔ desktop), the page needs to be **refreshed** so the correct navigation controls for the given device are loaded.

---

## Deployment

The project is deployed on [Vercel](https://vercel.com/).

Live preview: [sd91pl-wczesnoszkolni.vercel.app](https://sd91pl-wczesnoszkolni.vercel.app)

---

## Installation & Usage

To run the project locally:

```bash
# clone the repository
git clone https://github.com/SD91PL/wczesnoszkolni.git

# navigate to the project folder
cd wczesnoszkolni

# install dependencies
npm install

# start the development server
npm run dev
```
