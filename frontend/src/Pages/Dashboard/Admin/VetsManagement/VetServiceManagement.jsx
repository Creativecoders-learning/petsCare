import { useState } from "react";
import PrimaryTitle from "../../../../Components/UI/PrimaryTitle";
import ServiceManagementRow from "../../../../Components/UI/VetManagment/ServiceManagementRow";
import useMyServices from "../../../../Hooks/api/useMyServices";
import Modal from "../../../../Components/UI/Modal";
import AdminFeedbackForm from "./AdminFeedbackForm";
import ServiceManagementView from "./ServiceManagementView";

const VetServiceManagement = () => {
  const { myServices, refresh } = useMyServices();
  const [openModal, setOpenModal] = useState(false);
  const [serviceId, setServiceId] = useState(null);
  const [modalType, setModalType] = useState('');

  const handleAdminReviewBtn = (service) => {
    console.log(service)
    setModalType('admin-review')
    setServiceId(service)
    setOpenModal(true);
  };

  const handleFeedbackBtn = (id) => {
    console.log(id)
    setServiceId(id)
    setModalType('admin-feedback')
    setOpenModal(true);
  };

  return (
    <div className="p-8 font-inter">
      <div className="flex justify-between items-center">
        <PrimaryTitle titleStyle="text-primaryBold font-semibold">
          Vets Services Management
        </PrimaryTitle>
      </div>

      {/* table section  */}
      <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="p-4 font-semibold">#</th>
              <th className="p-4 font-semibold">Image</th>
              <th className="p-4 font-semibold">Vet Name</th>
              <th className="p-4 font-semibold">Service Email</th>
              <th className="p-4 font-semibold">Service Type</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-myGray">
            {myServices?.map((items, index) => (
              <ServiceManagementRow
                key={index}
                index={index}
                items={items}
                refresh={refresh}
                handleAdminReviewBtn={handleAdminReviewBtn}
                handleFeedbackBtn={handleFeedbackBtn}
              ></ServiceManagementRow>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && (
        <Modal primary={true} openModal={openModal} setOpenModal={setOpenModal}>
          { modalType=== 'admin-review' &&
            <ServiceManagementView
            serviceId={serviceId}
              />
          }
           { modalType=== 'admin-feedback' &&
            <AdminFeedbackForm  serviceId={serviceId} />
          }
        </Modal>
      )}
    </div>
  );
};

export default VetServiceManagement;
