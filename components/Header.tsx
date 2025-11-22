export default function Cabecalho() {
  return (
    <header className="w-full p-4 bg-white shadow-sm flex justify-between items-center">
      <h1 className="text-xl font-bold">V12 Automóveis</h1>

      <nav className="flex gap-4">
        <a href="/" className="hover:text-red-600">Início</a>
        <a href="/estoque" className="hover:text-red-600">Estoque</a>
        <a href="/contato" className="hover:text-red-600">Contato</a>
      </nav>
    </header>
  );
}
