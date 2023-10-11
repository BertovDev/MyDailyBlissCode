import React from "react";

export default function Benji() {
  return (
    <section id="BENJI" className="flex-col h-full hidden">
      <div className="mr-auto mt-5 lg:mt-0 flex flex-col gap-y-7 lg:gap-y-2 justify-start w-full h-full items-center">
        <h3 className="text-3xl font-black font-darkerGrote px-10 text-center">Nothig to see here just my dog and couple images</h3>
        <div class="container px-10 py-8 mx-auto items-center">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg  md:col-span-1 bg-gray-100 shadow-lg md:h-80">
                <img src="Benji.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Benji</span>
            </a>

            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:col-span-2 md:h-80">
                <img src="Done.png" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover md:object-fill object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Cult of Done</span>
            </a>
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="jump.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Turnstile</span>
            </a>

            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="Jede.png" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">JEDEE</span>
            </a>
          </div>
          </div>
      </div>
    </section>
  );
}
