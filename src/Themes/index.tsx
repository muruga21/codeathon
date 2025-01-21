import theme from "../assets/images/un-goals.webp"

export default function Theme() {
  return (
    <div className="text-white bg-[#333]">
        <h1 className="text-4xl font-bold text-center p-8">THEME</h1>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={theme}
              alt="UN Sustainable Development Goals illustration"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              What are the United Nations 17 Sustainable Development Goals?
            </h1>
            <p className="text-lg">
              Created by the United Nations in 2015, with support from all 193 United Nations Member States, the 17
              Sustainable Development Goals aim to end poverty, ensure prosperity, and protect the planet.
            </p>
            <button className="px-6 py-2.5 text-sm font-medium text-white bg-[#1a73e8] hover:bg-blue-700 rounded-md transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}