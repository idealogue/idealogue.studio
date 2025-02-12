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
            <img src={CandidateA} alt="Candidate A" />
            <img src={CandidateB} alt="Candidate B" />
            <img src={CandidateC} alt="Candidate C" />
            <img src={CandidateD} alt="Candidate D" />
            <img src={CandidateE} alt="Candidate E" />
            <img src={CandidateF} alt="Candidate F" />
        </ExplorationRoot>
    )
}

const ExplorationRoot = styled.div`
    background-color: #ffffff;
    border-radius: 32px;
    display: grid;
    gap: 152px 226px;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    padding: 128px 192px;
    width: 836px;
`
