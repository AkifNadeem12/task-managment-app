import Sun from '@/assets/images/icon-light-theme.svg'
import Moon from '@/assets/images/icon-dark-theme.svg'
import { Switch } from '@/components/ui/switch'
import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return (
    <div className="bg-light-grey flex justify-center items-center p-3 rounded dark:bg-very-dark-grey absolute bottom-20 left-0 right-0 w-5/6 mx-auto">
      <div className="flex w-full justify-center items-center gap-5">
        <img src={Sun} />
        <Switch onCheckedChange={(checked: boolean) => toggleTheme(checked)} checked={theme === 'dark'} />
        <img src={Moon} />
      </div>
    </div>
  )
}

export default ThemeToggle
