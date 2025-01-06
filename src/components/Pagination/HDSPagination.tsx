import styled from '@emotion/styled';
import HDSButton from '../Button/HDSButton';
import { useEffect, useState } from 'react';

interface HDSPaginationProps {
  pageSize: number;
  paginationSize: number;
}

const PaginationContainer = styled.div<{}>`
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
  pageSize = 13,
  paginationSize = 6,
}: HDSPaginationProps) {
  const totalPage = Math.ceil(pageSize / paginationSize);
  const [section, setSection] = useState(0);
  const [current, setCurrent] = useState(1);

  const handlePrevClick = () => {
    setCurrent((prev) => {
      if (prev % paginationSize === 1) setSection((prev) => prev - 1);
      return prev - 1;
    });
  };

  const handleNextClick = () => {
    setCurrent((prev) => {
      if (prev % paginationSize === 0) setSection((prev) => prev + 1);
      return prev + 1;
    });
  };

  const handlePageClick = (page: number) => {
    setCurrent(page);
  };

  return (
    <PaginationContainer>
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
              section < totalPage ? paginationSize : pageSize % paginationSize,
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
    </PaginationContainer>
  );
}

export default HDSPagination;
