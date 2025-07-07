document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray(".card");
  const lastCard = cards[cards.length - 1];

  cards.forEach((card, index) => {
    gsap.to(card, {
      scale: 0.8 + 0.2 * (index / (cards.length - 1)),
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: `top ${15 + 35 * index}`,
        end: "top 19%",
        endTrigger: lastCard,
        scrub: true,
        pin: card,
        pinSpacing: false,
        invalidateOnRefresh: true,
      },
    });
  });
});
