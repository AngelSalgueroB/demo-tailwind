import { useState } from 'react';

export default function App() {
  const currentYear = new Date().getFullYear();
  const [localDark, setLocalDark] = useState(false);
  const [customColor, setCustomColor] = useState('#0ea5e9');
  const [containerRange, setContainerRange] = useState(100);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900">
      
      {/* --- HEADER --- */}
      <header className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 shadow-sm z-10 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            Tailwind CSS <span className="text-sky-500">Master Showcase</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 mb-6">
            Colección de 30 componentes avanzados encapsulados. Demostración práctica de utilidades de diseño, interactividad sin JS y responsive moderno.
          </p>
          <div className="flex justify-center gap-3">
            <span className="px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold border border-sky-200 shadow-sm">React 18</span>
            <span className="px-4 py-1.5 bg-slate-50 text-slate-700 rounded-full text-sm font-bold border border-slate-200 shadow-sm">Tailwind v4</span>
          </div>
        </div>
      </header>

      {/* --- SHOWCASE GRID --- */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* 1. Profile Card */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">1. Profile Card (Flex)</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Avatares de sesión o directorios.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> flex, bg-gradient-to-tr, rounded-full</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-inner">AS</div>
                  <div><h4 className="font-bold text-sm">Angel Salguero</h4><p className="text-xs text-slate-500">Software Engineer</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Focus Rings */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">2. Focus Rings</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Accesibilidad visual en inputs.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> focus:ring-4, focus:border-sky-500</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <input type="text" placeholder="Haz clic aquí..." className="w-full bg-white px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-500/30 focus:border-sky-500 transition-all" />
            </div>
          </div>

          {/* 3. Semantic Colors */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">3. Alertas Semánticas</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Feedback de sistema (Notificaciones).</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> bg-emerald-50, text-rose-700</p>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center space-y-3 bg-dots">
              <div className="w-full p-3 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold flex items-center shadow-sm"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Operación Exitosa</div>
              <div className="w-full p-3 bg-rose-50 text-rose-700 border border-rose-200 rounded-lg text-xs font-bold flex items-center shadow-sm"><span className="w-2.5 h-2.5 rounded-full bg-rose-500 mr-2"></span> Error de conexión</div>
            </div>
          </div>

          {/* 4. Tipografía */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">4. Jerarquía Tipográfica</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Tarjetas de suscripción (SaaS).</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> tracking-widest, font-black, items-baseline</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-5 text-white">
                <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-1">Plan Pro</p>
                <div className="flex items-baseline text-4xl font-black">
                  $29<span className="text-sm font-medium text-slate-400 ml-1">/mes</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Divide */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">5. Separadores (Divide)</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Menús desplegables o tablas simples.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> divide-y, divide-slate-100</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <ul className="divide-y divide-slate-100 text-sm font-medium">
                  <li className="p-3 hover:bg-slate-50 cursor-pointer transition-colors">Perfil de usuario</li>
                  <li className="p-3 hover:bg-slate-50 cursor-pointer transition-colors">Facturación</li>
                  <li className="p-3 hover:bg-rose-50 cursor-pointer text-rose-600 transition-colors">Cerrar sesión</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Text Clip Gradient */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">6. Text Gradient Clip</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Títulos impactantes en Hero Sections.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> bg-clip-text, text-transparent</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-slate-900 rounded-xl shadow-lg p-6 flex items-center justify-center border border-slate-800">
                <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-center">
                  Innovación
                </h4>
              </div>
            </div>
          </div>

          {/* 7. Animaciones Nativas */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">7. Animaciones CSS</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Indicadores de carga e interactividad.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> animate-spin, ping, bounce, pulse</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-between bg-dots px-10">
              <div className="w-6 h-6 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
              </div>
              <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce shadow-md"></div>
              <div className="w-6 h-6 bg-slate-400 rounded-sm animate-pulse"></div>
            </div>
          </div>

          {/* 8. Aspect Ratio */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">8. Aspect Ratio (Video)</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Contenedores de iFrames (YouTube).</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> aspect-video</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-slate-800 rounded-xl shadow-sm overflow-hidden aspect-video relative flex items-center justify-center group cursor-pointer border border-slate-700">
                <svg className="w-12 h-12 text-white/50 group-hover:text-white transition-colors group-hover:scale-110 duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>

          {/* 9. Scroll Snap */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">9. Scroll Snap</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Carruseles táctiles sin librerías JS.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> snap-x, snap-mandatory, snap-center</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="flex-col w-full bg-white rounded-xl shadow-sm border border-slate-200 flex overflow-x-auto snap-x snap-mandatory hide-scroll p-3 gap-3">
                <div className="snap-center shrink-0 w-[85%] h-20 rounded-lg bg-sky-100 flex items-center justify-center font-bold text-sky-800">Slide 1</div>
                <div className="snap-center shrink-0 w-[85%] h-20 rounded-lg bg-indigo-100 flex items-center justify-center font-bold text-indigo-800">Slide 2</div>
                <div className="snap-center shrink-0 w-[85%] h-20 rounded-lg bg-rose-100 flex items-center justify-center font-bold text-rose-800">Slide 3</div>
              </div>
            </div>
          </div>

          {/* 10. Line Clamp */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">10. Line Clamp</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Previsualización de artículos de Blog.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> line-clamp-3</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                <p className="line-clamp-3 text-sm text-slate-600 font-medium leading-relaxed">
                  Esta es una descripción extremadamente larga que necesita ser truncada de manera elegante. Tailwind provee una utilidad fantástica llamada line-clamp que añade puntos suspensivos automáticamente si el texto supera el número de líneas, sin usar JS.
                </p>
              </div>
            </div>
          </div>

          {/* 11. CSS Columns */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">11. CSS Columns (Masonry)</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Galerías de fotos asimétricas.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> columns-2, break-inside-avoid</p>
            </div>
            <div className="p-6 flex-grow bg-dots">
              <div className="columns-2 gap-3 space-y-3">
                <div className="bg-sky-400 h-10 rounded-lg break-inside-avoid shadow-sm"></div>
                <div className="bg-indigo-400 h-20 rounded-lg break-inside-avoid shadow-sm"></div>
                <div className="bg-rose-400 h-12 rounded-lg break-inside-avoid shadow-sm"></div>
                <div className="bg-amber-400 h-14 rounded-lg break-inside-avoid shadow-sm"></div>
              </div>
            </div>
          </div>

          {/* 12. Mix Blend */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">12. Mix Blend Modes</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Efectos de superposición gráfica.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> mix-blend-multiply</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 h-32 flex items-center justify-center isolate relative overflow-hidden">
                <div className="w-16 h-16 bg-cyan-400 rounded-full mix-blend-multiply translate-x-4"></div>
                <div className="w-16 h-16 bg-magenta-400 rounded-full mix-blend-multiply -translate-x-4 opacity-80" style={{backgroundColor: '#ff00ff'}}></div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full mix-blend-multiply absolute translate-y-6"></div>
              </div>
            </div>
          </div>

          {/* 13. Backdrop Blur */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">13. Glassmorphism</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Modales y menús sobre imágenes.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> backdrop-blur-md, bg-white/20</p>
            </div>
            <div className="flex-grow bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600')] bg-cover bg-center p-6 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl text-white font-bold shadow-lg">
                Efecto Cristal
              </div>
            </div>
          </div>

          {/* 14. Peer State */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">14. Estilos "Peer"</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Checkboxes personalizados sin React State.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> peer, peer-checked:text-sky-600</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center space-x-3">
                <input type="checkbox" id="terms" className="peer w-5 h-5 accent-sky-500 cursor-pointer rounded" />
                <label htmlFor="terms" className="text-sm text-slate-500 peer-checked:text-sky-600 peer-checked:font-bold transition-all cursor-pointer">
                  Acepto los términos (Tócame)
                </label>
              </div>
            </div>
          </div>

          {/* 15. Group Hover */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">15. Group Hover</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Tarjetas interactivas con botones ocultos.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> group, group-hover:opacity-100</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-5 group cursor-pointer hover:bg-sky-50 hover:border-sky-200 transition-all">
                <p className="text-sm font-medium text-slate-600 group-hover:text-sky-700 transition-colors">Pasa el cursor por la tarjeta</p>
                <span className="inline-block mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-500 text-sm font-bold">→ Descubrir más</span>
              </div>
            </div>
          </div>

          {/* 16. Local Dark Mode */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">16. Local Dark Mode</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Componentes duales aislados.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> dark:bg-slate-900, dark:text-white</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className={`w-full rounded-xl shadow-sm border p-5 transition-colors duration-300 ${localDark ? 'dark bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setLocalDark(!localDark)} className="mb-3 text-xs bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-white px-3 py-1.5 rounded font-bold shadow-sm transition-colors">
                  {localDark ? 'Modo Claro' : 'Modo Oscuro'}
                </button>
                <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors">
                  <strong className="dark:text-sky-400">Este texto</strong> cambia de color.
                </p>
              </div>
            </div>
          </div>

          {/* 17. Container Queries */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">17. Container Queries (@)</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Layouts independientes de la pantalla.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> @container, @sm:flex-row</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <input type="range" min="40" max="100" value={containerRange} onChange={(e) => setContainerRange(e.target.value)} className="w-full mb-3 accent-sky-500 h-1 cursor-ew-resize" />
                <div className="@container bg-slate-50 rounded p-2 border border-slate-200 mx-auto" style={{ width: `${containerRange}%` }}>
                  <div className="flex flex-col @xs:flex-row gap-2">
                    <div className="bg-sky-500 @xs:w-1/3 h-8 rounded shrink-0"></div>
                    <div className="bg-slate-300 @xs:w-2/3 h-8 rounded flex items-center px-2 text-[10px] font-bold text-slate-600 overflow-hidden whitespace-nowrap">&lt;- Redimensiona</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 18. Transform 3D */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">18. 3D Flip Card</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Revelar información (Gamificación).</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> rotate-y-180, backface-hidden</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots" style={{ perspective: '1000px' }}>
              <div className="w-full max-w-[200px] h-28 group relative transition-transform duration-700" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute w-full h-full transition-transform duration-700 group-hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Frente */}
                  <div className="absolute w-full h-full bg-slate-800 text-white rounded-xl shadow-md flex items-center justify-center font-bold" style={{ backfaceVisibility: 'hidden' }}>
                    Frente (Hover)
                  </div>
                  {/* Atrás */}
                  <div className="absolute w-full h-full bg-sky-500 text-white rounded-xl shadow-md flex items-center justify-center font-bold rotate-y-180" style={{ backfaceVisibility: 'hidden' }}>
                    ¡Reverso!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 19. Custom Variables */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">19. Inyección de Variables</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Controlar CSS dinámico desde React.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> bg-[var(--mi-color)]</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div style={{ '--mi-color': customColor }} className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <input type="color" value={customColor} onChange={(e) => setCustomColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0 p-0" />
                  <span className="text-xs font-mono text-slate-500">Elige color</span>
                </div>
                <div className="w-full h-10 rounded-lg bg-[var(--mi-color)] transition-colors shadow-[0_4px_14px_0_var(--mi-color)] opacity-90 flex items-center justify-center text-white text-xs font-bold">Dinámico</div>
              </div>
            </div>
          </div>

          {/* 20. Display P3 */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">20. P3 Colors (Gama Alta)</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Branding vívido para Apple/Monitores modernos.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> bg-[color(display-p3_0_1_0)]</p>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center space-y-3 bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4 space-y-3">
                <div className="bg-[#00ff00] h-8 rounded text-[10px] font-bold flex items-center justify-center text-slate-900 shadow-inner">sRGB Verde (Apagado)</div>
                <div className="bg-[color(display-p3_0_1_0)] h-8 rounded text-[10px] font-bold flex items-center justify-center text-white shadow-inner">P3 Verde (Vibrante)</div>
              </div>
            </div>
          </div>

          {/* 21. Logical Props */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">21. Propiedades Lógicas</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Internacionalización (Español vs Árabe).</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> ps-4 (Padding Start)</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4 space-y-3 text-sm">
                <div dir="ltr" className="bg-slate-50 border border-slate-100 rounded p-2 flex items-center"><div className="w-2.5 h-2.5 bg-sky-500 rounded-full"></div><span className="ps-4 text-xs font-bold text-slate-600">LTR (Dir. Normal)</span></div>
                <div dir="rtl" className="bg-slate-50 border border-slate-100 rounded p-2 flex items-center"><div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div><span className="ps-4 text-xs font-bold text-slate-600">RTL (Invertido)</span></div>
              </div>
            </div>
          </div>

          {/* 22. Bento Grid */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">22. Grid Bento Layout</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Dashboards estilo Apple/Modernos.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> col-span-2, row-span-2</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-3">
                <div className="grid grid-cols-3 grid-rows-2 gap-2 h-24">
                  <div className="bg-indigo-400 rounded-lg col-span-2 shadow-inner"></div>
                  <div className="bg-sky-400 rounded-lg row-span-2 shadow-inner"></div>
                  <div className="bg-emerald-400 rounded-lg shadow-inner"></div>
                  <div className="bg-amber-400 rounded-lg shadow-inner"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 23. Flex Gap */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">23. Flex Gap & Order</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Reordenar layout móvil vs desktop visualmente.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> gap-4, order-1</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex gap-4 w-full justify-center">
                <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center order-3 font-bold text-slate-600">1</div>
                <div className="w-10 h-10 bg-slate-600 rounded flex items-center justify-center order-1 font-bold text-white shadow-md">2</div>
                <div className="w-10 h-10 bg-slate-300 rounded flex items-center justify-center order-2 font-bold text-slate-700">3</div>
              </div>
            </div>
          </div>

          {/* 24. Arbitrary */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">24. Selectores Arbitrarios</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Aplicar estilos a HTML crudo (Markdown).</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> [&p:nth-child(even)]</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4 [&>p]:text-sky-600 [&>p]:text-sm [&>p:nth-child(even)]:font-bold [&>p:nth-child(even)]:text-indigo-600">
                <p>Texto Normal (Impar)</p>
                <p>Texto Negrita (Par)</p>
                <p>Texto Normal (Impar)</p>
              </div>
            </div>
          </div>

          {/* 25. Filters */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">25. Image Filters</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Edición básica tipo Instagram nativa.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> grayscale, saturate-200</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 flex gap-2 p-2">
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=200" alt="Demo" className="w-1/2 h-20 object-cover rounded saturate-200 contrast-125" />
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=200" alt="Demo" className="w-1/2 h-20 object-cover rounded grayscale hover:grayscale-0 transition-all cursor-pointer" />
              </div>
            </div>
          </div>

          {/* 26. Text Stroke */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">26. Text Stroke</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Tipografía "hueca" para pósters modernos.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> text-transparent (Soporte CSS nativo)</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-6 flex items-center justify-center">
                <h2 className="text-4xl font-black text-transparent custom-text-stroke tracking-wider">
                  OUTLINE
                </h2>
              </div>
            </div>
          </div>

          {/* 27. Accent Color */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">27. Accent Color</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Teñir inputs del navegador (Radio/Checkbox).</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> accent-rose-500</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <input type="radio" name="demo" className="accent-rose-500 w-4 h-4 cursor-pointer" defaultChecked />
                  <span className="text-sm font-medium text-slate-700">Opción Rose</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="demo" className="accent-emerald-500 w-4 h-4 cursor-pointer" />
                  <span className="text-sm font-medium text-slate-700">Opción Emerald</span>
                </div>
              </div>
            </div>
          </div>

          {/* 28. Sticky */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">28. Sticky Header</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Encabezados de listas telefónicas.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> sticky, top-0, z-10</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 h-32 overflow-y-auto hide-scroll relative">
                <div className="sticky top-0 bg-sky-100 text-sky-800 text-xs font-bold p-2 z-10 border-b border-sky-200 shadow-sm">Letra A</div>
                <div className="p-2 text-sm text-slate-600 border-b border-slate-50">Anna</div>
                <div className="p-2 text-sm text-slate-600 border-b border-slate-50">Arthur</div>
                <div className="sticky top-0 bg-sky-100 text-sky-800 text-xs font-bold p-2 z-10 border-b border-sky-200 shadow-sm mt-1">Letra B</div>
                <div className="p-2 text-sm text-slate-600 border-b border-slate-50">Bruno</div>
                <div className="p-2 text-sm text-slate-600">Beto</div>
              </div>
            </div>
          </div>

          {/* 29. Selection */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">29. Selection Style</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Resaltado de texto alineado a la marca.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> selection:bg-fuchsia-300</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-5 selection:bg-fuchsia-300 selection:text-fuchsia-900 cursor-text">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Haz clic y <strong>selecciona este texto</strong>. El resaltado utiliza los colores específicos definidos (Fuchsia) en lugar del azul genérico del navegador.
                </p>
              </div>
            </div>
          </div>

          {/* 30. Scrollbars */}
          <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">30. Custom Scrollbars</h3>
              <p className="text-[11px] text-slate-600 mt-1"><strong className="text-sky-600">Uso:</strong> Estilizar barras de scroll feas de Windows.</p>
              <p className="text-[11px] text-slate-500"><strong className="text-indigo-500">Clases:</strong> [&::-webkit-scrollbar]:w-2</p>
            </div>
            <div className="p-6 flex-grow flex items-center justify-center bg-dots">
              <div className="w-full bg-slate-100 rounded-xl border border-slate-200 shadow-inner h-32 overflow-y-scroll p-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-sky-400 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="h-48 flex flex-col items-center">
                  <p className="text-xs font-bold text-slate-500 mt-2">Usa el Scroll</p>
                  <div className="mt-auto text-xs font-bold text-sky-600 mb-2">¡Llegaste al final!</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-8 border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} <span className="font-bold text-slate-800">Angel Salguero Dev.</span> Construido con Vite + React + Tailwind v4.
          </div>
          <div className="flex space-x-6 text-sm font-bold">
            <a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">Volver al Portafolio</a>
            <a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      {/* Estilos auxiliares para dot pattern y utilidades extra */}
      <style dangerouslySetInnerHTML={{__html: `
        .bg-dots {
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 14px 14px;
        }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-text-stroke { -webkit-text-stroke: 1px #38bdf8; }
      `}} />
    </div>
  )
}