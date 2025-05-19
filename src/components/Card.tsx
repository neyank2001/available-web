import React from "react";

type CardProps = {
  title: string;
  description: string;
  icon: string;
};
const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
      <div className="feature-icon">
        <img
          src={icon}
          style={{
            color: "#352961",
          }}
          width="35"
          height="35"
          alt=""
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
