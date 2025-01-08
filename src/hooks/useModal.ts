import { useState } from 'react';

function useModal() {
  const [isOpen, setIsOpen] = useState(false); // 모달 열림 관리 state

  const openModal = () => setIsOpen(true); // 모달 열기
  const closeModal = () => setIsOpen(false); // 모달 닫기

  return { isOpen, openModal, closeModal };
}

export default useModal;
