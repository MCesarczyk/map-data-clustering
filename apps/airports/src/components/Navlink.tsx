import { Link } from '@tanstack/react-router';

interface NavlinkProps {
  path: string;
  label: string;
}

export const Navlink = ({ path, label }: NavlinkProps) => {
  return (
    <Link
      className="text-white font-bold hover:text-blue-300 [&.active]:text-blue-500"
      to={path}
    >
      {label}
    </Link>
  );
};
