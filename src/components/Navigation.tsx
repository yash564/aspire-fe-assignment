import { Menu } from 'antd'
import type { FC } from 'react'
import Home from '../assets/svg/Home.svg?react'
import Card from '../assets/svg/Card.svg?react'
import Payments from '../assets/svg/Payments.svg?react'
import Credit from '../assets/svg/Credit.svg?react'
import Account from '../assets/svg/Account.svg?react'

type NavigationProps = {
  mode: 'horizontal' | 'inline'
  menuClassName: string
  itemClassName: string
}

const menuItems = [
  { key: 'home', label: 'Home', icon: <Home className="w-6 h-6" /> },
  { key: 'cards', label: 'Cards', icon: <Card className="w-6 h-6" /> },
  { key: 'payments', label: 'Payments', icon: <Payments className="w-6 h-6" /> },
  { key: 'credit', label: 'Credit', icon: <Credit className="w-6 h-6" /> },
  { key: 'settings', label: 'Profile', icon: <Account className="w-6 h-6" /> },
]

const Navigation: FC<NavigationProps> = ({ mode, menuClassName, itemClassName }) => (
  <Menu mode={mode} defaultSelectedKeys={['cards']} className={menuClassName}>
    {menuItems.map(({ key, label, icon }) => (
      <Menu.Item key={key} className={itemClassName} icon={icon}>
        {label}
      </Menu.Item>
    ))}
  </Menu>
)

export default Navigation
