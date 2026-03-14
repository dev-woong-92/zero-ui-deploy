// @ts-nocheck
import React from "react";

const monthlyData = [
  { month: "1월", sales: 4200000 },
  { month: "2월", sales: 3800000 },
  { month: "3월", sales: 5100000 },
  { month: "4월", sales: 4700000 },
  { month: "5월", sales: 6200000 },
  { month: "6월", sales: 5800000 },
  { month: "7월", sales: 7100000 },
  { month: "8월", sales: 6500000 },
  { month: "9월", sales: 5900000 },
  { month: "10월", sales: 8200000 },
  { month: "11월", sales: 9500000 },
  { month: "12월", sales: 11000000 },
];

function formatCurrency(value: number): string {
  if (value >= 100000000) return `${(value / 100000000).toFixed(1)}억원`;
  if (value >= 10000) return `${(value / 10000).toFixed(0)}만원`;
  return `${value.toLocaleString()}원`;
}

interface StatCardProps {
  title: string;
  value: string;
  subtext: string;
  icon: React.ReactNode;
  trend: number;
}

function StatCard({ title, value, subtext, icon, trend }: StatCardProps) {
  const isPositive = trend >= 0;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-xs text-gray-400 mt-1">{subtext}</div>
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-emerald-500" : "text-red-500"}`}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          {isPositive ? (
            <path d="M7 2L12 8H2L7 2Z" fill="currentColor" />
          ) : (
            <path d="M7 12L12 6H2L7 12Z" fill="currentColor" />
          )}
        </svg>
        <span>{isPositive ? "+" : ""}{trend}% 전월 대비</span>
      </div>
    </div>
  );
}

function BarChart({ data }: { data: typeof monthlyData }) {
  const chartHeight = 200;
  const barWidth = 32;
  const gap = 16;
  const maxVal = Math.max(...data.map((d) => d.sales));
  const [hovered, setHovered] = React.useState<number | null>(null);

  const totalWidth = data.length * (barWidth + gap) - gap;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${totalWidth} ${chartHeight + 40}`}
        width="100%"
        style={{ minWidth: `${totalWidth}px` }}
        className="overflow-visible"
      >
        {/* 가이드라인 */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
          const y = chartHeight - chartHeight * ratio;
          return (
            <line
              key={ratio}
              x1={0}
              y1={y}
              x2={totalWidth}
              y2={y}
              stroke="#f0f0f0"
              strokeWidth={1}
            />
          );
        })}

        {data.map((d, i) => {
          const barH = (d.sales / maxVal) * chartHeight;
          const x = i * (barWidth + gap);
          const y = chartHeight - barH;
          const isHov = hovered === i;

          return (
            <g key={d.month}>
              {/* 호버 배경 */}
              <rect
                x={x - 4}
                y={0}
                width={barWidth + 8}
                height={chartHeight + 8}
                fill={isHov ? "#f8fafc" : "transparent"}
                rx={6}
              />

              {/* 막대 */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barH}
                rx={6}
                fill={isHov ? "#2563eb" : "#93c5fd"}
                style={{ transition: "fill 0.15s" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
              />

              {/* 호버 툴팁 */}
              {isHov && (
                <g>
                  <rect
                    x={x - 12}
                    y={y - 36}
                    width={barWidth + 24}
                    height={28}
                    rx={6}
                    fill="#1e40af"
                  />
                  <text
                    x={x + barWidth / 2}
                    y={y - 18}
                    textAnchor="middle"
                    fill="white"
                    fontSize={10}
                    fontWeight="600"
                  >
                    {formatCurrency(d.sales)}
                  </text>
                </g>
              )}

              {/* X축 레이블 */}
              <text
                x={x + barWidth / 2}
                y={chartHeight + 20}
                textAnchor="middle"
                fill="#9ca3af"
                fontSize={11}
              >
                {d.month}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function App() {
  const totalSales = monthlyData.reduce((sum, d) => sum + d.sales, 0);
  const totalOrders = 3842;
  const avgOrder = Math.round(totalSales / totalOrders);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">매출 대시보드</h1>
            <p className="text-sm text-gray-400 mt-0.5">2025년 연간 현황</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-blue-50 text-blue-600 font-medium px-3 py-1.5 rounded-full">
              실시간 업데이트
            </span>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* 통계 카드 — 반응형: mobile 1열, tablet 2열, desktop 3열 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <StatCard
            title="총 매출"
            value={formatCurrency(totalSales)}
            subtext="VAT 포함 기준"
            trend={12.4}
            icon={
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            title="총 주문 수"
            value={`${totalOrders.toLocaleString()}건`}
            subtext="취소 건 제외"
            trend={8.1}
            icon={
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
          <StatCard
            title="평균 주문액"
            value={formatCurrency(avgOrder)}
            subtext="주문당 평균"
            trend={-2.3}
            icon={
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>

        {/* 월별 매출 차트 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-gray-900">월별 매출 현황</h2>
              <p className="text-xs text-gray-400 mt-0.5">2025년 1월 ~ 12월</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-300 inline-block" />
              <span className="text-xs text-gray-500">월 매출</span>
            </div>
          </div>
          <BarChart data={monthlyData} />
        </div>
      </main>
    </div>
  );
}