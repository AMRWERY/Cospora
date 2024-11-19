import { useAnimate } from "@vueuse/core";

export const useAnimateRotation = () => {
  const el = ref(null);
  const { animate, startTime, currentTime, playbackRate } = useAnimate(
    el,
    [
      { clipPath: "circle(20% at 0% 30%)" },
      { clipPath: "circle(20% at 50% 80%)" },
      { clipPath: "circle(20% at 100% 30%)" },
    ],
    {
      duration: 3000,
      iterations: 5,
      direction: "alternate",
      easing: "cubic-bezier(0.46, 0.03, 0.52, 0.96)",
    }
  );

  return {
    el,
    animate,
    startTime,
    currentTime,
    playbackRate,
  };
};
