import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Invoices",
    template: "%s | Invoices",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
