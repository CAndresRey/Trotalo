import { Link } from 'react-router-dom';
import cn from 'classnames';

interface SidebarLinkProps {
  Icon: React.ElementType;
  text: string;
  route: string;
  active: boolean;
  height?: string;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  Icon,
  text,
  route,
  active,
  height = '50px',
  onClick,
}) => {
  return (
    <Link
      className={cn(
        `flex p-3 items-center gap-2 font-medium text-secondary border-b border-borders`,
        {
          "bg-white border-r-transparent": active,
          "bg-ligth": !active,
        }
      )}
      to={route}
      onClick={onClick}
      style={{ height }}
    >
      <Icon className="w-4 h-4" />
      {text}
    </Link>
  );
};

export default SidebarLink;