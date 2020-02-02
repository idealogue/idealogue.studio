import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    padding: 0 32px;

    @media (min-width: 544px) {
        max-width: 540px
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }
    
    @media (min-width: 992px) {
        max-width: 865px;
    }
    
    @media (min-width: 1200px) {
        max-width: 900px;
    }
`

export default Container
