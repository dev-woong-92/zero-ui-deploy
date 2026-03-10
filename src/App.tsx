// @ts-nocheck
import React from "react";

// =====================
// AIInsight Component (from DB)
// =====================
function AIInsight() {
  return (
    <div className="flex flex-col" style={{ gap: "10px", width: "358px" }}>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
            <div className="rounded-xl" style={{ position: "absolute", inset: 0, background: "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)", opacity: 0.3, width: "358px", height: "337px" }} />
            <div className="rounded-xl" style={{ position: "absolute", inset: 0, background: "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)", opacity: 0.64, width: "358px", height: "337px" }} />
            <div className="rounded-xl" style={{ position: "absolute", inset: 0, background: "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)", width: "358px", height: "337px" }} />
          </div>
          <div className="flex flex-col bg-[#ffffff] rounded-xl" style={{ position: "relative", zIndex: 10, gap: "10px", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "16px", paddingRight: "16px", width: "358px" }}>
            <div className="flex flex-col gap-3" style={{ position: "relative", zIndex: 10, width: "326px" }}>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1 w-full">
                  <div className="flex items-center justify-center gap-2">
                    <div style={{ position: "relative", zIndex: 10, width: "16px", height: "16px" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 2.5L7.5 5.5C7.7 6.1 8.2 6.6 8.8 6.8L11.8 7.8C12.4 8 12.4 8.8 11.8 9L8.8 10C8.2 10.2 7.7 10.7 7.5 11.3L6.5 14.3C6.3 14.9 5.5 14.9 5.3 14.3L4.3 11.3C4.1 10.7 3.6 10.2 3 10L0 9C-0.6 8.8 -0.6 8 0 7.8L3 6.8C3.6 6.6 4.1 6.1 4.3 5.5L5.3 2.5C5.5 1.9 6.3 1.9 6.5 2.5Z" fill="url(#grad1)" />
                        <path d="M13 0.5L13.5 2C13.6 2.4 13.9 2.7 14.3 2.8L15.8 3.3C16.2 3.4 16.2 4 15.8 4.1L14.3 4.6C13.9 4.7 13.6 5 13.5 5.4L13 6.9C12.9 7.3 12.3 7.3 12.2 6.9L11.7 5.4C11.6 5 11.3 4.7 10.9 4.6L9.4 4.1C9 4 9 3.4 9.4 3.3L10.9 2.8C11.3 2.7 11.6 2.4 11.7 2L12.2 0.5C12.3 0.1 12.9 0.1 13 0.5Z" fill="url(#grad2)" />
                        <defs>
                          <linearGradient id="grad1" x1="0" y1="0" x2="12" y2="16" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ff74ac" />
                            <stop offset="1" stopColor="#feab3e" />
                          </linearGradient>
                          <linearGradient id="grad2" x1="9" y1="0" x2="16" y2="8" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ff74ac" />
                            <stop offset="1" stopColor="#feab3e" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="font-bold text-sm" style={{ background: "linear-gradient(90deg, #ff74ac 0%, #feab3e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI 인사이트</span>
                  </div>
                </div>
                <span className="text-[#1a1a1e] font-bold" style={{ fontSize: "17px", lineHeight: "25px" }}>오늘의 채용 트렌드</span>
              </div>
              <div className="flex flex-col gap-2 w-full">
                {[
                  { tag: "IT·개발", text: "풀스택 개발자 채용이 전월 대비 23% 증가했습니다." },
                  { tag: "디자인", text: "UI/UX 디자이너 수요가 꾸준히 늘고 있습니다." },
                  { tag: "마케팅", text: "데이터 마케터 채용이 빠르게 증가 중입니다." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 w-full">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0" style={{ background: "linear-gradient(90deg, #fff0f7 0%, #fff8ec 100%)", color: "#ff74ac" }}>{item.tag}</span>
                    <span className="text-[#575f6c] text-sm" style={{ lineHeight: "20px" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================
// CardTest Component (from DB) — adapted to accept props for carousel
// =====================
interface CardTestProps {
  title: string;
  company: string;
  dday: string;
  imageSrc?: string;
  description: string;
}

function CardTest({ title, company, dday, description }: CardTestProps) {
  return (
    <div className="flex flex-col justify-center gap-3 p-4 bg-[#ffffff] rounded-[10px] shrink-0" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#e6e8ea", width: "358px" }}>
      <div className="w-full h-[180px] rounded-lg overflow-hidden bg-[#f6f7f8] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-[#c2c6cd]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#e6e8ea" />
            <path d="M12 28L18 20L22 24L26 18L30 28H12Z" fill="#c2c6cd" />
            <circle cx="16" cy="16" r="3" fill="#c2c6cd" />
          </svg>
          <span className="text-xs">{description}</span>
        </div>
      </div>
      <div className="flex justify-between gap-2 w-full">
        <div className="flex flex-col w-full" style={{ gap: "2px" }}>
          <span className="text-[#1a1a1e] font-semibold w-full" style={{ fontSize: "17px", lineHeight: "25px" }}>{title}</span>
          <div className="flex items-center gap-2 w-full">
            <span className="text-[#575f6c] text-sm font-normal" style={{ lineHeight: "20px" }}>{company}</span>
            <span className="text-[#f37676] text-[11px] font-semibold" style={{ lineHeight: "15px" }}>{dday}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-1 w-full" style={{ height: "20px" }}>
        <div className="flex items-center justify-center rounded" style={{ gap: "2px", paddingTop: "2px", paddingBottom: "2px", paddingLeft: "6px", paddingRight: "6px", borderWidth: "1px", borderStyle: "solid", borderColor: "#e6e8ea", height: "20px" }}>
          <span className="text-[#c2c6cd] text-[11px] font-semibold" style={{ lineHeight: "18px" }}>AD</span>
        </div>
        <div className="flex items-center justify-center bg-[#faf9ec] rounded" style={{ gap: "2px", paddingTop: "2px", paddingBottom: "2px", paddingLeft: "6px", paddingRight: "6px", height: "20px" }}>
          <span className="text-[#f0b500] text-[11px] font-semibold" style={{ lineHeight: "18px" }}>합격축하금</span>
        </div>
        <div className="flex items-center justify-center bg-[#f6f7f8] rounded" style={{ gap: "2px", paddingTop: "2px", paddingBottom: "2px", paddingLeft: "6px", paddingRight: "6px", height: "20px" }}>
          <span className="text-[#afb5be] text-[11px] font-semibold" style={{ lineHeight: "18px" }}>경력 2년↑</span>
        </div>
      </div>
    </div>
  );
}

// =====================
// Dummy Card Data
// =====================
const cardData: CardTestProps[] = [
  { title: "Frontend Developer", company: "카카오", dday: "D-3", description: "React / TypeScript", imageSrc: "" },
  { title: "Product Designer", company: "야놀자", dday: "D-11", description: "UI/UX 디자인", imageSrc: "" },
  { title: "Backend Engineer", company: "네이버", dday: "D-7", description: "Java / Spring", imageSrc: "" },
  { title: "Data Scientist", company: "라인", dday: "D-5", description: "Python / ML", imageSrc: "" },
  { title: "DevOps Engineer", company: "쿠팡", dday: "D-14", description: "AWS / Docker", imageSrc: "" },
  { title: "iOS Developer", company: "배달의민족", dday: "D-9", description: "Swift / SwiftUI", imageSrc: "" },
  { title: "Android Developer", company: "토스", dday: "D-2", description: "Kotlin / Jetpack", imageSrc: "" },
  { title: "Full Stack Developer", company: "당근마켓", dday: "D-6", description: "Node.js / React", imageSrc: "" },
  { title: "PM / 기획자", company: "크래프톤", dday: "D-20", description: "서비스 기획", imageSrc: "" },
  { title: "UX Researcher", company: "무신사", dday: "D-15", description: "사용자 리서치", imageSrc: "" },
  { title: "Cloud Architect", company: "SK텔레콤", dday: "D-8", description: "Azure / GCP", imageSrc: "" },
  { title: "Security Engineer", company: "삼성SDS", dday: "D-12", description: "보안 취약점 분석", imageSrc: "" },
];

// =====================
// Carousel Component
// =====================
function CardCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [dragStartX, setDragStartX] = React.useState<number | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragOffset, setDragOffset] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 358;
  const GAP = 16;
  const CARDS_PER_VIEW = 4;
  const STEP = CARD_WIDTH + GAP;
  const maxIndex = cardData.length - CARDS_PER_VIEW;
  const totalDots = maxIndex + 1;

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging || dragStartX === null) return;
    if (dragOffset < -50 && currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || dragStartX === null) return;
    setDragOffset(e.touches[0].clientX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (!isDragging || dragStartX === null) return;
    if (dragOffset < -50 && currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragOffset(0);
  };

  const translateX = -(currentIndex * STEP) + (isDragging ? dragOffset : 0);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
        >
          {cardData.map((card, i) => (
            <div key={i} className="shrink-0">
              <CardTest {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === currentIndex ? "20px" : "8px",
              height: "8px",
              backgroundColor: i === currentIndex ? "#1a1a1e" : "#e6e8ea",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// =====================
// Main App
// =====================
export default function App() {
  const navItems = ["채용공고", "기업정보", "커뮤니티", "마이페이지"];

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f8]">

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e6e8ea]" style={{ height: "60px" }}>
        <div className="max-w-[1480px] mx-auto px-6 h-full flex items-center justify-between">
          <span className="text-[#1a1a1e] font-bold text-xl tracking-tight select-none">JobKorea</span>
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#1a1a1e] text-sm font-medium hover:text-[#ff74ac] transition-colors duration-200"
                onClick={(e) => e.preventDefault()}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
        <div className="w-full max-w-[1480px] px-6 flex flex-col gap-8">

          {/* AIInsight Section */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[#1a1a1e] font-bold text-lg">AI 인사이트</h2>
            <AIInsight />
          </section>

          {/* CardTest Carousel Section */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[#1a1a1e] font-bold text-lg">추천 채용공고</h2>
            <CardCarousel />
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e6e8ea]">
        <div className="max-w-[1480px] mx-auto px-6 py-5 flex items-center justify-center">
          <span className="text-[#afb5be] text-xs">
            © {new Date().getFullYear()} JobKorea Inc. All rights reserved.
          </span>
        </div>
      </footer>

    </div>
  );
}