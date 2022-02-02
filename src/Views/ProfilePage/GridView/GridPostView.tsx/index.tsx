import React, { useState } from "react";
import NetworkImage from "../../../../common/NetworkImages";
import NetworkModal from "../../../../common/NetworkModal";

function GridPostView({ item }: any) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <NetworkImage key={item.id} url={item.urls.regular} />
      </div>
      <NetworkModal
        isOpen={isModalOpen}
        toggleModal={setModalOpen}
        url={item.urls.regular}
      />
    </div>
  );
}

export default GridPostView;
