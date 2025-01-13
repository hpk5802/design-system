import styled from '@emotion/styled';

interface HDSToggleProps {
  isActive: boolean;
  handleClick: () => void;
}

function HDSToggle({ isActive = false, handleClick }: HDSToggleProps) {
  const ToggleContainer = styled.button<{ isActive: boolean }>`
    width: 50px;
    height: 24px;

    padding: 3px 5px;

    border: 0;
    border-radius: 100px;
    background-color: ${({ isActive }) => (isActive ? '#1677ff' : '#666')};

    text-align: left;
    color: #fff;

    cursor: pointer;
  `;

  const ToggleSwitchHandle = styled.span<{ isActive: boolean }>`
    display: inline-block;

    width: 18px;
    height: 100%;

    border-radius: 50%;
    background-color: #fff;

    transform: ${({ isActive }) => `translateX(${isActive ? '22px' : 0})`};
  `;

  return (
    <ToggleContainer isActive={isActive} onClick={handleClick} role="switch">
      <ToggleSwitchHandle isActive={isActive} />
    </ToggleContainer>
  );
}

export default HDSToggle;
