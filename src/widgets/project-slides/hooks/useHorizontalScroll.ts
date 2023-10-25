'use client';

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { RefObject, useEffect } from "react"

export function useHorizontalScroll(
	target: RefObject<HTMLElement>,
	trigger: RefObject<HTMLElement>
) {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const pin = gsap.fromTo(
			target.current,
			{ translateX: 0, },
			{
				translateX: "-400vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: trigger.current,
					start: "top top",
					end: "2000 top",
					scrub: 1,
					pin: true,
				},
			}
		)

		return () => {
			pin.kill()
		}
	}, [])

}