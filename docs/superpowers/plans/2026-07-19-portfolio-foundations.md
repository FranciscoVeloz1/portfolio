# Portfolio Foundations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the portfolio more accessible, reliable, testable, and polished without changing its content model, public deployment model, or visual identity.

**Architecture:** Keep the Vite/React SPA and resume-data adapter as the source of truth. Add an isolated Vitest test harness for deterministic utilities, move theme state into an explicit React state model seeded before first paint, and make semantic/interaction fixes at the component boundaries. Preserve `HashRouter` in this phase; normalize only the routes generated within it.

**Tech Stack:** React 18, React Router 6, Vite 7, Vitest, Testing Library, ESLint, GitHub Actions Pages.

## Global Constraints

- Keep GitHub Pages deployment at `/portfolio/` and keep `HashRouter` for this phase.
- Do not modify resume content or remove public contact information.
- Use semantic native HTML controls, visible keyboard focus, and descriptive accessible names.
- Keep all user-facing motion under `prefers-reduced-motion`.
- Write a failing test before each new testable utility or behavior change.

---

## File Structure

- `package.json` — test commands and test development dependencies.
- `vite.config.js` — Vitest environment and setup-file configuration.
- `src/test/setup.js` — DOM matcher setup and browser API shims.
- `src/util/text.js` — pure helpers for safe excerpt and paragraph rendering.
- `src/util/text.test.js` and `src/util/adapters/resumeAdapters.test.js` — regression coverage for data/display transformations.
- `src/App.jsx` and `index.html` — first-paint theme seed and route titles.
- `src/components/*` and `src/pages/*` — semantic hierarchy, accessible labels, correct control behavior, and media loading.
- `src/styles/*` — focus, motion, and responsive layout rules.
- `.github/workflows/deploy.yml` — lint and test gates before the production build.

### Task 1: Establish the test harness and adapter regression coverage

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `src/test/setup.js`
- Create: `src/util/adapters/resumeAdapters.test.js`

**Interfaces:**
- Produces: `npm run test` and `npm run test:run`, using Vitest with a jsdom environment.
- Covers: `formatProjectDate`, `adaptWorkExperience`, and `adaptProjects`.

- [ ] **Step 1: Add a failing adapter test**

```js
import { describe, expect, it } from 'vitest'
import { adaptProjects, formatProjectDate } from './resumeAdapters'

describe('formatProjectDate', () => {
  it('formats an ISO date without changing an invalid value', () => {
    expect(formatProjectDate('2026-07-19')).toBe('Jul 19, 2026')
    expect(formatProjectDate('unknown')).toBe('unknown')
  })
})

describe('adaptProjects', () => {
  it('orders newest projects first and resolves only known skills', () => {
    const projects = [{ id: 1, name: 'Old', date: '2025-01-01', skills: ['js', 'missing'] }, { id: 2, name: 'New', date: '2026-01-01', skills: ['js'] }]
    const result = adaptProjects(projects, [{ id: 'js', name: 'JavaScript' }])
    expect(result.map((project) => project.id)).toEqual([2, 1])
    expect(result[1].badges).toEqual([{ id: 'js', name: 'JavaScript' }])
  })
})
```

- [ ] **Step 2: Run the test and verify the missing test command fails**

Run: `npm run test:run`

Expected: command-not-found failure because the project has no test script.

- [ ] **Step 3: Install and configure Vitest**

Run: `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`

Add scripts:

```json
"test": "vitest",
"test:run": "vitest run"
```

Add this `test` block to `vite.config.js`:

```js
test: {
  environment: 'jsdom',
  setupFiles: './src/test/setup.js'
}
```

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom/vitest'
```

- [ ] **Step 4: Run the adapter tests**

Run: `npm run test:run -- src/util/adapters/resumeAdapters.test.js`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vite.config.js src/test src/util/adapters/resumeAdapters.test.js
git commit -m "test: add portfolio utility coverage"
```

### Task 2: Fix reusable text transformations and card duplication

**Files:**
- Create: `src/util/text.js`
- Create: `src/util/text.test.js`
- Modify: `src/components/Home/Card.jsx`
- Modify: `src/components/Projects/Card.jsx`
- Modify: `src/pages/Projects/Project.jsx`

