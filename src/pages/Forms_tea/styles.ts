import styled from 'styled-components';

export const Container = styled.div``;

export const button = styled.button`
        width: 10%;
        margin: 7px 0;
        padding: 10px;
        border-radius: 5px ;
        font-weight: bold;
        color: ${props=>props.theme.colors.white};
        background-color: ${props=>props.theme.colors.warning};

        transition: opacity .3s;

        &:hover{
                opacity: calc().7;
        }

`;
