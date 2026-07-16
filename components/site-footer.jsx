import { Phone, Mail } from 'lucide-react'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.47-4.05 4.17v2.33H7.8V13h2.7v8h3z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.75 3h3.05l-6.66 7.62L22 21h-6.13l-4.8-6.28L5.58 21H2.53l7.12-8.14L2 3h6.28l4.34 5.74L17.75 3zm-1.07 16.2h1.69L7.4 4.7H5.59l11.09 14.5z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  )
}

const columns = [
  ['About Us', 'Programs'],
  ['Coaches', 'Amenities'],
  ['News', 'Blogs'],
  ['Matches'],
  ['Events'],
  ['FAQs'],
]

const socials = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: YoutubeIcon, label: 'YouTube' },
]

export default function SiteFooter() {
  return (
   <footer className="bg-white py-16 text-black">
  <div className="mx-auto max-w-[1200px] px-6">

    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[180px_1fr]">

      {/* Left Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="SSA"
          className="w-[110px]"
        />
      </div>

      {/* Right Content */}
      <div>

        {/* Menu */}
        <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-x-16 pb-10">
          {columns.map((col, i) => (
            <ul key={i} className="space-y-8">
              {col.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[18px] font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-400"></div>

        {/* Bottom */}
        <div className="grid grid-cols-2 pt-10">

          {/* Contact */}
          <div>
            <h4 className="text-[24px] font-semibold text-[#A6CE39]">
              Signature Slam Academy
            </h4  >

            <p className="mt-8 text-xl">
              30 Wills Hill Road, Lovedale, NSW
            </p>

            {/* <div className="mt-6 flex items-center gap-3">
              <Phone className="text-[#A6CE39]" />
              +91 5642589752
            </div>

            <div className="mt-4 flex items-center gap-3">
              <Mail className="text-[#A6CE39]" />
              info@signatureslam.com
            </div> */}
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#A6CE39]">
              Connect with us
            </h3>

            <div className="mt-8 flex gap-8">
              {socials.map(({ icon: Icon, label }) => (
                <a key={label}>
                  <Icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>

    {/* <p className="mt-16 text-center text-sm">
      © 2026 Signature Slam Academy. All rights reserved.
    </p> */}

  </div>
</footer>
  )
}
