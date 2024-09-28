import React from 'react'
import { HeaderNav } from '~/widgets/header/ui/HeaderNav'
import { HeaderActions } from '~/widgets/header/ui/HeaderActions'
import { HeaderLogo } from '~/widgets/header/ui/HeaderLogo'
import { HeaderLayout } from '~/widgets/header/ui/HeaderLayout'

export const Header = () => (
	<HeaderLayout
		nav={<HeaderNav />}
		actions={<HeaderActions />}
		logo={<HeaderLogo />}
	/>
)
