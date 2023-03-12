import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../../assets/Logo.png';
import { Link } from './Link';
import { SelectedPage } from '@/shared/types';
import { useMediaQuery } from '../../hooks/useMediaQuey';
import { ActionButton } from '../../shared/ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = React.useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <nav>
      <div className={`${isTopOfPage ? 'navbar' : 'navbar isNavbarActive'}`}>
        <div className="navbar__logo">
          <div className="navbar__logo-items">
            <img src={Logo} alt="logo" />
            {isAboveMediumScreens ? (
              <div className="navbar__logo-right-side">
                <div className="navbar__logo-right-side-left">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="navbar__logo-right-side-right">
                  <p>Sign In</p>
                  <ActionButton
                    className="member-btn"
                    setSelectedPage={setSelectedPage}
                  >
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="navbar__burger"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="menu" />
              </button>
            )}
          </div>
        </div>
      </div>
      {isMenuToggled && (
        <div className="burger-active">
          <div className="burger-active__close">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="close-icon" />
            </button>
          </div>
          <div className="burger-active__navigation">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
