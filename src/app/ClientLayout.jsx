"use client";
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

import { usePathname } from "next/navigation";


export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
          {!isDashboard && <Header />}
           <main>{children}</main>
    </>
  );
}