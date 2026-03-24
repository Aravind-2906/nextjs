import Link from "next/link";

function Navbar()
{
    return(
        <div className="navbar">
            <Link href="/">Home</Link>
            <Link href="/course">Courses</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
}

export default Navbar;