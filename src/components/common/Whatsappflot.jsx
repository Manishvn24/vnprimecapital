import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/916265118905?text=Hi,%20I%20would%20like%20to%20check%20my%20loan%20offers."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={34} />
    </Link>
  );
}
