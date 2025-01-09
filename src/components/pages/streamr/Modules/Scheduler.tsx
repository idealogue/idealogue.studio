import * as React from 'react'
import {
    Body,
    Button,
    Buttons,
    Footer,
    Module,
    ModuleProps,
    VerticalWedge,
} from './Module'

export function Scheduler({
    title = 'Scheduler',
    ...props
}: Omit<ModuleProps, 'children' | 'ins' | 'outs'>) {
    return (
        <Module
            {...props}
            title={title}
            ins={[
                ['Timezone', 'UTC', true],
                null,
                ['{} Send value', '0'],
                ['{} every', 'day'],
                ['{} from', '00 : 00'],
                ['{} to', '00 : 00'],
            ]}
            outs={[['value'], null]}
        >
            <Body>
                <VerticalWedge />
                <Footer>
                    <div />
                    <Buttons>
                        <Button>+ Add</Button>
                    </Buttons>
                </Footer>
            </Body>
        </Module>
    )
}
