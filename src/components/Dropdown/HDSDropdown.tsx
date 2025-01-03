import styled from '@emotion/styled';
import {
  Options,
  Position,
  positionMap,
  Size,
  sizeMap,
  Trigger,
} from './types/type';
import { useEffect, useRef, useState } from 'react';

interface HDSDropdownProps {
  trigger: Trigger;
  size?: Size;
  label: string;
  options: Options;
  position?: Position;
}

const StyledDropdown = styled.div<{ size: Size }>`
  position: relative;
  display: inline-block;

  max-width: ${({ size }) => sizeMap[size]};
`;

const DropdownLabel = styled.div`
  width: 100%;

  padding: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  cursor: pointer;
  box-sizing: border-box;
`;

const OptionContainer = styled.ul<{ position: Position; isOpen: boolean }>`
  position: absolute;
  ${({ position }) => positionMap[position] || ''};

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  margin: 0;
  padding: 5px;

  border: 1px solid #ccc;
  border-radius: 10px;

  list-style: none;
`;

const OptionWrap = styled.li`
  & + li {
    margin-top: 5px;
  }
`;

const Option = styled.button<{ size: Size }>`
  display: block;

  width: ${({ size }) => sizeMap[size]};

  padding: 5px;

  border: 0;
  border-radius: 5px;
  background-color: transparent;

  transition: 0.3s ease background-color;

  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: #eee;
  }

  &:disabled {
    background-color: #eee;
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

function HDSDropdown({
  trigger = 'hover',
  label,
  size = 'md',
  options,
  position = 'bottom_center',
}: HDSDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (handler: () => void) => {
    setIsOpen(false);
    handler();
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  };

  // 외부 클릭 감지 & 드롭다운 닫기
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <StyledDropdown
      ref={dropdownRef}
      size={size}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownLabel
        onClick={() => trigger === 'click' && setIsOpen((prev) => !prev)}
      >
        {label}
      </DropdownLabel>
      <OptionContainer isOpen={isOpen} position={position}>
        {options.map(({ label, disabled, handler }) => (
          <OptionWrap>
            <Option
              size={size}
              disabled={disabled}
              onClick={() => handleClick(handler)}
            >
              {label}
            </Option>
          </OptionWrap>
        ))}
      </OptionContainer>
    </StyledDropdown>
  );
}

export default HDSDropdown;
