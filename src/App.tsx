// @ts-nocheck
import React from "react";

// =====================
// AIInsight Component (DB 컴포넌트 - 그대로 사용)
// =====================
function AIInsight() {
  return (
    <div className="flex flex-col" style={{ gap: "10px", width: "358px" }}>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
            <div
              className="rounded-xl"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)",
                opacity: 0.3,
                width: "358px",
                height: "337px",
              }}
            />
            <div
              className="rounded-xl"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)",
                opacity: 0.64,
                width: "358px",
                height: "337px",
              }}
            />
            <div
              className="rounded-xl"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)",
                width: "358px",
                height: "337px",
              }}
            />
          </div>
          <div
            className="flex flex-col bg-[#ffffff] rounded-xl"
            style={{
              position: "relative",
              zIndex: 10,
              gap: "10px",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "16px",
              paddingRight: "16px",
              width: "358px",
            }}
          >
            <div
              className="flex flex-col gap-3"
              style={{ position: "relative", zIndex: 10, width: "326px" }}
            >
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1 w-full">
                  <div className="flex items-center justify-center gap-2">
                    <div
                      style={{
                        position: "relative",
                        zIndex: 10,
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8" cy="8" r="8" fill="url(#ai_grad)" />
                        <path
                          d="M5 8.5L7 10.5L11 6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="ai_grad"
                            x1="0"
                            y1="0"
                            x2="16"
                            y2="16"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#ff74ac" />
                            <stop offset="1" stopColor="#feab3e" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span
                      className="font-semibold"
                      style={{
                        fontSize: "13px",
                        lineHeight: "18px",
                        background:
                          "linear-gradient(90deg, #ff74ac 0%, #feab3e 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      AI Insight
                    </span>
                  </div>
                </div>
                <span
                  className="text-[#1a1a1e] font-bold w-full"
                  style={{ fontSize: "18px", lineHeight: "26px" }}
                >
                  AI가 분석한 핵심 인사이트
                </span>
              </div>
              <div className="flex flex-col gap-2 w-full">
                {[
                  "사용자 경험을 극대화하는 UI 패턴을 자동으로 감지하고 추천합니다.",
                  "디자인 시스템과 컴포넌트의 일관성을 실시간으로 검증합니다.",
                  "접근성 및 성능 최적화를 위한 구체적인 개선안을 제시합니다.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div
                      className="rounded-full flex-shrink-0 mt-1"
                      style={{
                        width: "6px",
                        height: "6px",
                        background:
                          "linear-gradient(135deg, #ff74ac 0%, #feab3e 100%)",
                      }}
                    />
                    <span
                      className="text-[#575f6c]"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      {text}
                    </span>
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
// CardTest Component (DB 컴포넌트 - 그대로 사용)
// =====================
function CardTest() {
  return (
    <div
      className="flex flex-col justify-center gap-3 p-4 bg-[#ffffff] rounded-[10px]"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#e6e8ea",
        width: "358px",
      }}
    >
      <div className="flex justify-between gap-2 w-full">
        <div className="flex flex-col w-full" style={{ gap: "2px" }}>
          <span
            className="text-[#1a1a1e] font-semibold w-full"
            style={{ fontSize: "17px", lineHeight: "25px" }}
          >
            Product Designer
          </span>
          <div className="flex items-center gap-2 w-full">
            <span
              className="text-[#575f6c] text-sm font-normal"
              style={{ lineHeight: "20px" }}
            >
              야놀자
            </span>
            <span
              className="text-[#f37676] text-[11px] font-semibold"
              style={{ lineHeight: "15px" }}
            >
              D-11
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-1 w-full" style={{ height: "20px" }}>
        <div
          className="flex items-center justify-center rounded"
          style={{
            gap: "2px",
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingLeft: "6px",
            paddingRight: "6px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#e6e8ea",
            height: "20px",
          }}
        >
          <span
            className="text-[#c2c6cd] text-[11px] font-semibold"
            style={{ lineHeight: "18px" }}
          >
            AD
          </span>
        </div>
        <div
          className="flex items-center justify-center bg-[#faf9ec] rounded"
          style={{
            gap: "2px",
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingLeft: "6px",
            paddingRight: "6px",
            height: "20px",
          }}
        >
          <span
            className="text-[#f0b500] text-[11px] font-semibold"
            style={{ lineHeight: "18px" }}
          >
            합격축하금
          </span>
        </div>
        <div
          className="flex items-center justify-center bg-[#f6f7f8] rounded"
          style={{
            gap: "2px",
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingLeft: "6px",
            paddingRight: "6px",
            height: "20px",
          }}
        >
          <span
            className="text-[#afb5be] text-[11px] font-semibold"
            style={{ lineHeight: "18px" }}
          >
            경력 2년↑
          </span>
        </div>
      </div>
    </div>
  );
}

// =====================
// Carousel Component
// =====================
const TOTAL_CARDS = 20;

function useCardsPerView() {
  const getCount = () => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 2;
    if (w < 1280) return 3;
    return 4;
  };
  const [count, setCount] = React.useState(getCount);
  React.useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return count;
}

function Carousel() {
  const cardsPerView = useCardsPerView();
  const totalGroups = Math.ceil(TOTAL_CARDS / cardsPerView);
  const [currentGroup, setCurrentGroup] = React.useState(0);

  // drag/swipe state
  const dragStartX = React.useRef<number | null>(null);
  const isDragging = React.useRef(false);
  const trackRef = React.useRef<HTMLDivElement>(null);

  // clamp currentGroup when cardsPerView changes
  React.useEffect(() => {
    setCurrentGroup((g) => Math.min(g, totalGroups - 1));
  }, [cardsPerView, totalGroups]);

  const handleDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    isDragging.current = false;
  };

  const handleDragEnd = (clientX: number) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - clientX;
    if (Math.abs(delta) > 40) {
      isDragging.current = true;
      if (delta > 0 && currentGroup < totalGroups - 1) {
        setCurrentGroup((g) => g + 1);
      } else if (delta < 0 && currentGroup > 0) {
        setCurrentGroup((g) => g - 1);
      }
    }
    dragStartX.current = null;
  };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const onMouseUp = (e: React.MouseEvent) => handleDragEnd(e.clientX);
  const onMouseLeave = (e: React.MouseEvent) => {
    if (dragStartX.current !== null) handleDragEnd(e.clientX);
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) =>
    handleDragStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) =>
    handleDragEnd(e.changedTouches[0].clientX);

  const translateX = -(currentGroup * 100);

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      {/* Track wrapper */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-300 ease-in-out select-none"
          style={{ transform: `translateX(${translateX}%)` }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Group pages */}
          {Array.from({ length: totalGroups }).map((_, groupIdx) => (
            <div
              key={groupIdx}
              className="flex gap-4 flex-shrink-0"
              style={{ width: "100%" }}
            >
              {Array.from({ length: cardsPerView }).map((_, cardIdx) => {
                const cardNum = groupIdx * cardsPerView + cardIdx;
                if (cardNum >= TOTAL_CARDS) return null;
                return (
                  <div
                    key={cardNum}
                    className="flex-shrink-0 flex justify-center"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <CardTest />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicator */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalGroups }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentGroup(i)}
            className="transition-all duration-200 rounded-full focus:outline-none"
            style={{
              width: i === currentGroup ? "20px" : "8px",
              height: "8px",
              backgroundColor:
                i === currentGroup ? "#6366f1" : "#d1d5db",
            }}
            aria-label={`Go to group ${i + 1}`}
          />
        ))}
      </div>

      {/* Card count info */}
      <p className="text-sm text-gray-400">
        {currentGroup * cardsPerView + 1}–
        {Math.min((currentGroup + 1) * cardsPerView, TOTAL_CARDS)} / {TOTAL_CARDS}
      </p>
    </div>
  );
}

// =====================
// Header
// =====================
const NAV_ITEMS = ["Home", "About", "Services", "Pricing", "Contact"] as const;

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          >
            Z
          </div>
          <span className="text-xl font-bold text-gray-900">ZeroUI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="py-3 text-sm font-medium text-gray-700 hover:text-indigo-600 border-b border-gray-50 last:border-0 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// =====================
// Footer
// =====================
function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ZeroUI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// =====================
// Main App
// =====================
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center gap-12">

          {/* Section Title */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              AI-Powered UI Platform
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              디자인에서 코드까지, AI가 함께합니다.
            </p>
          </div>

          {/* AIInsight Component */}
          <div className="flex justify-center w-full">
            <AIInsight />
          </div>

          {/* CardTest Carousel */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                추천 포지션
              </h2>
              <span className="text-sm text-gray-400">총 {TOTAL_CARDS}개</span>
            </div>
            <Carousel />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}