import React, {
   useState,
   useEffect,
   useRef,
   RefObject,
   LazyExoticComponent
} from 'react'

/**
 * Хук для ленивой загрузки компонента
 * @param importFn - Функция импорта компонента (lazy(() => import(...)))
 * @returns [Component, ref] - Ленивый компонент и ссылка для наблюдения
 */
export function useLazyComponent<T extends React.ComponentType<any>>(
   importFn: () => Promise<{ default: T }>
): [LazyExoticComponent<T> | null, RefObject<HTMLDivElement>] {
   const [isVisible, setIsVisible] = useState(false)
   const [Component, setComponent] = useState<LazyExoticComponent<T> | null>(
      null
   )
   const ref = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true)
               observer.disconnect() // Отключаем наблюдатель для текущего элемента
            }
         },
         { threshold: 0.3 } // Активируется, когда 10% элемента становится видимым
      )

      if (ref.current) {
         observer.observe(ref.current)
      }

      return () => {
         observer.disconnect()
      }
   }, [])

   useEffect(() => {
      if (isVisible) {
         setComponent(React.lazy(importFn))
      }
   }, [isVisible, importFn])

   return [Component, ref]
}
