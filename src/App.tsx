import { Download } from 'lucide-react';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Votre_texte_de_paragraphe.png')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/45" />

      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
        <div className="content-blur-backing absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70vh] backdrop-blur-[2px] pointer-events-none" />

        <div className="relative z-10">
          <h1 className="mb-8 md:mb-10 px-4 max-w-5xl">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Claim Up to{' '}
              <span
                className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent float-number whitespace-nowrap"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 165, 0, 0.6)) drop-shadow(0 0 40px rgba(255, 140, 0, 0.4))',
                }}
              >
                135
              </span>
              <span className="block mt-1">Launch Rewards</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 md:mb-14 max-w-3xl px-4 leading-relaxed font-light">
            Enter Talos-II in a real-time tactical RPG experience. High-quality graphics. Free to play.
          </p>

          <button
            className="group relative px-16 sm:px-18 md:px-24 py-6 sm:py-7 text-xl sm:text-2xl md:text-3xl font-bold text-black bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-xl shadow-2xl cta-pulse-scale overflow-hidden"
            onClick={() => {
              window.location.href = 'http://to.wendiro.com/o?k=98099624c17e486ca92ac5061e7f9b35&via=7155';
            }}
          >
            <span className="relative z-10 flex items-center gap-3 sm:gap-4">
              <Download className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              Get Access Now
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <p className="mt-8 text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
            PC Version Available
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
