import { memo } from 'react';
import type { SectionHeaderProps } from './SectionHeader.types';
import { sectionHeaderClass, sectionTitleClass, sectionHeaderStyle } from './SectionHeader.styles';

export const SectionHeader = memo(function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className={sectionHeaderClass} style={sectionHeaderStyle}>
      {icon}
      <span className={sectionTitleClass}>{title}</span>
    </div>
  );
});
