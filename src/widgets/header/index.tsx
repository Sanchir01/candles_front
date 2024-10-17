import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { ToggleTheme } from '~/features/theme/theme-toggle'
import { HeaderProfileEnum } from '~/shared/constants/headerprofile'
import { HeaderActions } from '~/widgets/header/ui/HeaderActions'
import { HeaderLayout } from '~/widgets/header/ui/HeaderLayout'
import { HeaderLogo } from '~/widgets/header/ui/HeaderLogo'
import { HeaderNav } from '~/widgets/header/ui/HeaderNav'
import { HeaderProfile } from '~/widgets/header/ui/HeaderProfile'
import HeaderAdmin from './ui/HeaderAdmin'

export const Header = ({ variant }: { variant: HeaderProfileEnum }) => (
   <HeaderLayout
      nav={<HeaderNav />}
      actions={<HeaderActions />}
      profile={variant === HeaderProfileEnum.AUTH ? <></> : <HeaderProfile />}
      cart={<ShoppingCart />}
      theme={<ToggleTheme />}
      logo={<HeaderLogo />}
      admin={<HeaderAdmin />}
   />
)
