import { PostHogProvider } from 'posthog-js/react'
import React from 'react'

export const PosthogProvider = ({
	children
}: {
	children?: React.ReactNode
}) => {
	return <PostHogProvider>{children}</PostHogProvider>
}
