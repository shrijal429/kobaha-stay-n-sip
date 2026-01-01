export default function HomeSection() {
  return (
    <div
      className="relative bg-[url('/sandwich.jpg')] bg-cover bg-center flex flex-col items-center
      pt-32 sm:pt-40 md:pt-52 lg:pt-60
      px-6 sm:px-12 md:px-24 lg:px-40
      min-h-screen text-white gap-8"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span className="h-px w-16 sm:w-28 md:w-40 bg-white"></span>
          <p className="text-sm sm:text-lg md:text-2xl tracking-wide">
            WELCOME TO KOBAHA STAY N' SIP
          </p>
          <span className="h-px w-16 sm:w-28 md:w-40 bg-white"></span>
        </div>

        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-5xl">
          Exquisite cuisine paired with a delightful dining experience
        </p>

        <p className="text-base sm:text-lg md:text-2xl max-w-3xl">
          Where food, harmony, and laughter come together
        </p>

        <button
          className="border py-2 sm:py-3 px-6 sm:px-10
          hover:cursor-pointer hover:scale-110 duration-200"
        >
          View Full Menu
        </button>
      </div>
    </div>
  );
}
