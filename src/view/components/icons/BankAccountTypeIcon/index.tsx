import { iconsMap } from "./iconsMap";

interface BackAccountTypeIconProps {
  type: keyof typeof iconsMap;
}

export function BackAccountTypeIcon({ type }: BackAccountTypeIconProps) {
  const Icon = iconsMap[type];
  return <Icon />;
}
