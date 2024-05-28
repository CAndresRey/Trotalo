import { Link } from "react-router-dom";
import cn from "classnames";

interface NavbarLinkProps {
    text: string;
    route: string;
    active: boolean;
}
    
const NavbarLink: React.FC<NavbarLinkProps> = ({
  text,
  route,
  active,
}) => {
  return (
    <Link
      className={cn(
        `flex h-full items-center font-medium text-ligth w-full text-center justify-center px-4`,
        {
          "bg-tertiary": active
        }
      )}
      to={route}
    >
      {text}
    </Link>
  );
};

export default NavbarLink;
