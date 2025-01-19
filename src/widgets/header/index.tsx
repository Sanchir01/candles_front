import { ToggleTheme } from '~/features/theme/theme-toggle'
import { HeaderProfileEnum, HeaderVariant } from '~/shared/constants/header'
import { HeaderLayout } from '~/widgets/header/ui/HeaderLayout'
import { HeaderLogo } from '~/widgets/header/ui/HeaderLogo'
import { HeaderNav } from '~/widgets/header/ui/HeaderNav'
import { HeaderProfile } from '~/widgets/header/ui/HeaderProfile'
import HeaderAdmin from './ui/HeaderAdmin'
import HeaderBreadcrumbs from './ui/HeaderBreadcrumbs'
import FavoritesLogo from './ui/HeaderFavorites'
import { ShoppingCart } from '../cart/Cart'
import { BurgerMenu } from './ui/Burger'

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
      favorite={<FavoritesLogo />}
      profile={isAuth === HeaderProfileEnum.AUTH ? <></> : <HeaderProfile />}
      theme={<ToggleTheme />}
      logo={<HeaderLogo />}
      admin={<HeaderAdmin />}
      shoppingCart={<ShoppingCart />}
      breadcrumbs={<HeaderBreadcrumbs />}
      burger={
         <BurgerMenu
            admin={<HeaderAdmin />}
            theme={<ToggleTheme />}
            nav={<HeaderNav burgerNav />}
            favorite={<FavoritesLogo />}
         />
      }
   />
)
export default Header
