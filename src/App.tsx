import { useEffect, useState } from "react";

export default function App() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // 200px 이상 스크롤하면 화살표 숨기기
      if (window.scrollY > 200) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen text-white font-bookk-myungjo flex flex-col items-center ">
        <div className="w-full bg-[#242628] flex flex-col items-center ">
          <div className="max-w-[390px] w-full flex flex-col items-center py-12">
            {/* 헤더 */}
            <h1 className="text-5xl font-bold text-center leading-tight mt-[30%] mb-4 px-6 ">
              <span className="block">HAPPY</span>
              <span className="block">JIEUN DAY</span>
            </h1>

            {/* 초대 문구 입력창 */}
            <div className="flex flex-row justify-center items-center gap-2 mb-8 px-6 ">
              <p className="text-lg">🎂</p>
              <h2 className="text-gray-300 text font-bold">
                생일파티에 초대합니다
              </h2>
            </div>

            {/* 구분선 */}
            <div className="w-12 h-px rounded-full bg-[#E3E3E3] mb-8 px-6" />

            {/* 대표 사진들 */}
            <div className="w-full flex flex-col justify-items-center">
              <div className="w-full aspect-24/5">
                <img
                  className="w-full object-contain"
                  src="/images/001.webp"
                  alt="대표 사진 1"
                />
              </div>
              <div className="w-full aspect-[30]" />
              <div className="w-full aspect-24/5">
                <img
                  className="w-full object-contain"
                  src="/images/002.webp"
                  alt="대표 사진 2"
                />
              </div>
              <div className="w-full aspect-[30]" />
              <div className="w-full aspect-24/5">
                <img
                  className="w-full object-contain"
                  src="/images/003.webp"
                  alt="대표 사진 3"
                />
              </div>
              <div className="w-full aspect-[30]" />
              <div className="w-full aspect-24/5">
                <img
                  className="w-full object-contain"
                  src="/images/004.webp"
                  alt="대표 사진 4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#454647] flex flex-col items-center ">
          <div className="max-w-[390px] w-full flex flex-col items-center px-6 py-8">
            {/* 부제목 */}
            <h3 className="text-[#F9F9F9] text-m font-light mb-8">Schedule</h3>
            {/* 날짜 및 장소 */}
            <div className="w-full flex flex-row items-center gap-4 mb-4">
              <img
                className="w-6 h-6"
                src="/icons/calendar-clock.png"
                alt="날짜 및 시간"
                loading="lazy"
              />
              <p className="text-[#F9F9F9] text-lg font-light">
                2025.12.19 (금) / 오후 9시
              </p>
            </div>
            <div className="w-full flex flex-row items-center gap-4 mb-8">
              <img
                className="w-6 h-6"
                src="/icons/map-marker.png"
                alt="장소"
                loading="lazy"
              />
              <p className="grow text-[#F9F9F9] text-lg font-light">
                신촌 오로라 파티룸
              </p>
              <a
                className="border-b-[0.5px] border-[#E9E9E9]"
                href="https://naver.me/FLyvF5Yc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <text className="text-[#E9E9E9] text-sm font-light">
                  길찾기
                </text>
              </a>
            </div>

            {/* 구분선 */}
            <div className="w-12 h-px rounded-full bg-[#E3E3E3] mb-8" />

            {/* 인사말 */}
            <div className="w-full bg-[#F9F9F9] rounded-2xl px-6 py-5 mb-8">
              <p className="text-black text-l font-light leading-relaxed">
                안녕하세요! 지은이에요
                <br />
                먼저, 제 생일파티에 와주셔서 감사합니다 <br />
                <br />
                추운 겨울 바쁜 연말인데
                <br />
                소중한 시간 내주신 만큼 재밌고
                <br />
                행복한 시간으로 만들어드릴게요.
                <br />
                <br />
                그러기 위해서는 아래
                <br />
                3가지는 꼭 확인해 주세요!
                <br />
                <br />
                <strong className="font-bold">
                  1. 드레스코드를 지켜주세요!
                </strong>
                <br />
                드레스코드는 블랙입니다.
                <br />
                너무 어두운 블랙이 아니더라도
                <br />
                어느 정도는 맞춰주시면 좋을 거 같아요
                <br />
                <br />
                <strong className="font-bold">
                  2. 케이크와 선물은 마음만 받을게요!
                </strong>
                <br />
                선물은... 제가 몇 년째 가지고 싶던
                <br />
                물건이 있어서 현장에서
                <br />
                펀딩을 해볼까 합니다 ㅎㅎ <br />
                <br />
                <strong className="font-bold">3. 금지어가 있어요!</strong>
                <br />
                이건 행사 당일에 오시면 알게 될 거예요 <br />
                <br />
                즐겁고 소중한 추억을 만들기 위해
                <br />
                많은 준비를 하고 있으니
                <br />
                우리 12월 19일에 만나요!!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 하단 플로팅 화살표 */}
      {showArrow && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce transition-opacity">
          <img
            src="/icons/chevron-double-down.png"
            alt="스크롤 유도"
            className="w-8 h-8 opacity-80"
          />
        </div>
      )}
    </>
  );
}
