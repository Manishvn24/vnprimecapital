// import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
// import { gsap } from "gsap";

// const useMedia = (queries, values, defaultValue) => {
//   const get = () =>{
//     if (typeof window === "undefined") return defaultValue; // ← add this

//    return  values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;
//   }
//   const [value, setValue] = useState(defaultValue);

//   useEffect(() => {
//     setValue(get()); // ← sync to real value after hydration
//     const handler = () => setValue(get);
//     queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
//     return () =>
//       queries.forEach((q) =>
//         matchMedia(q).removeEventListener("change", handler),
//       );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [queries]);

//   return value;
// };

// const useMeasure = () => {
//   const ref = useRef(null);
//   const [size, setSize] = useState({ width: 0, height: 0 });

//   useLayoutEffect(() => {
//     if (!ref.current) return;
//     const ro = new ResizeObserver(([entry]) => {
//       const { width, height } = entry.contentRect;
//       setSize({ width, height });
//     });
//     ro.observe(ref.current);
//     return () => ro.disconnect();
//   }, []);

//   return [ref, size];
// };

// const preloadImages = async (urls) => {
//   await Promise.all(
//     urls.map(
//       (src) =>
//         new Promise((resolve) => {
//           const img = new Image();
//           img.src = src;
//           img.onload = img.onerror = () => resolve();
//         }),
//     ),
//   );
// };

// const Masonry = ({
//   items,
//   ease = "power3.out",
//   duration = 0.6,
//   stagger = 0.05,
//   animateFrom = "bottom",
//   scaleOnHover = true,
//   hoverScale = 0.95,
//   blurToFocus = true,
//   colorShiftOnHover = false,
// }) => {
//   const columns = useMedia(
//     [
//       "(min-width:1500px)",
//       "(min-width:1000px)",
//       "(min-width:600px)",
//       "(min-width:400px)",
//     ],
//     [5, 4, 3, 2],
//     1,
//   );

//   const [containerRef, { width }] = useMeasure();
//   const [imagesReady, setImagesReady] = useState(false);

//   const getInitialPosition = (item) => {
//     const containerRect = containerRef.current?.getBoundingClientRect();
//     if (!containerRect) return { x: item.x, y: item.y };

//     let direction = animateFrom;
//     if (animateFrom === "random") {
//       const dirs = ["top", "bottom", "left", "right"];
//       direction = dirs[Math.floor(Math.random() * dirs.length)];
//     }

//     switch (direction) {
//       case "top":
//         return { x: item.x, y: -200 };
//       case "bottom":
//         return { x: item.x, y: window.innerHeight + 200 };
//       case "left":
//         return { x: -200, y: item.y };
//       case "right":
//         return { x: window.innerWidth + 200, y: item.y };
//       case "center":
//         return {
//           x: containerRect.width / 2 - item.w / 2,
//           y: containerRect.height / 2 - item.h / 2,
//         };
//       default:
//         return { x: item.x, y: item.y + 100 };
//     }
//   };

//   useEffect(() => {
//     preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
//   }, [items]);

//   const grid = useMemo(() => {
//     if (!width) return [];
//     const colHeights = new Array(columns).fill(0);
//     const gap = 16;
//     const totalGaps = (columns - 1) * gap;
//     const columnWidth = (width - totalGaps) / columns;

//     return items.map((child) => {
//       const col = colHeights.indexOf(Math.min(...colHeights));
//       const x = col * (columnWidth + gap);
//       const height = child.height / 2;
//       const y = colHeights[col];

//       colHeights[col] += height + gap;
//       return { ...child, x, y, w: columnWidth, h: height };
//     });
//   }, [columns, items, width]);

//   const hasMounted = useRef(false);

//   useLayoutEffect(() => {
//     if (!imagesReady) return;

//     grid.forEach((item, index) => {
//       const selector = `[data-key="${item.id}"]`;
//       const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

//       if (!hasMounted.current) {
//         const start = getInitialPosition(item);
//         gsap.fromTo(
//           selector,
//           {
//             opacity: 0,
//             x: start.x,
//             y: start.y,
//             width: item.w,
//             height: item.h,
//             ...(blurToFocus && { filter: "blur(10px)" }),
//           },
//           {
//             opacity: 1,
//             ...animProps,
//             ...(blurToFocus && { filter: "blur(0px)" }),
//             duration: 0.8,
//             ease: "power3.out",
//             delay: index * stagger,
//           },
//         );
//       } else {
//         gsap.to(selector, {
//           ...animProps,
//           duration,
//           ease,
//           overwrite: "auto",
//         });
//       }
//     });

