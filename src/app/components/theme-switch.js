"use client";

import {useTheme} from "next-themes";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "public/MoonIcon";
import {SunIcon} from "public/SunIcon";
import {useEffect, useState} from "react";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleChange(){
console.log();

  }

  return (
    <div className="flex gap-1">
      <Switch
        onValueChange={(isSelected)=>{isSelected?(setTheme("dark")):(setTheme("light"))}}
        size="sm"
        color="secondary"
        thumbIcon={({isSelected, className}) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      ></Switch>
     
    </div>
  );
}
