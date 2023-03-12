import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  className: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export const ActionButton = ({
  children,
  className,
  setSelectedPage,
}: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      className={className}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
