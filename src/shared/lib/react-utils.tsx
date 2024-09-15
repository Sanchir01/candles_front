'use client'
import {
	Children,
	ReactNode,
	createElement,
	isValidElement,
	startTransition,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react'
type Fn<ARGS extends any[], R> = (...args: ARGS) => R

export function useAppearanceDelay(
	show?: boolean,
	options = {} as {
		defaultValue?: boolean
		appearenceDelay?: number
		minDisplay?: number
	}
) {
	const {
		minDisplay = 500,
		defaultValue = false,
		appearenceDelay = 500
	} = options

	const [delayedShow, setDelayedShow] = useState(defaultValue)

	useEffect(() => {
		if (show) {
			const timer = setTimeout(() => {
				startTransition(() => setDelayedShow(true))
			}, appearenceDelay)
			return () => clearTimeout(timer)
		} else {
			const timer = setTimeout(() => {
				startTransition(() => setDelayedShow(false))
			}, minDisplay)
			return () => clearTimeout(timer)
		}
	}, [appearenceDelay, show, minDisplay])

	return delayedShow
}

export function useEventCallback<A extends any[], R>(fn: Fn<A, R>): Fn<A, R> {
	const ref = useRef<Fn<A, R>>(fn)
	useEffect(() => {
		ref.current = fn
	})
	return useMemo(
		() =>
			(...args: A): R => {
				const { current } = ref
				return current(...args)
			},
		[]
	)
}

export function ComposeChildren({ children }: { children: ReactNode }) {
	const array = Children.toArray(children)
	const last = array.pop()
	return (
		<>
			{array.reduceRight(
				(child, element) =>
					isValidElement(element)
						? createElement(element.type, element.props, child)
						: child,
				last
			)}
		</>
	)
}
