
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header() {
  return (
    <div className="pt-[40px] pb-[23.33px] md:pb-[78px]">
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
}

export default Header;
