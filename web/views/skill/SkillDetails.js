import Dialog from '@/components/UI/Dialog'
import React from 'react'

const SkillDetails = ({ isOpen, onClose, data }) => {
  return (
    <Dialog
      className="relative"
      contentClassName="w-full h-full max-w-md lg:max-w-2xl bg-white py-7 px-5 rounded-lg"
      overlayClassName="backdrop-blur oveflow-y-scroll"
      isOpen={isOpen}
      closable={true}
      onClose={onClose}
      onRequestClose={onClose}
    >
      <ul className="space-y-2 list-disc p-5">
        {data.trim().slice(0, data.length - 1).split(".").filter(Boolean).map((value, index) => (
          <li key={index}>{value.trim()}.</li>
        ))}
      </ul>
    </Dialog>
  );
};

export default SkillDetails