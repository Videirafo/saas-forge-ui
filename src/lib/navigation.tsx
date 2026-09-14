import {
  ChartBar,
  CirclesFour,
  CreditCard,
  Lightning,
  Robot,
  SlidersHorizontal,
  UsersThree,
} from "@phosphor-icons/react";

export const navigation = [
  { label: "Overview", icon: CirclesFour, badge: null },
  { label: "Customers", icon: UsersThree, badge: "428" },
  { label: "Revenue", icon: ChartBar, badge: null },
  { label: "Automation", icon: Lightning, badge: "7" },
  { label: "AI agents", icon: Robot, badge: "3" },
  { label: "Billing", icon: CreditCard, badge: null },
  { label: "Settings", icon: SlidersHorizontal, badge: null },
] as const;
