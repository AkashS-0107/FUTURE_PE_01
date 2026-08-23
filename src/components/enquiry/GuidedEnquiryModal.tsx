import React from 'react';
import { Modal } from '../ui/Modal';
import { EnquiryForm } from './EnquiryForm';

export interface GuidedEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuidedEnquiryModal: React.FC<GuidedEnquiryModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Guided Project Vision Enquiry"
      subtitle="Share your home context & preliminary design ideas with Design Haven"
      maxWidth="xl"
    >
      <EnquiryForm onCancel={onClose} />
    </Modal>
  );
};

export default GuidedEnquiryModal;
