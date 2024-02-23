import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className="bg-gray-50 dark:bg-gray-800 border border-b-lines-dark">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <h1 className="font-jakarta font-bold text-white text-heading-xl">Board Name</h1>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant={'default'}>Test</Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
