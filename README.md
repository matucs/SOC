# SOC Dashboard

A production-quality **Security Operations Center dashboard** built for the Genetec technical interview. Real-time event management UI with a data grid, chronological timeline, and event entry form — styled as an actual security analyst workstation.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

**Live demo:** [https://matucs.github.io/SOC/](https://matucs.github.io/SOC/) (deployed via GitHub Pages on push to `master`).

---

## Tech Choices

| Tool | Why |
|---|---|
| **Vite + React 19 + TypeScript** | Fast DX with hot module replacement; strict types catch column config and event model mismatches at compile time |
| **Zustand** | Chosen over Context because both DataGrid and Timeline need to reactively update when events are added. Selector-based subscriptions prevent unnecessary re-renders in large lists. Mirrors how you'd consume a real event stream. |
| **Tailwind CSS v4** | Utility-first styling with design tokens in CSS vars; dark theme tuned for a SOC workstation |
| **date-fns** | Lightweight, tree-shakeable — `formatDistanceToNow` for relative times, `format` for absolute display, day grouping for the timeline |

No backend. No external API calls. All 200 mock events are generated client-side by a self-contained factory. A simulated feed adds random events every 12–28 seconds to mimic live traffic. While the event form is open, new events still land in the grid but timeline refresh is deferred until the form closes.

---

## Project Structure

```
src/
  app/                         ← Application shell (header, main layout, column defs)
    header/                    ← AppHeader, live clock, event counter
    main/                      ← EventGrid + Timeline sections
    columns/                   ← APP_COLUMNS config for the data grid
  components/
    data-grid/                 ← Generic sortable / filterable / paginated table
    event-form/                ← Modal form with validation and focus management
    time-line/                 ← Day-grouped event feed with keyboard navigation
    ui/                        ← Reusable primitives (Button, Modal, Combobox, …)
      icons/                   ← Shared SVG icons
  hooks/                       ← Cross-cutting hooks (simulated feed, focus, stable callbacks)
  store/                       ← Zustand event store (split types / utils / hook)
  data/                        ← Types, mock factory, random event generator, locations
  theme/                       ← Design tokens
```

### Naming Conventions

| Kind | Folder / file pattern | Example |
|---|---|---|
| Feature modules | kebab-case folder | `data-grid/`, `event-form/`, `time-line/` |
| Sub-component groups | lowercase / camelCase folder | `pagination/`, `columnToggleDropdown/` |
| Resource folders | lowercase plural | `constants/`, `hooks/`, `strings/`, `styles/`, `types/`, `utils/` |
| React components | PascalCase file | `DataGrid.tsx`, `TimelineItem.tsx` |
| Hooks | `useXxx.ts` | `useDataGrid.ts` |
| Constants / types / styles | `Scope.constants.ts` (PascalCase scope) | `DataGrid.constants.ts` |
| Utils | `scope.utils.ts` (camelCase scope) | `dataGrid.utils.ts` |
| UI primitives | co-located next to component | `Modal/Modal.tsx`, `Modal/useModal.ts` |

---

## Architecture

**State**

- All event data lives in a single Zustand store (`useEventStore`).
- `gridEvents` and `timelineEvents` are stored separately so the timeline can defer updates while the form is open; `syncTimeline()` catches up when the form closes.
- New events are prepended via `addEvent()` with an optional `refreshTimeline` flag.

**Performance**

- Section-level store subscriptions (`EventGrid`, `TimelinePanel`) — leaf components receive props, not store access.
- `React.memo` on heavy sections and list items; `useStableHandler` for callback stability across renders.
- Derived data (filtered/sorted rows, paginated slice, timeline groups) is memoized inside hooks.
- EventForm uses an uncontrolled `<form>` + `FormData` — local validation state only; the store is updated on successful save.

**Logic extraction**

| Hook | Responsibility |
|---|---|
| `useDataGrid` | Sort, filter, pagination, column visibility |
| `useTimeline` / `useTimelineKeyboard` | Day grouping, roving focus, SR announcements |
| `useEventForm` | Validation, dirty tracking, field focus on error |
| `useSimulatedEventFeed` | Periodic random event injection |

**Simulated live feed**

`useSimulatedEventFeed` runs in `App.tsx`. While the event form is open, new events still land in the grid but timeline refresh is deferred until the form closes.

**Form overlay isolation**

The event form renders in a separate root branch (`EventFormOverlay` in `main.tsx`), not inside `App`. Opening the form or showing validation errors only re-renders the overlay. The grid, timeline, and header do not subscribe to form UI state.

---

## Accessibility

| Feature | Implementation |
|---|---|
| Timeline keyboard nav | Roving `tabIndex` — `ArrowLeft`/`Right` between day groups, `ArrowUp`/`Down` between items |
| Screen reader announcements | `aria-live="polite"` region updated on every keyboard move — group name + count, or event title + severity + location |
| Form error recovery | After validation, focus moves to the first invalid field ref |
| Success / error messages | `role="status"` + `aria-live="polite"` |
| Modal | Focus trap, `Escape` to close, `aria-modal`, focus restored to trigger on close |
| Sort headers | `aria-sort="ascending"` / `"descending"` / `"none"` on `<th>` elements |

---


## Scripts

```bash
npm run dev      # dev server on :5173
npm run build    # tsc + vite build
npm run preview  # preview production build
npm run lint     # ESLint
```
