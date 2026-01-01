import Image from "next/image";

export default function TwoSection() {
  return (
    <div className="min-h-screen bg-[#F8DDB2] flex flex-col lg:flex-row px-6 sm:px-12 md:px-20 lg:px-40 pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 gap-12">
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="text-amber-600 font-bold text-sm sm:text-base md:text-xl">
              REFRESH YOUR TASTE BUDS
            </p>
            <span className="h-[2] w-12 sm:w-16 md:w-20 bg-amber-600"></span>
          </div>

          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl">
            Enjoy An Exceptional Journey of Taste
          </p>

          <p className="text-sm sm:text-base md:text-lg max-w-xl">
            We see our customers as invited guests to a party, and we are the
            hosts. It's our job every day to make every important aspect of the
            customer experience a little bit better.
          </p>
        </div>

        <button className="bg-amber-600 text-white py-3 px-8 text-xs sm:text-sm w-fit hover:opacity-90 cursor-pointer ">
          DISCOVER MORE
        </button>

        <Image
          src="/assets/images/kobahaview.jpg"
          width={1200}
          height={600}
          alt="Kobaha View"
          className="w-full sm:w-[80%] lg:w-[600] h-64 sm:h-72 object-cover"
        />
      </div>

      <div className="flex-1 flex  justify-center lg:justify-end">
        <Image
          src="/assets/images/lunch.avif"
          width={1200}
          height={600}
          alt="Lunch"
          className="w-full sm:w-[70%] lg:w-[500] h-80 sm:h-[500] lg:h-[700] object-cover"
        />
      </div>
    </div>
  );
}
