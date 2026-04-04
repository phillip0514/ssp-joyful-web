import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { MediaShowcase } from "@/components/MediaShowcase";
import {
  altTextFromPath,
  listGalleryImagePaths,
  listSocialCardPaths,
} from "@/lib/publicMedia";

/** Digits only for wa.me (HK) */
const WHATSAPP = "85294273977";
const WHATSAPP_DISPLAY = "9427 3977";
const PHONE_TEL = "+85231119771";
const PHONE_DISPLAY = "3111 9771";
const LICENSE = "63253";
const PH_LICENSE = "MWOHK-2024-385-134"; 
const MAP_EMBED =
  "https://maps.google.com/maps?q=%E5%85%83%E6%9C%97%E5%90%88%E7%9B%8A%E5%BB%A3%E5%A0%B4&t=&z=17&ie=UTF8&iwloc=&output=embed";

export default async function Home() {
  const [galleryImages, socialCards] = await Promise.all([
    listGalleryImagePaths(),
    listSocialCardPaths(),
  ]);

  return (
    <div className="flex min-h-full flex-col text-[#3d3550]">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden border-b border-rose-100/70 bg-gradient-to-b from-rose-50/95 via-[#fffafd] to-sky-50/60 px-4 py-16 sm:px-6 sm:py-24"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-rose-300/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-4xl px-1 text-center">
            <p className="mb-4 font-serif text-lg font-semibold text-rose-700 sm:text-xl md:text-2xl">
              永諾意僱傭中心 · 香港
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-5xl font-semibold leading-[1.05] text-[#2d2640] sm:text-6xl md:text-7xl md:leading-[1.05] lg:text-[4.5rem] xl:text-[5rem]"
            >
              為香港家庭尋找最合適的家人
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[#6b6280] sm:text-2xl md:text-[1.65rem] md:leading-snug">
              專業外佣配對與跟進，用心了解每個家庭需要，服務覆蓋全港，讓您安心迎接新生活。
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[4rem] w-full max-w-md items-center justify-center rounded-2xl bg-[#25D366] px-8 py-4 text-xl font-semibold text-white shadow-lg shadow-green-900/15 transition hover:bg-[#20bd5a] sm:w-auto sm:min-w-[17rem] sm:px-10 sm:text-2xl"
              >
                立即 WhatsApp {WHATSAPP_DISPLAY} 查詢
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex min-h-[4rem] w-full max-w-md items-center justify-center rounded-2xl border-2 border-sky-400/80 bg-white px-8 py-4 text-xl font-semibold text-sky-900 shadow-md shadow-sky-200/40 transition hover:border-sky-500 hover:bg-sky-50 sm:w-auto sm:min-w-[17rem] sm:px-10 sm:text-2xl"
              >
                致電 {PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-1 text-base text-[#8a8299] sm:text-lg">
            <p>勞工處職業介紹所牌照：{LICENSE}</p>
            <p>菲律賓領事館牌照號碼：{PH_LICENSE}</p>
            </div>
          </div>
        </section>

        {/* Services — no id (no /#services hash) */}
        <section
          className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20"
          aria-labelledby="services-heading"
        >
          <h2
            id="services-heading"
            className="font-serif text-4xl font-semibold text-[#2d2640] sm:text-5xl"
          >
            服務項目
          </h2>
          <ul className="mx-auto mt-10 max-w-3xl space-y-5 text-xl text-[#6b6280] sm:text-2xl">
            <li className="flex justify-center gap-3 border-b border-rose-100/80 pb-5 font-medium text-[#2d2640]">
              <span className="text-rose-500" aria-hidden>
                ·
              </span>
              優質菲傭&amp;印傭
            </li>
            <li className="flex justify-center gap-3 border-b border-rose-100/80 pb-5 font-medium text-[#2d2640]">
              <span className="text-rose-500" aria-hidden>
                ·
              </span>
              本地完約女傭&amp;海外女傭
            </li>
            <li className="flex justify-center gap-3 pb-1 font-medium text-[#2d2640]">
              <span className="text-rose-500" aria-hidden>
                ·
              </span>
              文件代辦服務
            </li>
          </ul>
        </section>

        <MediaShowcase images={galleryImages} />

        {/* Contact + Map */}
        <section
          id="contact"
          className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 text-center sm:px-6 sm:py-20"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="font-serif text-4xl font-semibold text-[#2d2640] sm:text-5xl"
          >
            聯絡我們
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-[#6b6280] sm:text-2xl">
            服務覆蓋全港。歡迎親臨元朗門市或先以電話／WhatsApp 查詢。
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-sky-100/80 bg-[#fffafd] p-8 text-center shadow-sm shadow-sky-100/30 sm:p-10">
              <h3 className="font-serif text-2xl font-semibold text-[#2d2640] sm:text-3xl">
                地址
              </h3>
              <address className="mt-4 not-italic text-lg leading-relaxed text-[#6b6280] sm:text-xl">
                元朗合益廣場一樓 C31 A
                <br />
                <span className="text-[#8a8299]">Hop Yick Plaza, Yuen Long, Hong Kong</span>
              </address>
              <div className="mt-8 flex flex-col items-center gap-4 text-lg sm:text-xl">
              <div className="flex flex-col gap-1 font-medium text-[#2d2640]">
  <p>勞工處職業介紹所牌照：{LICENSE}</p>
  <p>菲律賓領事館牌照號碼：{PH_LICENSE}</p>
</div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-semibold text-sky-700 hover:underline"
                >
                  Tel：{PHONE_DISPLAY}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#128C7E] hover:underline"
                >
                  WhatsApp：+852 {WHATSAPP_DISPLAY}
                </a>
                <p className="text-base text-[#8a8299] sm:text-lg">
                  營業時間：請以店內公布為準
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-rose-100/80 bg-sky-50/40 shadow-sm">
              <div className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[320px]">
                <iframe
                  title="元朗合益廣場位置"
                  src={MAP_EMBED}
                  className="h-full min-h-[240px] w-full border-0 sm:min-h-[280px] lg:min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="border-t border-sky-100/70 bg-[#fffafd] px-3 py-2 text-center text-base text-[#8a8299]">
                地圖 centred 於合益廣場；可於 Google Maps 分享嵌入碼微調。
              </p>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section
          className="border-t border-rose-100/70 bg-gradient-to-b from-white via-rose-50/30 to-sky-50/40 px-4 py-14 sm:px-6 sm:py-20"
          aria-labelledby="social-heading"
        >
          <div className="mx-auto max-w-6xl text-center">
            <h2
              id="social-heading"
              className="font-serif text-4xl font-semibold text-[#2d2640] sm:text-5xl"
            >
              關注我們的最新資訊
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6b6280] sm:text-xl md:text-2xl">
              緊貼成功案例、面試貼士與港生活小貼士。
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="https://instagram.com/ssp_joyful_helper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-16 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500 px-10 py-4 text-lg font-semibold text-white shadow-md shadow-rose-300/30 transition hover:opacity-95 sm:text-xl"
              >
                Instagram @ssp_joyful_helper
              </a>
            </div>

            <h3 className="mt-16 font-serif text-2xl font-semibold text-[#2d2640] sm:text-3xl">
              As seen on our social media
            </h3>
            <p className="mt-2 text-lg text-[#8a8299] sm:text-xl">社群精選</p>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 sm:max-w-3xl sm:gap-5">
              {socialCards.length > 0
                ? socialCards.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-square w-full overflow-hidden rounded-2xl border border-rose-100/60 bg-rose-50/30 shadow-md ring-1 ring-rose-100/40"
                    >
                      {src.toLowerCase().endsWith(".svg") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={src}
                          alt={altTextFromPath(src)}
                          className="h-full w-full object-contain p-2"
                        />
                      ) : (
                        <Image
                          src={src}
                          alt={altTextFromPath(src)}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 33vw, 280px"
                        />
                      )}
                    </div>
                  ))
                : [
                    "from-pink-200/85 via-sky-100 to-blue-50",
                    "from-sky-200/70 via-rose-100 to-indigo-50",
                    "from-fuchsia-100 via-blue-100/80 to-cyan-50",
                  ].map((g, i) => (
                    <div
                      key={i}
                      className={`aspect-square w-full rounded-2xl bg-gradient-to-br ${g} shadow-md ring-1 ring-rose-100/50`}
                      role="img"
                      aria-label={`社群圖片占位 ${i + 1}`}
                    />
                  ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-sky-100/60 bg-gradient-to-r from-rose-50/50 via-[#fffafd] to-sky-50/50 py-10 text-center text-base text-[#8a8299] sm:text-lg">
        <p>© {new Date().getFullYear()} 永諾意僱傭中心 · 香港</p>
        <div className="mt-1 flex flex-col gap-0.5">
  <p>勞工處職業介紹所牌照：{LICENSE}</p>
  <p>菲律賓領事館牌照號碼：{PH_LICENSE}</p>
</div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-3xl bg-[#25D366] text-white shadow-xl shadow-green-900/25 transition hover:scale-[1.03] hover:bg-[#20bd5a] sm:h-[5.25rem] sm:w-[5.25rem]"
        aria-label={`以 WhatsApp 聯絡 +852 ${WHATSAPP_DISPLAY}`}
      >
        <svg
          className="h-10 w-10 sm:h-11 sm:w-11"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
