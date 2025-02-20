import React from "react";

const App: React.FC = () => {
  return (
    <div className="glitch-effect fade-in text-white min-h-screen flex flex-col items-center justify-center px-6">
      
      {/* 🔥 Header */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg py-4 px-6 flex justify-between items-center z-50">
        <h1 className="text-2xl font-extrabold tracking-wide uppercase glitch-text">
          Wekerio
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-purple-400 transition">Inicio</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Eventos</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* 🔥 Hero Section */}
      <main className="mt-20 flex flex-col items-center">
        <h1 className="text-6xl font-extrabold tracking-wide uppercase glitch-text text-white">
          Wekerio
        </h1>
        <p className="mt-4 text-gray-300 text-lg text-center max-w-xl">
          Explora el universo del <span className="text-purple-400">Hard Techno</span>, 
          <span className="text-purple-500"> Hard Bounce</span> y <span className="text-purple-600">Schranz</span>.
        </p>
        <button className="mt-6 px-8 py-3 border-2 border-purple-600 text-purple-400 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all">
          Explorar
        </button>
      </main>

      {/* 🔥 Sección de Redes Sociales con SVG */}
      <section className="mt-16 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Síguenos</h2>
        <div className="mt-4 flex space-x-6">
          {/* Instagram */}
          <a href="https://www.instagram.com/wekerioplus/" className="glitch-hover text-gray-400 hover:text-purple-400 transition text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C3.7 2 2 3.7 2 7v10c0 3.3 1.7 5 5 5h10c3.3 0 5-1.7 5-5V7c0-3.3-1.7-5-5-5H7zm5 3a4.7 4.7 0 014.7 4.7A4.7 4.7 0 0112 14.4a4.7 4.7 0 01-4.7-4.7A4.7 4.7 0 0112 5zm0 1.8a2.9 2.9 0 00-2.9 2.9A2.9 2.9 0 0012 12.6a2.9 2.9 0 002.9-2.9A2.9 2.9 0 0012 6.8zM17.6 6a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/" className="glitch-hover text-gray-400 hover:text-purple-400 transition text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 2h3.5c0 .9.2 1.8.5 2.6.4 1.1 1.1 2 2 2.7.9.6 2 .9 3 .9v3.5a6.8 6.8 0 01-4-1.3v4.4c0 1.2-.3 2.4-.9 3.4-.6 1-1.5 1.9-2.5 2.4-1.1.6-2.4.9-3.7.8-1.3 0-2.5-.4-3.5-1.1a6.7 6.7 0 01-2.4-2.9c-.5-1.2-.7-2.5-.5-3.8a6.6 6.6 0 011.1-3 6.7 6.7 0 012.9-2.4c1.2-.5 2.5-.7 3.8-.5V15c-.5 0-1 .1-1.5.3-.5.2-1 .5-1.4 1a2.9 2.9 0 00-.9 1.5 3 3 0 002.6 3.5c.9.1 1.9-.2 2.6-.8.6-.6 1-1.5 1-2.4V2z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/" className="glitch-hover text-gray-400 hover:text-purple-400 transition text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.6 2c-1 0-2.1.1-3.1.3-.8.2-1.5.5-2.2.9a6 6 0 00-2.2 2.2c-.4.7-.7 1.4-.9 2.2A18.4 18.4 0 000 12c0 1 .1 2 .3 3 .2.8.5 1.5.9 2.2a6 6 0 002.2 2.2c.7.4 1.4.7 2.2.9 1 .2 2 .3 3 .3h3.2v-6.7h-2.3v-2.6h2.3v-2c0-2.2 1-3.3 3-3.3.8 0 1.6 0 2.4.2v2.7H15c-.5 0-.9.4-.9 1v1.6h2.9l-.5 2.6h-2.4v6.7h3.5c1 0 2-.1 3-.3a7 7 0 002.2-.9c.7-.4 1.4-1 2-1.6a6 6 0 001.6-2.2c.4-.7.7-1.4.9-2.2A18.4 18.4 0 0024 12c0-1-.1-2-.3-3a7 7 0 00-.9-2.2 6 6 0 00-2.2-2.2c-.7-.4-1.4-.7-2.2-.9-1-.2-2-.3-3-.3h-3.8z"/>
            </svg>
          </a>
        </div>
      </section>

    </div>
  );
};

export default App;
