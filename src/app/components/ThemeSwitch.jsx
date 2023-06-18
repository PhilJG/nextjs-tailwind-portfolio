import { Sun, Moon } from './SunMoon'

export default function ThemeSwitch(handler, theme) {
    <button className='flex self-end sticky top-4 p-4 my-4 bg-cyan rounded-full' onClick={handler}
    >
        {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
}