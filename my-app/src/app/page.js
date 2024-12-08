export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url('/imagenes/hero-background.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Descubre una forma fácil y personalizada de cuidar tu alimentación
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Nuestra herramienta te ayuda a llevar un control detallado de tu dieta, ofreciéndote información nutricional precisa sobre los alimentos.
          </p>
          <button className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100">
            <a href="/signup">Empieza hoy mismo</a>
          </button>
        </div>
      </section>
      {/* Información */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            ¿Cómo funciona?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-bold">
                Registra tus alimentos
              </h3>
              <p className="text-gray-600">
                Ingresa la información nutricional de tus alimentos
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-bold">Crea tus listas</h3>
              <p className="text-gray-600">
                Añade y organiza tus alimentos preferidos o los que consumes
                con frecuencia para un acceso más rápido
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-bold">
                Alcanza tus objetivos
              </h3>
              <p className="text-gray-600">
                Define metas saludables y logra tus propósitos
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Quiénes somos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            ¿Quiénes somos?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            Somos un equipo apasionado por la salud y el bienestar. Nuestra
            misión es ayudarte a llevar una vida más equilibrada y consciente
            con una herramienta diseñada para que tomes decisiones saludables,
            nuestra aplicación te acompaña en cada paso de una forma práctica y
            fácil de usar.
          </p>
        </div>
      </section>
    </main>
  );
}