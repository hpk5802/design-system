import HDSButton from '../Button/HDSButton';
import styled from '@emotion/styled';
import { ReactNode, useEffect, useState } from 'react';
import { Direction } from './types/type';

interface HDSPaginationProps {
  pageSize: number;
  paginationSize?: number;
  showFirstAndLastButtons: boolean;
  direction?: Direction;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div<{ direction: Direction }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};
  justify-content: center;
  gap: 10px;

  width: fit-content;
`;

const NavigationWrap = styled.div<{
  direction: Direction;
}>`
  transform: ${({ direction }) => direction === 'vertical' && 'rotate(90deg)'};

  & > button {
    &:hover {
      background-color: #3d3bf3;
    }

    &:disabled {
      background-color: #a0c4ff;
      opacity: 0.5;
    }
  }
`;

const PaginationWrap = styled.div<{ direction: Direction }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};
  gap: 3px;
`;

const PaginationButton = styled.button`
  width: 34px;
  height: 34px;

  border: 0;
  border-radius: 5px;
  background-color: transparent;

  color: #000;

  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: #3d3bf3;
    color: #fff;
  }

  &.active {
    background-color: #3d3bf3;
    color: #fff;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

function HDSPagination({
  pageSize = 24,
  paginationSize: InitialSize = 10,
  showFirstAndLastButtons = false,
  direction = 'horizontal',
  onPageChange,
}: HDSPaginationProps) {
  const paginationSize = InitialSize > 10 || InitialSize < 1 ? 10 : InitialSize;
  const totalPage = Math.ceil(pageSize / paginationSize) - 1;
  const [current, setCurrent] = useState(1);
  const section = Math.floor((current - 1) / paginationSize);

  const handlePageChange = (page: number) => {
    setCurrent(page);
    onPageChange(page);
  };

  useEffect(() => {
    setCurrent(1);
  }, [pageSize, paginationSize]);

  return (
    <PaginationContainer direction={direction}>
      {showFirstAndLastButtons && (
        <NavigationWrap direction={direction}>
          <HDSButton
            hasBg={false}
            size="lg"
            radius="xs"
            onlyIcon
            icon="double-left-arrow.png"
            disabled={current === 1 || pageSize < 1}
            handleClick={() => handlePageChange(1)}
          />
        </NavigationWrap>
      )}
      <NavigationWrap direction={direction}>
        <HDSButton
          hasBg={false}
          size="lg"
          radius="xs"
          onlyIcon
          icon="left-arrow.png"
          disabled={current === 1 || pageSize < 1}
          handleClick={() => handlePageChange(current - 1)}
        />
      </NavigationWrap>
      <PaginationWrap direction={direction}>
        {Array.from(
          {
            length:
              section < totalPage
                ? paginationSize
                : pageSize - section * paginationSize,
          },
          (_, idx) => {
            const page = idx + 1 + paginationSize * section;
            return (
              <PaginationButton
                key={`pagination_${idx}`}
                className={page === current ? 'active' : ''}
                disabled={page === current}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationButton>
            );
          },
        )}
      </PaginationWrap>
      <NavigationWrap direction={direction}>
        <HDSButton
          hasBg={false}
          size="lg"
          radius="xs"
          onlyIcon
          icon="right-arrow.png"
          disabled={current === pageSize || pageSize < 1}
          handleClick={() => handlePageChange(current + 1)}
        />
      </NavigationWrap>
      {showFirstAndLastButtons && (
        <NavigationWrap direction={direction}>
          <HDSButton
            hasBg={false}
            size="lg"
            radius="xs"
            onlyIcon
            icon="double-right-arrow.png"
            disabled={current === pageSize || pageSize < 1}
            handleClick={() => handlePageChange(pageSize)}
          />
        </NavigationWrap>
      )}
    </PaginationContainer>
  );
}

export default HDSPagination;
