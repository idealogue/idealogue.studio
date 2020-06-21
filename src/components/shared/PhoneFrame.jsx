import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    video {
        display: block;
        width: 298px;
    }

    .inner {
        background: #d5d5d5;
        border-radius: 40px;
        margin: 0 auto;
        width: 298px;
    }

    .head {
        height: 72px;
        position: relative;
    }

    .ear,
    .eye {
        background: #848484;
        border: 2px solid #e0e0e0;
        border-radius: 5px;
        height: 5px;
        position: absolute;
        top: 37px;
        width: 5px;
    }

    .ear {
        left: 136px;
        width: 50px;
    }
    
    .eye {
        left: 115px;
    }

    .body {
        background: white;
    }

    .foot {
        height: 58px;
    }

    .button {
        border: 1px solid white;
        border-radius: 100%;
        height: 35px;
        margin: 0 auto;
        position: relative;
        top: 11px;
        width: 35px;
    }
`

const PhoneFrame = ({ children, ...props }) => (
    <Wrapper {...props}>
        <div className="inner">
            <div className="head">
                <div className="ear" />
                <div className="eye" />
            </div>
            <div className="body">
                {children}
            </div>
            <div className="foot">
                <div className="button" />
            </div>
        </div>
    </Wrapper>
)

export default PhoneFrame
