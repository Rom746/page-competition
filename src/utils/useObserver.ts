import { RefObject, useEffect, useRef } from 'react'

export const useObserver = (
  ref: RefObject<Element>,
  callback: () => void
) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    var cb = function (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      if (entries[0].isIntersecting) {
        callback();
        observer.disconnect();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current as Element)
  })
}