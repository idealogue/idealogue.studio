import * as React from 'react'
import styled from 'styled-components'
import ModulesImg from './assets/modules_desktop.png'
import ModulesImg2x from './assets/modules_desktop@2x.png'
import MobileModulesImg from './assets/modules_mobile.png'
import MobileModulesImg2x from './assets/modules_mobile@2x.png'

export function Modules() {
    return (
        <ModulesRoot>
            <MobileImgWrap>
                <MobileImg
                    src={MobileModulesImg}
                    srcSet={`${MobileModulesImg2x} 2x`}
                    alt="Cargo modules"
                    width="757"
                    height="1030"
                />
            </MobileImgWrap>
            <WideImg
                src={ModulesImg}
                srcSet={`${ModulesImg2x} 2x`}
                alt="Cargo modules"
                width="2920"
                height="1571"
            />
        </ModulesRoot>
    )
}

const WideImgMq = '(min-width: 34rem)'

const MobileImg = styled.img`
    transform: translateX(-50%);
    width: clamp(20rem, 170vw, 47.25rem);
    height: auto;
`

const MobileImgWrap = styled.div`
    width: 0px;
    position: relative;
    left: 50%;
    margin: 3.5rem 0;

    @media ${WideImgMq} {
        display: none;
    }
`

const WideImg = styled.img`
    display: none;

    @media ${WideImgMq} {
        display: block;
        height: auto;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translateX(-50%) translateY(2.5rem);
        width: clamp(80rem, 200vw, 182.5rem);
    }
`

const ModulesRoot = styled.div`
    margin: 0;

    @media ${WideImgMq} {
        height: clamp(40rem, 101vw, 92.75rem);
    }
`
