import Image from "next/image";
import { altTextFromPath } from "@/lib/publicMedia";

type Props = {
  images: string[];
};

export function MediaShowcase({ images }: Props) {
  return (
    <section
      className="border-y border-rose-100/60 bg-rose-50/15 px-4 py-10 text-center sm:px-6 sm:py-12"
      aria-labelledby="media-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="media-heading"
          className="font-serif text-2xl font-semibold text-[#2d2640] sm:text-3xl"
        >
          相簿
        </h2>
        

        {images.length === 0 ? (
          <p className="mt-6 rounded-lg border border-dashed border-rose-200/70 bg-[#fffafd]/80 px-4 py-6 text-center text-base text-[#8a8299] sm:text-lg">
            暫未有相片。
          </p>
        ) : (
          <div className="mt-4 grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2">
            {images.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-md border border-rose-100/70 bg-rose-50/40"
              >
                {src.toLowerCase().endsWith(".svg") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt={altTextFromPath(src)}
                    className="h-full w-full object-contain p-1.5"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={altTextFromPath(src)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, 160px"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
