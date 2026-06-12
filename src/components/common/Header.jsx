import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-center items-center bg-black py-3">
      <p className="text-white/80 leading-tight text-sm">
        Your Best Loan Offer Is Just One
        <span className="text-white">
          <Link href="#nowhere"> Click Away!</Link>
        </span>
      </p>
    </div>
  );
}
export default Header
