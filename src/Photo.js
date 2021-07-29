import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  setOpenModal,
  loading,
}) => {
  return (
    <section onClick={() => setOpenModal(true)} className="photo">
      {loading ? (
        <Skeleton variant="rect" width={210} height={118} />
      ) : (
        <img src={regular} alt={alt_description} />
      )}

      <div className="photo-info">
        <h4>{name}</h4>
        <p>{likes}</p>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div>
    </section>
  );
};

export default Photo;
