import { useEffect, useState } from "react"
import { menuStyle } from "../../styles/menu.css"

export default function MenuPresenter() {
  const [homeWidth, setHomeWidth] = useState<number | undefined>()
  const [aboutWidth, setAboutWidth] = useState<number | undefined>()
  const [worksWidth, setWorksWidth] = useState<number | undefined>()
  const [contactWidth, setContactWidth] = useState<number | undefined>()
  useEffect(() => {
    setHomeWidth(document.getElementById("home")?.clientWidth)
    setAboutWidth(document.getElementById("about")?.clientWidth)
    setWorksWidth(document.getElementById("works")?.clientWidth)
    setContactWidth(document.getElementById("contact")?.clientWidth)
  }, [])
  return (
    <div className={menuStyle.wrap} style={{ height: window.innerHeight }}>
      <div>
        <h1 id="home" className={menuStyle.h1}>
          HOME
        </h1>
        <hr style={{ width: homeWidth }} />
      </div>
      <div>
        <h1 id="about" className={menuStyle.h1}>
          ABOUT
        </h1>
        <hr style={{ width: aboutWidth }} />
      </div>
      <div>
        <h1 id="works" className={menuStyle.h1}>
          WORKS
        </h1>
        <hr style={{ width: worksWidth }} />
      </div>
      <div>
        <h1 id="contact" className={menuStyle.h1}>
          CONTACT
        </h1>
        <hr style={{ width: contactWidth }} />
      </div>
    </div>
  )
}
