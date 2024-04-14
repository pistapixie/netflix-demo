export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 3, // 한 번에 넘어가는 슬라이드 수
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 2, // 한 번에 넘어가는 슬라이드 수
  },
  smallTablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 1, // 한 번에 넘어가는 슬라이드 수
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // 한 번에 넘어가는 슬라이드 수
    centerMode: true, // 모바일에서 중앙 정렬
  },
};
