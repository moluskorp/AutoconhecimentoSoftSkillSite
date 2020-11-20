import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 35px;
    color: #3A3A3A;
    max-width: 600px;
    line-height: 56px;

`;

export const Subtitle = styled.h2`
    font-size: 30px;
    color: #3A3A3A;
    max-width: 600px;
    line-height: 56px;

    
`;

export const Image = styled.img`
    max-width: 900px;
`;

export const Titles = styled.div`

`;

export const Text = styled.label`
    font-size: 18px;
    color: #3A3A3A;
    max-width: 600px;
    line-height: 56px;
    line-height: 2.2;
`;

export const Divtestimonials = styled.div`
    margin-top: 20px;
    max-width: 960px;    
    display: flex;

    div {
        margin: 10px;
        flex: 1;
    }
`;

export const Testimonials = styled.div`

    max-width: 300px;
    background: whitesmoke;
    border-radius: 20px;
    display: block;
    transition: transform 0.2s;
    align-items: center;

    strong {
        font-size: 15px;
        color: #3A3A3A;
        font-weight: bold;
    }

    &:hover {
        transform: translateY(-10px);
    }

    img{
        margin-top: 20px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    h1{
        font-size: 22px;
        color: #51BBFE;
        font-weight: bold;
    }

`;
