import React from 'react';
import { SelectedPage } from '../../shared/types';
import { useMediaQuery } from '../../hooks/useMediaQuey';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

// images
import HomePageText from '../../assets/HomePageText.png';
import HomePageGraphic from '../../assets/HomePageGraphic.png';
import SponsorRedBull from '../../assets/SponsorRedBull.png';
import SponsorForbes from '../../assets/SponsorForbes.png';
import SponsorFortune from '../../assets/SponsorFortune.png';
import { ActionButton } from '../../shared/ActionButton';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section id="home" className="home">
      <motion.div
        className="home__main"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Home);
        }}
      >
        <div className="main__header">
          <motion.div
            className="header__headings"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="headings__bg-image">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="headings__title">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            className="home__actions"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
              className="actions__learn-more"
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        <div className="home__image">
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="home__sponsors">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
