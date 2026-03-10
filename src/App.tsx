import React from "react";

const AIInsight = () => (
  <div className="flex flex-col" style={{ gap: "10px", width: "358px" }}>
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <div className="rounded-xl" style={{ position: "absolute", inset: 0, background: "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)", opacity: 0.3, width: "358px", height: "337px" }} />
          <div className="rounded-xl" style={{ position: "absolute", inset: 0, background: "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)", opacity: 0.64, width: "358px", height: "337px" }} />
          <div className="rounded-xl" style={{ position: "absolute", inset: 0, background: "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)", width: "358px", height: "337px" }} />
        </div>
        <div className="flex flex-col bg-white rounded-xl" style={{ position: "relative", zIndex: 10, gap: "10px", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "16px", paddingRight: "16px", width: "358px" }}>
          <div className="flex flex-col gap-3" style={{ position: "relative", zIndex: 10, width: "326px" }}>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-1 w-full">
                <div className="flex items-center justify-center gap-2">
                  <div style={{ position: "relative", zIndex: 10, width: "16px", height: "16px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L9.5 5.5L14 7L9.5 8.5L8 13L6.5 8.5L2 7L6.5 5.5L8 1Z" fill="url(#grad1)" />
                      <defs>
                        <linearGradient id="grad1" x1="2" y1="1" x2="14" y2="13" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#ff74ac" />
                          <stop offset="1" stopColor="#feab3e" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="font-bold text-sm" style={{ background: "linear-gradient(90deg, #ff74ac, #feab3e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI 인사이트</span>
                </div>
              </div>
              <p className="text-[#1a1a1e] font-semibold text-base">지금 주목받는 채용 트렌드</p>
              <p className="text-[#575f6c] text-sm">AI가 분석한 오늘의 채용 키워드와 인기 직군을 확인해보세요.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["UX 디자이너", "프론트엔드", "데이터 분석", "PM", "마케터"].map((tag) => (
                <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,116,172,0.3)", color: "#ff74ac" }}>#{tag}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-[#afb5be]">2026.03.10 기준</span>
              <button className="text-xs font-semibold" style={{ background: "linear-gradient(90deg, #ff74ac, #feab3e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>더보기 →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CardTest = ({ title, company, dday, tags }) => (
  <div className="flex flex-col justify-center gap-3 p-4 bg-white rounded-[10px] flex-shrink-0" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#e6e8ea", width: "358px" }}>
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
      {tags.map((tag, i) => (
        <div key={i} className="flex items-center justify-center rounded" style={{ gap: "2px", paddingTop: "2px", paddingBottom: "2px", paddingLeft: "6px", paddingRight: "6px", borderWidth: "1px", borderStyle: "solid", borderColor: tag.border || "#e6e8ea", background: tag.bg || "transparent", height: "20px" }}>
          <span className="text-[11px] font-semibold" style={{ lineHeight: "18px", color: tag.color || "#c2c6cd" }}>{tag.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const cardData = [
  {
    title: "Product Designer",
    company: "야놀자",
    dday: "D-11",
    tags: [
      { label: "AD", border: "#e6e8ea", color: "#c2c6cd" },
      { label: "합격축하금", bg: "#faf9ec", border: "#faf9ec", color: "#f0b500" },
      { label: "경력 2년↑", bg: "#f6f7f8", border: "#f6f7f8", color: "#afb5be" },
    ],
  },
  {
    title: "UX/UI Designer",
    company: "카카오",
    dday: "D-5",
    tags: [
      { label: "신입가능", bg: "#f0f4ff", border: "#f0f4ff", color: "#4f7fff" },
      { label: "합격축하금", bg: "#faf9ec", border: "#faf9ec", color: "#f0b500" },
      { label: "경력 1년↑", bg: "#f6f7f8", border: "#f6f7f8", color: "#afb5be" },
    ],
  },
  {
    title: "Frontend Engineer",
    company: "토스",
    dday: "D-3",
    tags: [
      { label: "AD", border: "#e6e8ea", color: "#c2c6cd" },
      { label: "스톡옵션", bg: "#fff0f5", border: "#fff0f5", color: "#ff74ac" },
      { label: "경력 3년↑", bg: "#f6f7f8", border: "#f6f7f8", color: "#afb5be" },
    ],
  },
  {
    title: "Brand Designer",
    company: "무신사",
    dday: "D-7",
    tags: [
      { label: "합격축하금", bg: "#faf9ec", border: "#faf9ec", color: "#f0b500" },
      { label: "경력 2년↑", bg: "#f6f7f8", border: "#f6f7f8", color: "#afb5be" },
    ],
  },
  {
    title: "Data Analyst",
    company: "배달의민족",
    dday: "D-14",
    tags: [
      { label: "AD", border: "#e6e8ea", color: "#c2c6cd" },
      { label: "경력 2년↑", bg: "#f6f7f8", border: "#f6f7f8", color: "#afb5be" },
    ],
  },
];

export default function App() {
  const carouselRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const onTouchStart = (e) => {
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const navItems = ["채용", "인턴", "직무별", "지역별", "기업별", "연봉정보", "커리어팁", "합격자소서"];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f6f8]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50" style={{ borderBottom: "1px solid #e6e8ea" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between" style={{ height: "56px" }}>
            {/* Logo */}
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center">
                <span className="font-black text-2xl" style={{ color: "#ff4785", letterSpacing: "-1px" }}>잡코리아</span>
              </a>
              {/* Search */}
              <div className="hidden md:flex items-center bg-[#f5f6f8] rounded-lg" style={{ width: "360px", height: "40px", padding: "0 12px", gap: "8px" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="8" cy="8" r="5.5" stroke="#afb5be" strokeWidth="1.5" />
                  <path d="M12 12L15.5 15.5" stroke="#afb5be" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input type="text" placeholder="직무, 기업, 키워드 검색" className="bg-transparent outline-none text-sm text-[#575f6c] w-full" />
              </div>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="text-sm text-[#575f6c] font-medium hidden md:block">로그인</button>
              <button className="text-sm font-semibold text-white px-4 py-2 rounded-lg" style={{ background: "#ff4785" }}>회원가입</button>
              <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg bg-[#f5f6f8]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="1.5" rx="0.75" fill="#575f6c" />
                  <rect x="2" y="8.25" width="14" height="1.5" rx="0.75" fill="#575f6c" />
                  <rect x="2" y="12.5" width="14" height="1.5" rx="0.75" fill="#575f6c" />
                </svg>
              </button>
            </div>
          </div>
          {/* Nav */}
          <nav className="flex items-center gap-1" style={{ height: "44px" }}>
            {navItems.map((item, i) => (
              <a key={item} href="#" className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors" style={{ color: i === 0 ? "#ff4785" : "#575f6c", borderBottom: i === 0 ? "2px solid #ff4785" : "none", fontWeight: i === 0 ? 700 : 500 }}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="w-full" style={{ background: "linear-gradient(135deg, #fff0f5 0%, #fff8f0 100%)", borderBottom: "1px solid #ffe0ec" }}>
        <div className="max-w-[1200px] mx-auto px-4 py-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold" style={{ color: "#ff4785" }}>오늘의 추천 채용</p>
            <h1 className="text-2xl font-black text-[#1a1a1e] mt-1">나에게 딱 맞는 일자리를 찾아보세요</h1>
            <p className="text-sm text-[#575f6c] mt-1">AI가 분석한 맞춤 채용공고 · 매일 업데이트</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-black" style={{ color: "#ff4785" }}>38,421</p>
              <p className="text-xs text-[#afb5be]">오늘의 채용공고</p>
            </div>
            <div className="w-px h-10 bg-[#e6e8ea]" />
            <div className="text-center">
              <p className="text-2xl font-black text-[#1a1a1e]">1,204</p>
              <p className="text-xs text-[#afb5be]">신규 등록</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 py-8">
        <div className="flex gap-6">
          {/* Left Column - Main */}
          <div className="flex-1 flex flex-col gap-6">
            {/* AI Insight */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-[#1a1a1e]">AI 인사이트</h2>
              </div>
              <AIInsight />
            </div>

            {/* CardTest Carousel */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-[#1a1a1e]">추천 채용공고</h2>
                <a href="#" className="text-xs text-[#afb5be] font-medium">전체보기 →</a>
              </div>
              <div
                ref={carouselRef}
                className="flex gap-3 overflow-x-auto pb-2"
                style={{
                  cursor: isDragging ? "grabbing" : "grab",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                  userSelect: "none",
                }}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
              >
                <style>{`.carousel::-webkit-scrollbar { display: none; }`}</style>
                {cardData.map((card, i) => (
                  <CardTest key={i} {...card} />
                ))}
              </div>
            </div>

            {/* Job Category */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-[#1a1a1e]">직무별 채용</h2>
                <a href="#" className="text-xs text-[#afb5be] font-medium">전체보기 →</a>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {["개발·IT", "디자인", "마케팅", "영업", "경영·사무", "서비스", "생산·제조", "연구·R&D"].map((cat) => (
                  <button key={cat} className="bg-white rounded-xl py-4 text-sm font-semibold text-[#1a1a1e] text-center transition-colors hover:bg-[#fff0f5]" style={{ border: "1px solid #e6e8ea" }}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:flex flex-col gap-4" style={{ width: "260px" }}>
            {/* Login CTA */}
            <div className="bg-white rounded-xl p-5" style={{ border: "1px solid #e6e8ea" }}>
              <p className="font-bold text-[#1a1a1e] text-sm">로그인하고 맞춤 채용을 받아보세요</p>
              <p className="text-xs text-[#afb5be] mt-1 mb-4">AI가 내 경력에 맞는 공고를 추천해드려요</p>
              <div className="flex flex-col gap-2">
                <button className="w-full py-2.5 text-sm font-bold text-white rounded-lg" style={{ background: "#ff4785" }}>로그인</button>
                <button className="w-full py-2.5 text-sm font-semibold text-[#575f6c] rounded-lg" style={{ border: "1px solid #e6e8ea" }}>회원가입</button>
              </div>
            </div>
            {/* Hot Keywords */}
            <div className="bg-white rounded-xl p-5" style={{ border: "1px solid #e6e8ea" }}>
              <p className="font-bold text-[#1a1a1e] text-sm mb-3">실시간 인기 검색어</p>
              <div className="flex flex-col gap-2">
                {["1. 삼성전자", "2. 카카오", "3. 네이버", "4. 토스", "5. 쿠팡"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-xs font-bold" style={{ color: i < 3 ? "#ff4785" : "#afb5be", width: "16px" }}>{i + 1}</span>
                    <span className="text-sm text-[#575f6c]">{item.split(". ")[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2d2d35] text-white mt-8">
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          {/* Footer Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 pb-6" style={{ borderBottom: "1px solid #45454f" }}>
            {["회사소개", "채용공고 등록", "광고문의", "이용약관", "개인정보처리방침", "고객센터", "제휴문의", "사이트맵"].map((link) => (
              <a key={link} href="#" className="text-sm text-[#9a9aaa] hover:text-white transition-colors">{link}</a>
            ))}
          </div>
          {/* Company Info */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <span className="font-black text-xl" style={{ color: "#ff4785" }}>잡코리아</span>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-xs text-[#9a9aaa]">
                <span>주식회사 잡코리아</span>
                <span>|</span>
                <span>대표이사 홍길동</span>
                <span>|</span>
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-xs text-[#9a9aaa]">
                <span>사업자등록번호: 000-00-00000</span>
                <span>|</span>
                <span>통신판매업신고: 제2024-서울강남-0000호</span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-xs text-[#9a9aaa]">
                <span>고객센터: 1588-0000</span>
                <span>|</span>
                <span>이메일: help@jobkorea.co.kr</span>
              </div>
            </div>
            {/* App Download */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-[#9a9aaa]">앱 다운로드</p>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white" style={{ background: "#3a3a44", border: "1px solid #55555f" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="#9a9aaa" />
                  </svg>
                  App Store
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white" style={{ background: "#3a3a44", border: "1px solid #55555f" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 1L12 7L2 13V1Z" fill="#9a9aaa" />
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <p className="text-xs text-[#6a6a7a] mt-6">© 2026 JobKorea Corp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}