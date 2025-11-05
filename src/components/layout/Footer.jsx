export default function Footer() {
  return (
    <footer className="relative bg-slate-950 mt-16">
      {/* Fade efekt */}
      <div className="pointer-events-none absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-slate-950" />
      
      {/* Sadržaj footera */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center text-sm text-white/70 relative z-10">
        © {new Date().getFullYear()} GNN Company. Sva prava zadržana.
        <span className="mx-2">•</span>
        <a
          href="/politika-privatnosti.pdf?v=1"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Politika privatnosti (PDF)
        </a>
      </div>
    </footer>
  );
}
