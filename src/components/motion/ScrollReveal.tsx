'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealSelector = '[data-reveal], [data-stagger]';
    const revealVisibleElements = () => {
      document
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((element) => element.classList.add('is-visible'));
    };

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const revealDelayId = window.setTimeout(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        revealVisibleElements();

        mutationObserver = new MutationObserver(revealVisibleElements);
        mutationObserver.observe(document.body, {
          childList: true,
          subtree: true,
        });

        return;
      }

      if (!('IntersectionObserver' in window)) {
        revealVisibleElements();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || !observer) return;

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.12,
        }
      );

      const observed = new WeakSet<HTMLElement>();
      const observeRevealElements = () => {
        const revealElements = Array.from(
          document.querySelectorAll<HTMLElement>(revealSelector)
        );

        revealElements.forEach((element) => {
          if (
            !observer ||
            observed.has(element) ||
            element.classList.contains('is-visible')
          ) {
            return;
          }

          observed.add(element);
          observer.observe(element);
        });
      };

      observeRevealElements();

      mutationObserver = new MutationObserver(observeRevealElements);
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }, 120);

    return () => {
      window.clearTimeout(revealDelayId);
      mutationObserver?.disconnect();
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
