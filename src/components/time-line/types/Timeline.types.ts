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

export interface UseTimelineReturn {
  groups: TimelineGroupData[];
  focusedGroup: number;
  focusedItem: number;
  announcement: string;
  handleGroupKeyDown: (e: React.KeyboardEvent) => void;
  handleItemFocus: (groupIndex: number, itemIndex: number) => void;
  handleGroupFocus: (groupIndex: number) => void;
}

// ── TimelineGroup ─────────────────────────────────────────────────────────────
export interface TimelineGroupData {
  date: string;
  label: string;
  items: SecurityEvent[];
}

export interface TimelineGroupProps {
  group: TimelineGroupData;
  groupIndex: number;
  isFocused: boolean;
  focusedItem: number;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onItemFocus: (groupIndex: number, itemIndex: number) => void;
  onGroupFocus: (groupIndex: number) => void;
}

export interface TimelineGroupItemsProps {
  group: TimelineGroupData;
  groupIndex: number;
  isFocused: boolean;
  focusedItem: number;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onItemFocus: (groupIndex: number, itemIndex: number) => void;
}

export interface TimelineGroupHeaderProps {
  label: string;
  itemCount: number;
  isHeaderFocused: boolean;
  onFocus: () => void;
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
  isFocused: boolean;
  onItemFocus: (groupIndex: number, itemIndex: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export interface TimelineItemDotProps {
  severity: SecurityEvent['severity'];
}

export interface TimelineItemCardProps {
  event: SecurityEvent;
  relativeTime: string;
  isFocused: boolean;
  onFocus: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

// ── useTimelineKeyboard ───────────────────────────────────────────────────────
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

export interface UseTimelineKeyboardReturn {
  focusedGroup: number;
  focusedItem: number;
  announcement: string;
  handleKeyDown: (e: React.KeyboardEvent, groups: TimelineNavGroup[]) => void;
  setFocus: (group: number, item: number, groups: TimelineNavGroup[]) => void;
}