**Interfaces:**
- Produces: `createExcerpt(text, maxLength)` and `splitParagraphs(text)`.
- Consumes: raw project descriptions.

- [ ] **Step 1: Add failing utility tests**

```js
import { describe, expect, it } from 'vitest'
import { createExcerpt, splitParagraphs } from './text'

describe('createExcerpt', () => {
  it('adds an ellipsis only when truncating', () => {
    expect(createExcerpt('Short', 100)).toBe('Short')
    expect(createExcerpt('abcdef', 3)).toBe('abc…')
  })
})

describe('splitParagraphs', () => {
  it('uses authored blank lines without corrupting abbreviations', () => {
    expect(splitParagraphs('Built with Node.js.\n\nSecond paragraph.')).toEqual(['Built with Node.js.', 'Second paragraph.'])
  })
})
```

- [ ] **Step 2: Run the test and verify it fails because the module is absent**

Run: `npm run test:run -- src/util/text.test.js`

Expected: FAIL with a module-not-found error for `./text`.

- [ ] **Step 3: Implement the pure helpers**

```js
export const createExcerpt = (text = '', maxLength = 100) => {
  return text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}…` : text
}

export const splitParagraphs = (text = '') => {
  return text.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean)
}
```

Replace unconditional `substring(... ) + '...'` in both card components with `createExcerpt(project.description)`. In `Project.jsx`, render `splitParagraphs(project.description)` directly; do not split on periods or append punctuation.

- [ ] **Step 4: Run all utility tests**

Run: `npm run test:run -- src/util`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/util/text.js src/util/text.test.js src/components/Home/Card.jsx src/components/Projects/Card.jsx src/pages/Projects/Project.jsx
git commit -m "fix: preserve project description text"
```

### Task 3: Make theme switching correct and accessible before first paint

**Files:**
- Modify: `index.html`
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/styles/Navbar.css`

**Interfaces:**
- `App` owns `theme` as `'dark' | 'white'`.
- `Navbar` accepts `theme` and `onToggleTheme`.

- [ ] **Step 1: Add an inline first-paint theme initializer**

Place this before the app module script in `index.html`:

```html
<script>
  try {
    const theme = localStorage.getItem('theme') || 'dark'
    document.body.classList.toggle('white-theme-variables', theme === 'white')
  } catch {}
</script>
```

- [ ] **Step 2: Replace the Navbar div with a named button**

```jsx
<button
  type='button'
  className='btn-toggle'
  onClick={onToggleTheme}
  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
>
  <i className={`fa-solid fa-sun ${theme === 'white' ? 'active' : ''}`} aria-hidden='true' />
  <i className={`fa-solid fa-moon ${theme === 'dark' ? 'active' : ''}`} aria-hidden='true' />
</button>
```

- [ ] **Step 3: Keep state and storage synchronized in App**

Use a lazy initializer that safely reads the stored theme, and toggle `white-theme-variables` in an effect based on `theme`. Pass `theme` and a callback that flips it to `Navbar` through `Layout`.

- [ ] **Step 4: Verify manually**

Run: `npm run dev -- --host 0.0.0.0`

Expected: initial white/dark theme has no flash; button is tabbable, its accessible name changes, and its active icon matches the selected theme.

- [ ] **Step 5: Commit**

```bash
git add index.html src/App.jsx src/components/Layout.jsx src/components/Navbar.jsx src/styles/Navbar.css
git commit -m "fix: make theme selection accessible"
```

### Task 4: Restore semantic document structure and accessible controls

**Files:**
- Modify: `src/components/Home/Showcase.jsx`
- Modify: `src/components/Home/Experience.jsx`
- Modify: `src/components/Home/Form.jsx`
- Modify: `src/pages/Projects/Project.jsx`
- Modify: `src/pages/Projects/Projects.jsx`
- Modify: `src/pages/Certificates/index.jsx`
- Modify: `src/components/Home/Card.jsx`
- Modify: `src/components/Projects/Card.jsx`
- Modify: `src/components/Home/ExperienceItem.jsx`
- Modify: `src/components/Home/CertificateItem.jsx`
- Modify: `src/components/Video.jsx`
- Modify: `src/styles/styles.css`

**Interfaces:**
- Each route has one `<h1>`; sections use `<h2>` and item titles use `<h3>`.
- Every image gets content-derived `alt`; decorative icons use `aria-hidden`.

- [ ] **Step 1: Add a failing render test for semantic page landmarks**

Render `Home` in a provider and assert `screen.getByRole('heading', { level: 1 })`, `screen.getByRole('button', { name: /view all experiences/i })`, and form fields by label exist.

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run test:run -- src/pages/Home.test.jsx`

