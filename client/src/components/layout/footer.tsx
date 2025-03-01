export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-[#2D3E50] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Jane Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
