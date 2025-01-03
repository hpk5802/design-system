import styled from '@emotion/styled';
import { ReactNode } from 'react';

const SytledCenter = styled.div<{ height?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: ${({ height }) => (height ? `${height}px` : '300px')};
`;

function Center({
  children,
  height,
}: {
  children: ReactNode;
  height?: number;
}) {
  return <SytledCenter height={height}>{children}</SytledCenter>;
}

export default Center;
