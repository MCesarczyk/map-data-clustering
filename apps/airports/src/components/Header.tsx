import { ComponentProps, ElementType } from 'react';

type HeaderVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeaderProps = {
  variant?: HeaderVariant;
  children: string;
};

type Config = {
  as: ElementType;
  style: string;
};

const commonStyles = 'font-bold text-black';

const configs: Record<HeaderVariant, Config> = {
  h1: { as: 'h1', style: `text-3xl ${commonStyles}` },
  h2: { as: 'h2', style: `text-2xl ${commonStyles}` },
  h3: { as: 'h3', style: `text-xl ${commonStyles}` },
  h4: { as: 'h4', style: `text-lg ${commonStyles}` },
  h5: { as: 'h5', style: `text-base ${commonStyles}` },
  h6: { as: 'h6', style: `text-md ${commonStyles}` },
};

export const Header = ({
  children,
  variant = 'h1',
}: ComponentProps<'h1'> & HeaderProps) => {
  const Component = configs[variant].as;
  return <Component className={configs[variant].style}>{children}</Component>;
};
