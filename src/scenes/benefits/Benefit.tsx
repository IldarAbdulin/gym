import React from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const Benefit = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      transition={{ duration: 0.4 }}
      variants={childVariant}
      className="benefit"
    >
      <div className="benefit__content">
        <div className="content__icon">{icon}</div>
      </div>
      <h4 className="font-bold ml-3">{title}</h4>
      <p className="my-3 ml-3">{description}</p>
      <AnchorLink className="benefit__link">Learn More</AnchorLink>
    </motion.div>
  );
};
