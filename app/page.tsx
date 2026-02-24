export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Build Something Amazing Today
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl md:text-2xl max-w-2xl mx-auto">
            Transform your ideas into reality with our powerful platform designed for modern creators
          </p>
          <div className="mt-10">
            <button className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
