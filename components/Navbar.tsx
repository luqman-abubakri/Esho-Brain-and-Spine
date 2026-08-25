import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6">
        <div>
            <Link href="/"><Image src="/logo.png" alt="Logo" width={200} height={50} /></Link>
        </div>
        <div>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Home</Link>
        </div>
    </nav>
  )
}

export default Navbar
