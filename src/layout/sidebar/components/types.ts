import { SidebarMenuItemProperty } from '@service';

export type SidebarMenuItemDefaultProps = {
  item: SidebarMenuItemProperty;
  onClick: () => void;
  collapsed?: boolean;
  depth?: number;
};
