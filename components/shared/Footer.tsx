import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className="flx-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
        <Image 
        src="/assets/images/assemble-logo.svg"
        alt="logo"
        width={135}
        height={38}
        />
        </Link>

        <p>2024 Assemble. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer