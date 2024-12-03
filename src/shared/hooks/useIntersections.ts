import { useCallback } from 'react'

import { useRef } from 'react'

export function useIntersections(onIntersect: () => void) {
	const unsubscribe = useRef(() => {})

	return useCallback((el: HTMLDivElement | null) => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(intersection => {
				if (intersection.isIntersecting) {
					onIntersect()
				}
			})
		})

		if (el) {
			observer.observe(el)
			unsubscribe.current = () => observer.disconnect()
		} else {
			unsubscribe.current()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
