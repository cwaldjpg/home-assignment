import React from "react";
import Overlay from "./Overlay";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
}

const Card: React.FC<CardProps> = ({ isLoading, children, className }) => {
  return (
    <div className={`card relative ${className}`}>
      {children}
      <Overlay visible={isLoading} />
    </div>
  );
};

export default Card;
