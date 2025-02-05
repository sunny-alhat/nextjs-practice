import React from "react";

interface Props {
  params: {
    id: number;
    photoid: number;
  };
}

const PhotoPage = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      id: {id}
      <br />
      photo id: {photoid}
    </div>
  );
};

export default PhotoPage;
