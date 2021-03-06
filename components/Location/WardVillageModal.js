import { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import useAPI from '../../hooks/useAPI';

const WardVillageModal = props => {
  const {
    isModalOpen,
    setModalOpen,
    stateRegion,
    township,
    onClickWardVillage
  } = props;

  const [wardVillages, setWardVillages] = useState([]);
  const [, fetchData] = useAPI();

  async function fetchWardVillage() {
    const { data } = await fetchData('/api/locations', {
      type: 'wards',
      state_region: stateRegion,
      township
    });

    setWardVillages(data);
  }

  useEffect(() => {
    if (stateRegion && township) {
      fetchWardVillage();
    }
  }, [stateRegion, township]);

  return (
    <Modal
      isOpen={isModalOpen}
      className="location-modal"
      onRequestClose={() => setModalOpen(false)}
    >
      <div className="text-center text-bold">ရပ်ကွက်/ကျေးရွာအုပ်စု ရွေးပါ</div>
      <div className="location-ward-village-header">{township}</div>
      {wardVillages.map(ward => (
        <div
          key={ward}
          className="location-child cursor-pointer"
          onClick={() => onClickWardVillage(ward)}
        >
          {ward}
        </div>
      ))}
    </Modal>
  );
};

export default WardVillageModal;