//     hasMounted.current = true;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

//   const handleMouseEnter = (id, element) => {
//     if (scaleOnHover) {
//       gsap.to(`[data-key="${id}"]`, {
//         scale: hoverScale,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
//     if (colorShiftOnHover) {
//       const overlay = element.querySelector(".color-overlay");
//       if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
//     }
//   };

//   const handleMouseLeave = (id, element) => {
//     if (scaleOnHover) {
//       gsap.to(`[data-key="${id}"]`, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
//     if (colorShiftOnHover) {
//       const overlay = element.querySelector(".color-overlay");
//       if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
//     }
//   };

//   return (
//     <div ref={containerRef} className="relative w-full h-full">
//       {grid.map((item) => (
//         <div
//           key={item.id}
//           data-key={item.id}
//           className="absolute box-content "
//           style={{ willChange: "transform, width, height, opacity" }}
//           onClick={() => window.open(item.url, "_blank", "noopener")}
//           onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
//           onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
//         >
//           <div
//             className="grayscale relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
//             style={{ backgroundImage: `url(${item.img})` }}
//           >
//             {colorShiftOnHover && (
//               <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Masonry;

"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const useMedia = (queries, values, defaultValue) => {
  const getValue = () => {
    if (typeof window === "undefined") return defaultValue;

    const index = queries.findIndex(
      (query) => window.matchMedia(query).matches,
    );

    return values[index] ?? defaultValue;
  };

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(getValue());

    const handler = () => setValue(getValue());

    const mediaQueries = queries.map((query) => window.matchMedia(query));

    mediaQueries.forEach((mq) => mq.addEventListener("change", handler));

    return () => {
      mediaQueries.forEach((mq) => mq.removeEventListener("change", handler));
    };
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;

      setSize({
        width,
        height,
      });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, size];
};

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1,
  );

  const [containerRef, { width }] = useMeasure();

  const getInitialPosition = (item) => {
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect)
      return {
        x: item.x,
        y: item.y,
      };

    let direction = animateFrom;

    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];

      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case "top":
        return {
          x: item.x,
          y: -200,
        };

      case "bottom":
        return {
          x: item.x,
          y: window.innerHeight + 200,
        };

      case "left":
        return {
          x: -200,
          y: item.y,
        };

      case "right":
        return {
          x: window.innerWidth + 200,
          y: item.y,
        };

      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };

      default:
        return {
          x: item.x,
          y: item.y + 100,
        };
    }
  };

  const { grid, containerHeight } = useMemo(() => {
    if (!width)
      return {
        grid: [],
        containerHeight: 0,
      };

    const gap = 16;
    const colHeights = new Array(columns).fill(0);

    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const gridItems = items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));

      const x = col * (columnWidth + gap);

      const height = child.height / 2;

      const y = colHeights[col];

      colHeights[col] += height + gap;

      return {
        ...child,
        x,
        y,
        w: columnWidth,
        h: height,
      };
    });

    return {
      grid: gridItems,
      containerHeight: Math.max(...colHeights),
    };
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!grid.length) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;

      const animProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);

        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && {
              filter: "blur(10px)",
            }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && {
              filter: "blur(0px)",
            }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          },
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");

      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3,
        });
      }
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");

      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: containerHeight,
      }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content cursor-pointer"
          style={{
            willChange: "transform,width,height,opacity",
          }}
          onClick={() => window.open(item.url, "_blank", "noopener,noreferrer")}
          onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
        >
          <div className="grayscale relative h-full w-full overflow-hidden rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]">
            <Image
              src={item.img}
              alt=""
              fill
              sizes="
    (min-width: 1500px) 20vw,
    (min-width: 1000px) 25vw,
    (min-width: 600px) 33vw,
    (min-width: 400px) 50vw,
    100vw
  "
              className="object-cover"
              loading="eager"
            />

            {colorShiftOnHover && (
              <div className="color-overlay pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;