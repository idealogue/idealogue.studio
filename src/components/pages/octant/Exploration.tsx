import * as React from 'react'
import styled from 'styled-components'
import CandidateA from './assets/logo_candidate_a.svg'
import CandidateB from './assets/logo_candidate_b.svg'
import CandidateC from './assets/logo_candidate_c.svg'
import CandidateD from './assets/logo_candidate_d.svg'
import CandidateE from './assets/logo_candidate_e.svg'
import CandidateF from './assets/logo_candidate_f.svg'

export function Exploration() {
    return (
        <ExplorationRoot>
            <ContentWrap>
                <Content>
                    <img src={CandidateA} alt="Candidate A" />
                    <img src={CandidateB} alt="Candidate B" />
                    <img src={CandidateC} alt="Candidate C" />
                    <img src={CandidateD} alt="Candidate D" />
                    <img src={CandidateE} alt="Candidate E" />
                    <img src={CandidateF} alt="Candidate F" />
                </Content>
            </ContentWrap>
        </ExplorationRoot>
    )
}

const Content = styled.div`
    display: grid;
`

const ContentWrap = styled.div`
    border-radius: 32px;
    background-color: #ffffff;
    box-sizing: border-box;
    /* background-color: rgba(255, 0, 0, 0.1); */
    margin: 0 auto;
    max-width: 100%;
`

const ExplorationRoot = styled.div`
    margin: 0 auto;
    padding: 0 4rem 6rem;
    box-sizing: border-box;
    max-width: 100%;

    img {
        width: 5rem;
        max-width: 100%;
    }

    ${Content} {
        grid-template-columns: auto auto;
        justify-content: space-between;
        gap: 4rem 2rem;
        gap: clamp(2rem, 20vw, 4rem) 2rem;
    }

    @media (min-width: 22rem) {
        ${Content} {
            gap: 5.5rem 0rem;
            padding: 0;
        }

        ${ContentWrap} {
            width: 16rem;
        }
    }

    @media (min-width: 30rem) {
        img {
            width: auto;
        }

        ${Content} {
            padding: 0;
            gap: 5.5rem 6rem;
        }

        ${ContentWrap} {
            width: 16rem;
        }
    }

    @media (min-width: 34rem) {
        padding-left: 9rem;
        padding-right: 9rem;

        ${Content} {
            gap: 9.5rem 6rem;
        }

        ${ContentWrap} {
            width: auto;
        }
    }

    @media (min-width: 42rem) {
        padding-left: 0;
        padding-right: 0;

        ${ContentWrap} {
            width: 24rem;
        }
    }

    @media (min-width: 48rem) {
        padding-bottom: 0;

        ${Content} {
            gap: 9.5rem 0;
            margin: 0 auto;
            width: 24rem;
        }

        ${ContentWrap} {
            padding: 8rem 0;
            /* width: auto; */
            width: 44rem;
        }
    }

    @media (min-width: 62rem) {
        padding-left: 4rem;
        padding-right: 4rem;

        ${Content} {
            width: 40rem;
            grid-template-columns: auto auto auto;
        }

        ${ContentWrap} {
            padding: 8rem 0;
            width: 64rem;
        }
    }

    @media (min-width: 80rem) {
        padding-left: 8rem;
        padding-right: 8rem;

        ${Content} {
            width: auto;
            grid-template-columns: auto auto auto;
        }

        ${ContentWrap} {
            padding: 8rem 12rem;
            width: 76.5rem;
        }
    }
`
