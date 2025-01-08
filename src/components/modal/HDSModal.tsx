import styled from '@emotion/styled';
import { modalPosition, modalSort } from './types/type';
import { ReactNode } from 'react';

interface HDSModalProps {
  zIndex?: number;
  hasCloseBtn?: boolean;
  position?: modalPosition;
  sort?: modalSort;
  header?: string;
  body?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = styled.div<{
  position: modalPosition;
  zIndex: number;
}>`
  display: flex;
  justify-content: center;
  align-items: ${({ position }) => {
    switch (position) {
      case 'top':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'bottom':
        return 'flex-end';
    }
  }};

  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex || 1};

  width: 100%;
  height: 100%;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div<{ position: modalPosition; sort: modalSort }>`
  position: relative;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  max-width: 1000px;
  width: 80%;
  max-height: 80%;

  padding: 20px;

  border-radius: 10px;
  background-color: #fff;

  transform: ${({ position }) => {
    switch (position) {
      case 'top':
        return 'translateY(30px)';
      case 'bottom':
        return 'translateY(-30px)';
      case 'center':
        return 'translateY(0)';
    }
  }};

  text-align: ${({ sort }) => (sort === 'center' ? 'center' : 'left')};
`;

const ModalHeader = styled.div<{ hasCloseBtn?: boolean; sort: modalSort }>`
  display: -webkit-box;
  flex-shrink: 0;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  padding-left: ${({ sort }) => (sort === 'center' ? '30px' : '0px')};
  padding-right: ${({ hasCloseBtn }) => (hasCloseBtn ? '30px' : '0px')};

  border-bottom: 1px solid #ddd;

  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
`;

const ModalBody = styled.div<{ header: string; hasCloseBtn: boolean }>`
  overflow-y: auto;
  flex-grow: 1;

  margin-top: ${({ header, hasCloseBtn }) => {
    if (header) return '0px';
    else if (hasCloseBtn) return '26px';
  }};
  padding: 10px 0;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background: #ccc;
    border-radius: 2px;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  gap: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 24px;
  height: 24px;

  padding: 0;

  border: none;
  border-radius: 0;
  background-color: transparent;

  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;

    display: block;

    width: 100%;
    height: 2px;

    border-radius: 10px;
    background-color: #000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

function HDSModal({
  zIndex = 1,
  hasCloseBtn = true,
  position = 'center',
  sort = 'left',
  header,
  body,
  footer,
  isOpen = false,
  handleClose,
}: HDSModalProps) {
  if (!isOpen) return null;

  return (
    <Modal zIndex={zIndex} position={position}>
      <ModalOverlay onClick={handleClose} />
      <ModalContainer
        position={position}
        sort={sort}
        onClick={(e) => e.stopPropagation()}
      >
        {hasCloseBtn && <CloseButton onClick={handleClose} />}
        {header && (
          <ModalHeader sort={sort} hasCloseBtn={hasCloseBtn}>
            {header}
          </ModalHeader>
        )}
        {body && (
          <ModalBody header={header || ''} hasCloseBtn={hasCloseBtn}>
            {body}
          </ModalBody>
        )}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Modal>
  );
}

export default HDSModal;
