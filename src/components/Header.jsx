function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="font-bold text-xl">HEARTSTRING</div>
      <nav className="space-x-4">
        <a href="#">Home</a>
        <a href="#">Collections</a>
        <a href="#">Investment</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
