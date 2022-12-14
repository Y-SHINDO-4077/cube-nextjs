import Link from 'next/link'
import styles from 'styles/scss/toggle.module.scss'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import light from 'images/light_icon.svg'
import dark from 'images/dark_icon.svg'

export default function Toggle(){
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);
  return (
    <div className={styles.toggle__flex}>
           
            <figure >
              <Image className="" src={light} alt="" layout="fixed"
                width={25}
                height={25}
              priority/>
            </figure>
            <div className={styles.toggle_Input}>
                  <input type="checkbox" id="switch"
                  checked={darkTheme}
                  onChange={handleToggle} className={styles.header_toggleInput} />
                  <label for="switch" className={styles.header_toggleLabel}>
                  </label>
            </div>
            <figure >
              <Image className="" src={dark} alt="" layout="fixed"
                width={23}
                height={23}
              priority/>
            </figure>
    </div>
      
  )
}