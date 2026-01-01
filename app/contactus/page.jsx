import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex flex-col bg-[url('/assets/images/contact.webp')] items-center gap-10 pt-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row bg-black w-full text-white">
        <div className="w-full lg:w-1/2 px-6 md:px-16 lg:px-35 py-16">
          <div className="flex items-center gap-2 text-xs pb-4">
            <span className="h-[1px] w-10 bg-[#c08d35]"></span>
            <p className="text-[#c08d35] font-bold">KEEP CLOSE</p>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold pb-6">Get In Touch</h1>

          <p className="max-w-xl text-justify pb-10 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            expedita magni vero fuga officiis aspernatur delectus ducimus ipsam
            nostrum voluptatibus ipsum laboriosam, sequi neque nihil rem cumque
            sapiente.
          </p>

          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 pb-10">
            <div className="flex gap-3 items-center lg:w-[45%]">
              <Image src="/assets/icons/map.png" width={35} height={35} />
              <div>
                <p>Kobaha Stay N' Sip</p>
                <p>Kobaha, Lalitpur</p>
              </div>
            </div>

            <div className="flex gap-3 items-center lg:w-[45%]">
              <Image src="/assets/icons/phonelogo.png" width={35} height={35} />
              <div>
                <p>+977 9841XXXXXX</p>
                <p>+977 9841XXXXXX</p>
              </div>
            </div>

            <div className="flex gap-3 items-center lg:w-[45%]">
              <Image src="/assets/icons/mail.png" width={35} height={35} />
              <div>
                <p>kobahastay@gmail.com</p>
                <p>kobahasip@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-3 items-center lg:w-[45%]">
              <Image src="/assets/icons/clock.png" width={35} height={35} />
              <div>
                <p>Open 9:00am</p>
                <p>Close 10:00pm</p>
              </div>
            </div>
          </div>

          <p className="text-xs font-bold pb-3">FOLLOW US</p>
          <div className="flex gap-5">
            <Image src="/assets/icons/facebook.png" width={20} height={20} />
            <Image src="/assets/icons/instagram.png" width={20} height={20} />
            <Image src="/assets/icons/twitter.png" width={20} height={20} />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-6 md:px-16 lg:px-35 py-16">
          <div className="pb-10">
            <h1 className="text-2xl md:text-3xl font-bold">Your Details</h1>
            <p className="text-xs">Let us know how to get back to you</p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label>Name *</label>
                <input
                  className="bg-[#1A1B1D] py-2 px-3 outline-none"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label>Email Address *</label>
                <input
                  className="bg-[#1A1B1D] py-2 px-3 outline-none"
                  type="email"
                  placeholder="email@gmail.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label>Subject *</label>
              <input
                className="bg-[#1A1B1D] py-2 px-3 outline-none"
                type="text"
                placeholder="Subject"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Comments / Questions *</label>
              <textarea
                className="bg-[#1A1B1D] py-2 px-3 h-36 resize-none outline-none"
                placeholder="Question"
              />
            </div>

            <button className="bg-amber-700 px-6 py-2 mt-4 w-fit">
              CONTACT US
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
