import Link from "next/link";

export default function MenuSection() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center text-white gap-16 px-6 sm:px-10 lg:px-20 xl:px-40 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 w-full max-w-7xl pt-15">
        <div className="flex flex-col items-center">
          <p className="text-3xl sm:text-4xl font-bold mb-8">Something Light</p>

          <div className="flex flex-col gap-5 w-full">
            {[
              ["French Fries", "Rs 280"],
              ["Chips Chilli", "Rs 290"],
              ["Cheese Sticks", "Rs 330"],
              ["Chicken Kurkure", "Rs 350"],
              ["Fish N' Chips", "Rs 340"],
            ].map(([name, price]) => (
              <div key={name} className="flex items-center gap-4 text-gray-300">
                <p className="whitespace-nowrap">{name}</p>
                <span className="flex-1 h-px bg-gray-600"></span>
                <p className="whitespace-nowrap">{price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-3xl sm:text-4xl font-bold mb-8">Lunch / Dinner</p>

          <div className="flex flex-col gap-5 w-full">
            {[
              ["Crispy Chicken Burger", "Rs 450"],
              ["American Choupsy", "Rs 430"],
              ["Chicken Piccata Pasta", "Rs 500"],
              ["Chowmein", "Rs 260"],
              ["MO: MO", "Rs 260"],
            ].map(([name, price]) => (
              <div key={name} className="flex items-center gap-4 text-gray-300">
                <p className="whitespace-nowrap">{name}</p>
                <span className="flex-1 h-px bg-gray-600"></span>
                <p className="whitespace-nowrap">{price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-3xl sm:text-4xl font-bold mb-8">Mojito</p>

          <div className="flex flex-col gap-5 w-full">
            {[
              ["Mango Mojito", "Rs 250"],
              ["Blueberry Mojito", "Rs 250"],
              ["Virgin Mojito", "Rs 220"],
              ["Strawberry Mojito", "Rs 250"],
              ["Kiwi Mojito", "Rs 250"],
            ].map(([name, price]) => (
              <div key={name} className="flex items-center gap-4 text-gray-300">
                <p className="whitespace-nowrap">{name}</p>
                <span className="flex-1 h-px bg-gray-600"></span>
                <p className="whitespace-nowrap">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link href="/menu">
        <button
          className="w-56 sm:w-60 relative text-center font-bold uppercase
        text-[16px] sm:text-[18px] tracking-[2px]
        px-8 py-3
        border-[3px] border-amber-600
        text-amber-600
        transition-all duration-300
        hover:text-white cursor-pointer
        active:scale-90
        before:content-['']
        before:absolute before:inset-0
        before:bg-amber-600
        before:scale-x-0
        before:origin-center
        before:transition-transform before:duration-500
        hover:before:scale-x-100"
        >
          <span className="relative z-10">Browse Menu</span>
        </button>
      </Link>
    </div>
  );
}
