import { ToggleTheme } from '~/features/theme/theme-toggle'
import { HeaderProfileEnum, HeaderVariant } from '~/shared/constants/header'
import { HeaderLayout } from '~/widgets/header/ui/HeaderLayout'
import { HeaderLogo } from '~/widgets/header/ui/HeaderLogo'
import { HeaderNav } from '~/widgets/header/ui/HeaderNav'
import { HeaderProfile } from '~/widgets/header/ui/HeaderProfile'
import HeaderAdmin from './ui/HeaderAdmin'
import HeaderBreadcrumbs from './ui/HeaderBreadcrumbs'

const Header = ({
   isAuth,
   variant
}: {
   isAuth: HeaderProfileEnum
   variant?: HeaderVariant
}) => (
   <HeaderLayout
      variant={variant}
      nav={<HeaderNav />}
      profile={isAuth === HeaderProfileEnum.AUTH ? <></> : <HeaderProfile />}
      theme={<ToggleTheme />}
      logo={<HeaderLogo />}
      admin={<HeaderAdmin />}
      breadcrumbs={<HeaderBreadcrumbs />}
   />
)
export default Header
