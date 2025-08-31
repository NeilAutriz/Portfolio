declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el?: HTMLElement;
    name?: string;
    offset?: number | [number, number];
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: string;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      direction?: string;
      breakpoint?: number;
      multiplier?: number;
    };
    smartphone?: {
      smooth?: boolean;
      direction?: string;
      breakpoint?: number;
      multiplier?: number;
    };
    reloadOnContextChange?: boolean;
    lerp?: number;
  }

  interface LocomotiveScrollInstance {
    scroll: {
      x: number;
      y: number;
      limit: {
        x: number;
        y: number;
      }
    };
    update: () => void;
    destroy: () => void;
    start: () => void;
    stop: () => void;
    scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number; easing?: [number, number, number, number]; disableLerp?: boolean; callback?: () => void }) => void;
    on: (event: string, func: (data?: any) => void) => void;
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | HTMLElement | number, options?: { offset?: number; duration?: number; easing?: [number, number, number, number]; disableLerp?: boolean; callback?: () => void }): void;
    on(event: string, func: (data?: any) => void): void;
    scroll: {
      x: number;
      y: number;
      limit: {
        x: number;
        y: number;
      }
    };
  }
}
