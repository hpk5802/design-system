import styled from '@emotion/styled';
import HDSButton from '../Button/HDSButton';
import { useEffect, useState } from 'react';

interface HDSPaginationProps {
  pageSize: number;
  paginationSize: number;
  showFirstAndLastButtons: boolean;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PaginationWrap = styled.div`
  display: flex;
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
  pageSize = 12,
  paginationSize: InitialSize = 6,
  showFirstAndLastButtons = true,
}: HDSPaginationProps) {
  const paginationSize = InitialSize > 10 ? 10 : InitialSize;
  const totalPage = Math.ceil(pageSize / paginationSize) - 1;
  const [current, setCurrent] = useState(1);
  const section = Math.floor((current - 1) / paginationSize);

  const handleFirstClick = () => {
    setCurrent(1);
  };

  const handleLastClick = () => {
    setCurrent(pageSize);
  };

  const handlePrevClick = () => {
    setCurrent((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrent((prev) => prev + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrent(page);
  };

  useEffect(() => {
    setCurrent(1);
  }, [pageSize, paginationSize]);

  return (
    <PaginationContainer>
      {showFirstAndLastButtons && (
        <HDSButton
          hasBg={false}
          size="lg"
          radius="xs"
          onlyIcon
          icon="double-left-arrow.png"
          disabled={current === 1}
          handleClick={handleFirstClick}
        />
      )}
      <HDSButton
        hasBg={false}
        size="lg"
        radius="xs"
        onlyIcon
        icon="left-arrow.png"
        disabled={current === 1}
        handleClick={handlePrevClick}
      />
      <PaginationWrap>
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
                onClick={() => handlePageClick(page)}
              >
                {page}
              </PaginationButton>
            );
          },
        )}
      </PaginationWrap>
      <HDSButton
        hasBg={false}
        size="lg"
        radius="xs"
        onlyIcon
        icon="right-arrow.png"
        disabled={current === pageSize}
        handleClick={handleNextClick}
      />
      {showFirstAndLastButtons && (
        <HDSButton
          hasBg={false}
          size="lg"
          radius="xs"
          onlyIcon
          icon="double-right-arrow.png"
          disabled={current === pageSize}
          handleClick={handleLastClick}
        />
      )}
    </PaginationContainer>
  );
}

export default HDSPagination;
