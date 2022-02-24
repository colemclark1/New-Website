import styled from 'styled-components';


export const Grid = styled.div`
    min-height: ${(props) => props.minHeight};
`;

export const Row = styled.div`
    display: flex;
    height: ${(props) => props.height};
    min-height: ${(props) => props.minHeight};
`;

export const Col = styled.div`
    flex: ${(props) => props.size};
    ${(props) => props.collapse && media[props.collapse](`
        display: none;
    `)}
    height: ${(props) => props.height};
    min-height: ${(props) => props.minHeight};
`;

const media = {
    xs: (styles) => `
        @media only screen and (max-width: 576px) {
            ${styles}
        }
    `,
    sm: (styles) => `
        @media only screen and (max-width: 768px) {
            ${styles}
        }
    `,
    md: (styles) => `
    @media only screen and (max-width: 992px) {
        ${styles}
    }`,
    lg: (styles) => `
    @media only screen and (max-width: 1200px) {
        ${styles}
    }
`
}