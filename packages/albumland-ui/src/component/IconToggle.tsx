import React, {useRef, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';

const clipIn = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 0%);
  }

  20% {
    clip-path: polygon(0% 0%, 0% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 0%);
  }

  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);
  }
`;

const clipOut = keyframes`
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 100% 100%, 100% 100%, 100% 100%, 0% 0%);
  }

  100% {
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 100%, 100% 100%, 100% 0%, 100% 0%);
  }
`;

const colorIn = keyframes`
  0% {
    fill: #115d5d;
  }

  20% {
    fill: #115d5d;
  }

  100% {
    fill: #fff;
  }
`;

const colorOut = keyframes`
  0% {
    fill: #fff;
  }

  100% {
    fill: #115d5d;
  }
`;

type ButtonProps = {
    onClick: () => any;
};

const Boundary = styled.button<ButtonProps>`
    border: none;
    display: block;
    height: 4rem;
    width: 4rem;
    padding: 1rem;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    position: relative;
    outline: none;

    transition: border-color .2s ease-out;
    border-left: 3px solid transparent;

    &:focus, &:active {
        border-left: 3px solid ${props => props.theme.colors.focus};
    }
`;

type IconProps = {
    show: boolean;
};

const Icon = styled.div<IconProps>`
    position: absolute;
    top: 0;
    left: 0;
    height: 4rem;
    width: 4rem;
    padding: 1rem;
    animation: ${props => props.show ? clipIn : clipOut} .3s ease-out forwards;

    path {
        fill: #fff;
        animation: ${props => props.show ? colorIn : colorOut} .3s ease-out forwards;
    }

    opacity: .9;
    &:hover {
        opacity: 1;
    }
`;

type Props = {
    state: string;
    paths: {[key: string]: string[]};
    onClick?: (state: string) => any;
    loaded?: boolean;
};

export const IconToggle: React.FunctionComponent<Props> = React.memo((props: Props): React.ReactElement => {
    const {state, paths, onClick, loaded = true} = props;

    return <Boundary onClick={() => onClick && onClick(state)}>
        {Object.keys(paths).map((pathState: string) => {
            return <Icon key={pathState} show={loaded && state === pathState}>
                <svg viewBox="0 0 12 12">
                    {paths[pathState].map((d, index) => <path key={index} d={d} />)}
                </svg>
            </Icon>;
        })}
    </Boundary>;
});

