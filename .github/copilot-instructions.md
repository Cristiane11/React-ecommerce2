# React E-commerce Copilot Instructions

## Project Architecture
This is a React + TypeScript e-commerce app using Vite, TanStack Query, and React Context for state management. The app fetches product data from the FakeStore API and displays it with Bootstrap styling.

### Key Technology Stack
- **Build Tool**: Vite with React plugin
- **State Management**: React Context with useReducer pattern + TanStack Query for server state
- **Styling**: Bootstrap 5 + React Bootstrap components
- **Routing**: React Router DOM v7
- **API Client**: Axios with base URL configuration
- **Type Safety**: Strict TypeScript with separate type definitions

### Core Architecture Pattern
The app follows a **Provider + Context + Query** pattern:
1. `ProductContext` manages client state using useReducer 
2. TanStack Query handles server state and caching
3. Components consume both via custom hooks

## Essential File Structure
```
src/
├── api/api.ts           # Axios client with FakeStore API integration
├── context/             # React Context with reducer pattern
├── types/types.ts       # Central type definitions (Product, Category)
├── components/          # Reusable UI components with Bootstrap
└── pages/              # Route-level components
```

## Development Patterns

### State Management Pattern
Use the established **Context + Reducer** pattern found in `src/context/ProductContext.tsx`:
- Actions must follow the union type: `{type: string; payload: any}`
- Always extend `ProductState` interface for context types
- Use custom hook `useProductContext()` - never access context directly
- Server state via TanStack Query, client state via Context

### Component Conventions
- All components use React.FC with explicit prop typing: `React.FC<{product: Product}>`
- Bootstrap classes are preferred: `className="d-flex flex-wrap justify-content-center"`
- Import Bootstrap CSS in main files: `import 'bootstrap/dist/css/bootstrap.min.css'`
- Use React Bootstrap components: `Card`, `Button`, `Navbar`, `Container`

### API Integration Pattern
Follow the established pattern in `src/api/api.ts`:
- Axios client with predefined baseURL: `https://fakeStoreapi.com`
- Return typed AxiosResponse: `Promise<AxiosResponse<Product[]>>`
- TanStack Query integration with queryKey arrays: `['products']`

### Type Safety Approach
- Central type definitions in `src/types/types.ts`
- Product interface matches FakeStore API exactly (id, title, price, description, category, image, rating)
- Use `type` for unions, `interface` for objects
- Import types with `type` keyword: `import type {Product} from '../types/types'`

## Development Workflows

### Running the App
```bash
npm run dev          # Start development server (Vite)
npm run build        # TypeScript compile + Vite build
npm run lint         # ESLint with TypeScript rules
npm run preview      # Preview built app
```

### Code Quality Standards
- ESLint config includes React Hooks and TypeScript rules
- Strict TypeScript configuration (`tsconfig.app.json`)
- React Refresh for fast development updates

## Critical Integration Points

### Context-Query Integration
In `src/pages/Home.tsx`, note the pattern:
- TanStack Query fetches data with `useQuery`
- `useEffect` dispatches to Context when data arrives
- Components consume from Context, not directly from Query

### Bootstrap Integration
- Global Bootstrap CSS imported in App.tsx
- React Bootstrap components used throughout
- Custom Bootstrap classes for layout: `col-md-4 col-lg-3 p-2`

### Router Setup
- BrowserRouter wraps the entire app in `App.tsx`
- Navigation via React Bootstrap Navbar with `as={Link}` pattern
- Route definitions use element prop: `<Route path="/" element={<Home/>} />`

## Known Issues & Patterns
- Action type mismatch in Home.tsx: uses 'SET_PRODUCTS' but reducer expects 'SET_PRODUCT'
- Commented-out fetch logic in Home.tsx shows evolution from native fetch to TanStack Query
- Profile page displays products but lacks proper UI formatting
- Navigation includes Cart link but no Cart route exists yet

When extending this codebase, maintain the established Context+Query pattern, use Bootstrap consistently for styling, and ensure TypeScript types match the FakeStore API structure.