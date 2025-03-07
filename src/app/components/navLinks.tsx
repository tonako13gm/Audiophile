import Link from "next/link";

export default function Navlinks() {
  return (
    <>
      <div className="group">
        <Link href="#" className="uppercase group-hover:text-primaryDark">Home</Link>
      </div>
      <div className="group">
        <Link href="#" className="uppercase group-hover:text-primaryDark">Headphones</Link>
      </div>
      <div className="group">
        <Link href="#" className="uppercase group-hover:text-primaryDark">Speakers</Link>
      </div>
      <div className="group">
        <Link href="#" className="uppercase group-hover:text-primaryDark">Earphones</Link>
      </div>
    </>
  )
}

