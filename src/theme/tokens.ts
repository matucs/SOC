/** Design tokens for JS inline styles — mirrors CSS variables in index.css */
export const tokens = {
  bgBase: '#0a0c0f',
  bgSurface: '#13171e',
  bgElevated: '#1a2030',
  bgPanel: '#0d1117',
  bgTableHeader: '#0f1318',
  accent: '#00d4ff',
  textMuted: '#64748b',
  border: '#1e2a3a',
  danger: '#ef4444',
  warning: '#f59e0b',
  warningMedium: '#eab308',
  success: '#22c55e',
  scrimHeavy: 'rgba(0,0,0,0.75)',
  scrimMedium: 'rgba(0,0,0,0.55)',
  scrimLight: 'rgba(0,0,0,0.8)',
} as const;

export const borderStyle = { borderColor: tokens.border } as const;
export const panelSurfaceStyle = { background: tokens.bgPanel, borderColor: tokens.border } as const;

export const panelShadow = '0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.05)';
export const panelShadowDanger = '0 25px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(239,68,68,0.08)';
export const dropdownShadow = '0 12px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,212,255,0.05)';
