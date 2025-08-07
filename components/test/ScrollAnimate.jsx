// "use client";

// import { use } from "react";

// const users = [
//   "Mina",
//   "Mohan",
//   "Nadia",
//   "Naveen",
//   "Neha",
//   "Nikhil",
//   "Nisha",
//   "Omar",
//   "Pooja",
//   "Pranav",
//   "Priya",
//   "Rahul",
//   "Raj",
//   "Rani",
//   "Reema",
//   "Rohan",
//   "Roshni",
//   "Saba",
//   "Sachin",
//   "Sadia",
// ];
// export const ScrollAnimate = () => {
//   return (
//     <>
//       <div className="w-full overflow-hidden px-5">
//         <div className="flex animate-slide gap-4">
//           {[
//             ...users
//             // "Sajid",
//             // "Salma",
//             // "Sameer",
//             // "Sana",
//             // "Sanjay",
//             // "Sara",
//             // "Shalini",
//             // "Shankar",
//             // "Shilpa",
//             // "Siddharth",
//             // "Simran",
//             // "Sohail",
//             // "Sonali",
//             // "Suman",
//             // "Sunil",
//             // "Swati",
//             // "Tania",
//             // "Tarun",
//             // "Uma",
//             // "Umesh",
//             // "Vandana",
//             // "Varun",
//             // "Vijay",
//             // "Vikram",
//             // "Vinod",
//             // "Yasmin",
//             // "Yusuf",
//             // "Zain",
//             // "Zara",
//           ].map((name, index) => (
//             <p
//               key={index}
//               className="flex-shrink-0 w-10 h-10 lg:w-[8.333%] text-center flex items-center justify-center bg-gray-200 rounded"
//             >
//               {name}
//             </p>
//           ))}
//         </div>
//         <style jsx>{`
//           @keyframes slide {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-184%);
//             }
//           }
//         //   .animate-slide {
//         //     animation: slide 10s linear infinite;
//         //   }
//           .animate-slide:hover {
//             animation-play-state: paused;
//           }
//           .hide-scrollbar {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//           .hide-scrollbar::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };
"use client";
import { useRef } from "react";

export const ScrollAnimate = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.parentElement.offsetWidth; // Use max-w-7xl width
      console.log(window.innerWidth)

      const itemWidth = window.innerWidth >= 1024 ? containerWidth / 12 : 40; // lg:w-[8.333%] or w-10
      console.log(itemWidth)
      const gap = 16; // gap-4 = 1rem = 16px
      const scrollDistance = (itemWidth + gap) * 3; // Scroll 3 items
      console.log(scrollDistance)
      console.log(sliderRef.current.style.transform)
      const currentTranslate = parseFloat(
        sliderRef.current.style.transform
          .replace("translateX(", "")
          .replace("px)", "") || 0
      );
      sliderRef.current.style.transform = `translateX(${Math.min(
        0,
        currentTranslate + scrollDistance
      )}px)`;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.parentElement.offsetWidth; // Use max-w-7xl width
      const itemWidth = window.innerWidth >= 1024 ? containerWidth / 12 : 40; // lg:w-[8.333%] or w-10
      const gap = 16; // gap-4 = 1rem = 16px
      const scrollDistance = (itemWidth + gap) * 3; // Scroll 3 items
      const maxScroll = -(sliderRef.current.scrollWidth - containerWidth);
      const currentTranslate = parseFloat(
        sliderRef.current.style.transform
          .replace("translateX(", "")
          .replace("px)", "") || 0
      );
      sliderRef.current.style.transform = `translateX(${Math.max(
        maxScroll,
        currentTranslate - scrollDistance
      )}px)`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto overflow-hidden px-5 relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-10"
      >
        &larr;
      </button>
      <div
        ref={sliderRef}
        className="flex gap-4 transition-transform duration-300"
        style={{ transform: "translateX(0px)" }}
      >
        {[
          "Mina",
          "Mohan",
          "Nadia",
          "Naveen",
          "Neha",
          "Nikhil",
          "Nisha",
          "Omar",
          "Pooja",
          "Pranav",
          "Priya",
          "Rahul",
          "Raj",
          "Rani",
          "Reema",
          "Rohan",
          "Roshni",
          "Saba",
          "Sachin",
          "Sadia",
          "Sajid",
          "Salma",
          "Sameer",
          "Sana",
          "Sanjay",
          "Sara",
          "Shalini",
          "Shankar",
          "Shilpa",
          "Siddharth",
          "Simran",
          "Sohail",
          "Sonali",
          "Suman",
          "Sunil",
          "Swati",
          "Tania",
          "Tarun",
          "Uma",
          "Umesh",
          "Vandana",
          "Varun",
          "Vijay",
          "Vikram",
          "Vinod",
          "Yasmin",
          "Yusuf",
          "Zain",
          "Zara",
        ].map((name, index) => (
          <p
            key={index}
            className="flex-shrink-0 w-10 h-10 lg:w-[8.333%] text-center flex items-center justify-center bg-gray-200 rounded"
          >
            {name}
          </p>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-10"
      >
        &rarr;
      </button>
    </div>
  );
};
