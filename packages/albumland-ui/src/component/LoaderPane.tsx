import type React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Box} from '../layout/Layout';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

type Props = {
    readonly loaded: boolean;
    readonly height: string;
    readonly children: React.ReactNode;
};

export const LoaderPane = styled.div<Props>`
    height: ${(props: Props) => props.height};
    opacity: 0;
    ${(props: Props) => props.loaded ? css`animation: ${fadeIn} .1s ease-out forwards;` : ``}
`;