Expected: FAIL because headings, button roles, and labels are currently absent.

- [ ] **Step 3: Apply semantic replacements**

- Change visual title `<p>` elements to the appropriate heading level without changing their class names.
- Replace the “View all experiences” click handler with `<button type='button'>`.
- Add visually associated `<label htmlFor>` elements for email and message.
- Use `role='status' aria-live='polite'` for the form status.
- Derive alt text such as `${project.title} project preview`, `${experience.company} logo`, and `${certificate.title} certificate logo`.
- Set the iframe title to `${title} project video` and add `loading='lazy'`.
- Add a `.skip-link` and `:focus-visible` rule with a high-contrast outline.

- [ ] **Step 4: Re-run the render test and lint**

Run: `npm run test:run -- src/pages/Home.test.jsx && npm run lint`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components src/pages src/styles/styles.css src/pages/Home.test.jsx
git commit -m "feat: improve portfolio accessibility semantics"
```

### Task 5: Correct responsive and motion behavior

**Files:**
- Modify: `src/styles/MediaQueries.css`
- Modify: `src/styles/Home/Card.css`
- Modify: `src/styles/Home/Showcase.css`

- [ ] **Step 1: Correct the invalid grid declaration**

Replace:

```css
max-width: minmax(270px, 1fr);
```

with:

```css
width: min(100%, 560px);
```

- [ ] **Step 2: Add a reduced-motion override**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Bound showcase content fluidly**

Replace fixed widths with `width: min(100%, 570px)` so intermediate desktop widths cannot overflow.

- [ ] **Step 4: Build and inspect desktop and mobile layouts**

Run: `npm run build`

Expected: Vite build succeeds. Inspect at 1440px and 375px: cards remain within their grid and no horizontal overflow occurs.

- [ ] **Step 5: Commit**

```bash
git add src/styles/MediaQueries.css src/styles/Home/Card.css src/styles/Home/Showcase.css
git commit -m "fix: stabilize responsive portfolio layout"
```

### Task 6: Add metadata and CI quality gates

**Files:**
- Modify: `index.html`
- Modify: `.github/workflows/deploy.yml`

- [ ] **Step 1: Add share and canonical metadata**

Add canonical, Open Graph, and Twitter meta tags using the published portfolio URL and a stable social preview image only if a real image exists. Do not point metadata at a nonexistent asset.

- [ ] **Step 2: Gate deployment on quality checks**

Insert these steps between `npm ci` and `npm run build`:

```yaml
- run: npm run lint
- run: npm run test:run
```

- [ ] **Step 3: Run the local quality gate**

Run: `npm run lint && npm run test:run && npm run build`

Expected: all commands exit 0.

- [ ] **Step 4: Commit**

```bash
git add index.html .github/workflows/deploy.yml
git commit -m "ci: validate portfolio before deployment"
```

### Task 7: Final verification and pull request

**Files:**
- Verify: all modified files.

- [ ] **Step 1: Run the full verification suite**

Run: `npm run lint && npm run test:run && npm run build`

Expected: all commands exit 0 with a production `dist/` output.

- [ ] **Step 2: Check working tree and diff**

Run: `git status -sb && git diff origin/main...HEAD --check`

Expected: clean working tree and no whitespace errors.

- [ ] **Step 3: Push and create a draft PR**

```bash
git push -u origin cursor/portfolio-improvements-4dca
```

Create a draft PR to `main` titled `Improve portfolio foundations` with summary bullets for accessibility, reliability, test coverage, responsive fixes, and CI gates.
