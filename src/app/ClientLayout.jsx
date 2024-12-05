"use client";
import 'bootstrap/dist/css/bootstrap.min.css'

import { usePathname } from "next/navigation";


export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      <main>{children}</main>
    </>
  );
}