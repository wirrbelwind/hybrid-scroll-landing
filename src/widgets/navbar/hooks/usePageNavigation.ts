import { useCallback } from "react"

export function usePageNavigation() {
	const scrollTo = (element: HTMLElement) => {
		window.scrollTo({
			behavior: 'smooth',
			top: element.offsetTop,
		})
	}

	const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = useCallback(event => {
		event.preventDefault()
		const target = (event.target) as HTMLAnchorElement
		const targetId = target.getAttribute('href')?.replace('#', '')
		if (!targetId) return;

		const targetElement = document.getElementById(targetId);
		if (!targetElement) return;
		scrollTo(targetElement);
	}, [])

	return {
		handler: handleLinkClick
	}
}