// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "../icons/moonIcon";
import { SunIcon } from "../icons/sunIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="flex self-center justify-center">
        {(theme == "light") && (
          <button onClick={() => setTheme('dark')}><MoonIcon className="text-2xl" /></button>
          )}
         {(theme == "dark") && (
          <button onClick={() => setTheme('light')}><SunIcon className="text-2xl" /></button>
        )}
    </div>
  )
};