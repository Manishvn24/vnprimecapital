import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VN Prime Capital",
  description: "VN Prime Capital is a leading financial services and loan distribution company providing customized financing solutions across India. We specialize in Business Loans, Doctor Loans, Overdraft (OD) Facilities, Working Capital Finance, Home Loans, Loan Against Property (LAP), and Personal Loans for salaried professionals. Our mission is to simplify the borrowing process by connecting clients with the most suitable banking and financial partners through expert guidance, transparent service, and fast approvals. With a customer-first approach and a strong network of leading banks and NBFCs, VN Prime Capital helps doctors, business owners, professionals, and salaried individuals achieve their financial goals with confidence and convenience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
      {children}
      </body>
    </html>
  );
}
