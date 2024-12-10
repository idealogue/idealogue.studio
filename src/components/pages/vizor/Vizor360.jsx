import { DESKTOP, TABLET } from '$utils/css'
import React, { useReducer } from 'react'
import styled from 'styled-components'
import Arctic from './Image/arctic360.jpg'
import PlayImage from './triangle.svg'

const Inner = styled.div`
    margin: 0 auto;
    max-width: 690px;
    padding: 9% 32px 0;

    h4 {
        font-size: 18px;
        line-height: normal;
        margin: 0;
        text-align: center;
    }

    p {
        display: none;
        font-size: 25px;
        line-height: 1.8;
        margin: 0.4em 0 0;
    }

    @media ${TABLET} {
        padding-top: 7%;

        h4 {
            font-size: 24px;
            text-align: left;
        }

        p {
            display: block;
            font-size: 16px;
            line-height: 1.5em;
            width: 68%;
        }
    }

    @media ${DESKTOP} {
        max-width: 832px;
        padding-top: 7.5%;

        h4 {
            font-size: 30px;
        }

        p {
            font-size: 25px;
            line-height: 45px;
            width: auto;
        }
    }
`

const UnstyledPlayIcon = ({ className }) => (
    <div className={className}>
        <img src={PlayImage} alt="" />
    </div>
)

const PlayIcon = styled(UnstyledPlayIcon)`
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    height: 72px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 1s transform;
    width: 72px;
    z-index: 1;

    img {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%) translateX(10%);
    }
`

const TextWrap = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
`

const ArcticWrap = styled.div`
    height: 0;
    overflow: visible;

    img {
        transform: translateY(-50%);
        width: 100%;
    }
`

const UnstyledPlayButton = ({ className, onClick }) => (
    <button type="button" className={className} onClick={onClick}>
        <TextWrap>
            <Inner>
                <h4>Watch the Vizor 360 Intro</h4>
                <p>
                    A demo video we created for Oculus OC4 showing Vizor 360
                    being used in collaboration with the British Museum.
                </p>
            </Inner>
        </TextWrap>
        <PlayIcon />
        <ArcticWrap>
            <img src={Arctic} alt="" />
        </ArcticWrap>
    </button>
)

const PlayButton = styled(UnstyledPlayButton)`
    appearance: none;
    border: 0;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
    height: 100%;
    padding: 0;
    position: relative;
    width: 100%;
    text-align: left;

    &:hover ${PlayIcon} {
        transform: translate(-50%, -50%) scale(1.05);
        transition-duration: 50ms;
    }
`

const UnstyledVizor360 = ({ className }) => {
    const [isShowingVideo, showVideo] = useReducer(() => true, false)

    return (
        <div className={className}>
            {isShowingVideo ? (
                <iframe
                    src="https://www.youtube.com/embed/cMx-YaiYTrk?controls=0&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <PlayButton onClick={showVideo} />
            )}
        </div>
    )
}

const Vizor360 = styled(UnstyledVizor360)`
    background: #000000;
    aspect-ratio: 72 / 50;
    overflow: hidden;
    width: 100%;

    iframe {
        display: block;
        height: 100%;
        width: 100%;
    }

    img {
        display: block;
    }

    @media (min-width: 1504px) {
        border-radius: 8px;
        margin: 0 auto;
        max-width: 1440px;
    }
`

export default Vizor360
