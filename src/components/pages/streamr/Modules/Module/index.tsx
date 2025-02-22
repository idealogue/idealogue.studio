import { font, MEDIUM } from '$utils/css'
import React, { HTMLAttributes, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { Input } from './Input'
import { Output } from './Output'

export interface ModuleProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: string
    width?: string
    height?: string
    grow?: boolean
    ins?: ([name: string, value?: string, isPredefined?: boolean] | null)[]
    outs?: ([name: string] | null)[]
}

export function Module({
    children,
    ins: insProp = [],
    outs: outsProp = [],
    title = 'Untitled',
    width,
    height,
    grow,
    ...props
}: ModuleProps) {
    const ins = insProp

    const outs = outsProp

    const ports = useMemo(
        () => Array(...Array(Math.max(ins.length, outs.length))),
        [ins.length, outs.length]
    )

    return (
        <ModuleRoot {...props} $grow={grow} $width={width} $height={height}>
            <Top>
                <Header>
                    <Title>{title}</Title>
                    <div />
                </Header>
                {ports.length > 0 && (
                    <PortsWrapper>
                        {ports.map((el, i) => {
                            const a = ins[i]
                            const b = outs[i]

                            if (a === null && b === null) {
                                // eslint-disable-next-line react/no-array-index-key
                                return <Separator key={i} />
                            }

                            const inName = ((a || [])[0] || '').replace(
                                /^[[\](){}]+\s+/g,
                                ''
                            )
                            const inPrefix =
                                (((a || [])[0] || '').match(
                                    /^([[\](){}]+)\s+/
                                ) || [])[1] || null

                            const [, inValue, predefined] = a || []

                            const inSquare =
                                inPrefix === '[]' || inPrefix === '[[]]'

                            const inHighlight =
                                inPrefix === '[[]]' || inPrefix === '()'

                            const inNoIcon = inPrefix === '{}'

                            const outName = ((b || [])[0] || '').replace(
                                /^[()]+\s+/g,
                                ''
                            )

                            const outPrefix =
                                (((b || [])[0] || '').match(/^([()]+)\s+/) ||
                                    [])[1] || null

                            const outHighlight = outPrefix === '()'

                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <Ports key={i}>
                                    {a ? (
                                        <Input
                                            name={inName}
                                            square={!!inSquare}
                                            highlight={!!inHighlight}
                                            noIcon={inNoIcon}
                                            predefinedValue={predefined}
                                        >
                                            {inValue}
                                        </Input>
                                    ) : (
                                        <div />
                                    )}
                                    {b ? (
                                        <Output
                                            name={outName}
                                            highlight={!!outHighlight}
                                        />
                                    ) : (
                                        <div />
                                    )}
                                </Ports>
                            )
                        })}
                    </PortsWrapper>
                )}
            </Top>
            <Bottom>{children}</Bottom>
        </ModuleRoot>
    )
}

export const Top = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
`

export const Bottom = styled.div`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
`

export const Header = styled.div`
    ${font('plex sans')}

    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    font-size: 12px;
    font-weight: ${MEDIUM};
    height: 40px;
    justify-content: space-between;
    line-height: 1;
    padding: 0 24px;
`

const Title = styled.div``

const PortsWrapper = styled.div`
    padding: 12px 0;
`

const Ports = styled.div`
    align-items: top;
    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 4px;
    }
`

const Separator = styled.div`
    background-color: #efefef;
    height: 1px;
    margin: 12px 0;
`

export const Footer = styled.div`
    border-top: 1px solid #efefef;
    display: flex;
    flex-grow: 0;
    justify-content: space-between;
    padding: 8px;
`

export const Buttons = styled.div`
    display: flex;
    flex-shrink: 0;
    padding-left: 8px;
`

export const Button = styled.div`
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px #efefef;
    color: #525252;
    font-size: 10px;
    font-weight: ${MEDIUM};
    line-height: 24px;
    padding: 0 12px;

    & + & {
        margin-left: 8px;
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const VerticalWedge = styled.div`
    flex-grow: 1;
`

export const ModuleRoot = styled.div<{
    $grow?: boolean
    $width?: string
    $height?: string
}>`
    ${font('plex sans')}

    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    color: #323232;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    overflow: hidden;
    user-select: none;

    ${({ $grow = false }) =>
        $grow &&
        css`
            flex-grow: 1;
        `}

    ${({ $width }) =>
        $width != null &&
        css`
            width: ${Number.parseInt($width, 10)}px;
        `}

    ${({ $height }) =>
        $height != null &&
        css`
            height: ${Number.parseInt($height, 10)}px;
        `}
`
