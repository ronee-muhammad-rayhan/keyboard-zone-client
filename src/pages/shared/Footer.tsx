import logo from "@/assets/keyboard-zone-logo-react.svg";

export default function Footer() {
  return (
    <div>
      {" "}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex justify-center items-center gap-2">
              <img
                className="rounded-full size-5"
                src={logo}
                alt="KeyboardZone-logo"
              />
              <p className="flex">
                Keyboard Zone &copy; 2024{" "}
                <span className="hidden sm:block">. All rights reserved.</span>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="/about" className="hover:text-white">
                About Us
              </a>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
