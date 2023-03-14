import React from 'react';

type Props = {
  name: string;
  description?: string;
  image: string;
};

export const Class = ({ name, description, image }: Props) => {
  return (
    <li>
      <div className="overlay">
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};
