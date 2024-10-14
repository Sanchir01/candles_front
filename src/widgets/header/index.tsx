import React from 'react'
import { HeaderNav } from '~/widgets/header/ui/HeaderNav'
import { HeaderActions } from '~/widgets/header/ui/HeaderActions'
import { HeaderLogo } from '~/widgets/header/ui/HeaderLogo'
import { HeaderLayout } from '~/widgets/header/ui/HeaderLayout'
import { HeaderProfile } from '~/widgets/header/ui/HeaderProfile'
import { HeaderProfileEnum } from '~/shared/constants/headerprofile'
import HeaderAdmin from './ui/HeaderAdmin'

export const Header = ({ variant }: { variant: HeaderProfileEnum }) => (
   <HeaderLayout
      nav={<HeaderNav />}
      actions={<HeaderActions />}
      profile={variant === HeaderProfileEnum.AUTH ? <></> : <HeaderProfile />}
      logo={<HeaderLogo />}
      admin={<HeaderAdmin />}
   />
)
