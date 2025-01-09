import * as React from 'react'
import Module, { Body, Button, Buttons, Footer, VerticalWedge } from './Module'

function Scheduler({ title, ...props }) {
    return (
        <Module
            {...props}
            title={title || 'Scheduler'}
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

export default Scheduler
