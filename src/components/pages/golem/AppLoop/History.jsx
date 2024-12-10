import * as React from 'react'
import styled from 'styled-components'

const Reward = styled.div`
    color: #4e4e4e;
    font-size: 1.4em;
`

export const Title = styled.div`
    color: #4e4e4e;
    font-size: 1.2em;
`

export const Details = styled.div``

export const Eta = styled.span``

export const Separator = styled.span`
    background-color: #9b9b9b;
    display: inline-block;
    height: 1em;
    margin: 0 1em;
    position: relative;
    top: 2px;
    width: 1px;
`

export const DoneAt = styled.span``

const Inner = styled.div``

export const Body = styled.div`
    align-items: center;
    color: #9b9b9b;
    display: flex;
    justify-content: space-between;
    line-height: 1.7em;
    padding: 1.5em 18px;
    padding: 1.5em 25px;
`

const UnstyledTask = ({ reward, title, eta, doneAt, ...props }) => (
    <div {...props}>
        <Body>
            <Inner>
                <Title>{title}</Title>
                <Details>
                    <Eta>{eta}</Eta>
                    <Separator />
                    <DoneAt>{doneAt}</DoneAt>
                </Details>
            </Inner>
            <Reward>{reward}</Reward>
        </Body>
    </div>
)

export const Task = styled(UnstyledTask)`
    & + & {
        border-top: 1px solid #cbcbcb;
    }
`

const UnstyledHistory = (props) => (
    <div {...props}>
        <Task
            doneAt="Pending"
            eta="1:15"
            reward="+0.014 GNT"
            title="Processed Task"
        />
        <Task
            doneAt="8:01AM 28 Feb"
            eta="1:03"
            reward="-0.017 GNT"
            title="HMD Model Bake 3.5"
        />
        <Task
            doneAt="8:01AM 28 Feb"
            eta="2:15"
            reward="+0.015 GNT"
            title="Processed Task"
        />
        <Task
            doneAt="8:01AM 28 Feb"
            eta="1:15"
            reward="+0.013 GNT"
            title="Processed Task"
        />
    </div>
)

const History = styled(UnstyledHistory)``

export default History
