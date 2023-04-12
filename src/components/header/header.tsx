import './header.css'

import HeaderBanner from "@/components/header/banner/banner";
import SiteList from "@/components/header/siteList/siteList";
import Contents from "@/components/header/contents/contents";


export default function Header() {
  return (
      <>
        <div id={"header"} className={"dtec_head"}>
            <HeaderBanner></HeaderBanner>
            <SiteList></SiteList>
            <Contents></Contents>
        </div>
      </>
  )
}
