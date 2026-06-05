import type React from 'react';
import type { SecurityEvent } from '../../../data/types';

// ── Timeline ──────────────────────────────────────────────────────────────────
export interface TimelineProps {
  events: SecurityEvent[];
}

export interface TimelineHeaderProps {
  eventCount: number;
  groupCount: number;
}

export interface TimelineEmptyProps {
  /** Override default empty message */
  message?: string;
}

// ── TimelineGroup ─────────────────────────────────────────────────────────────
export interface TimelineGroupData {
  date: string;
  label: string;
  items: SecurityEvent[];
}

export type TimelineRegisterNode = (
  groupIndex: number,
  itemIndex: number,
  el: HTMLElement | null,
) => void;

export interface TimelineGroupProps {
  group: TimelineGroupData;
  groupIndex: number;
  registerNode: TimelineRegisterNode;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export interface TimelineGroupItemsProps {
  group: TimelineGroupData;
  groupIndex: number;
  registerNode: TimelineRegisterNode;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export interface TimelineGroupHeaderProps {
  label: string;
  itemCount: number;
  groupIndex: number;
  registerNode: TimelineRegisterNode;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export interface TimelineGroupHeaderContentProps {
  label: string;
  itemCount: number;
}

export interface TimelineItemProps {
  event: SecurityEvent;
  itemIndex: number;
  groupIndex: number;
  registerNode: TimelineRegisterNode;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export interface TimelineItemDotProps {
  severity: SecurityEvent['severity'];
}

export interface TimelineItemCardProps {
  event: SecurityEvent;
  relativeTime: string;
  groupIndex: number;
  itemIndex: number;
  registerNode: TimelineRegisterNode;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

// ── Timeline navigation ───────────────────────────────────────────────────────
export interface TimelineNavItem {
  id: string;
  title: string;
  severity: string;
  location: string;
}

export interface TimelineNavGroup {
  date: string;
  label: string;
  items: TimelineNavItem[];
}

export interface TimelineFocusPosition {
  group: number;
  item: number;
}

