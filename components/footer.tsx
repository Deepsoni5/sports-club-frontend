import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Navigate to link</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Navigate to link</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Sports St</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">{/* Add social media icons here */}</div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-sm text-center">
          <p>© 2024 Sports Ground. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

