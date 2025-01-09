import { BurgerBadge as Badge } from '$hux/Badge'
import { BurgerComponent, Parent } from '$hux/BurgerComponent'
import { BurgerElement } from '$hux/Image'
import React, { HTMLAttributes, useReducer } from 'react'
import styled from 'styled-components'

function Burger({
    children,
    className,
    onMouseDown,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const [open, toggle] = useReducer((x) => !x, false)

    return (
        <BurgerRoot
            {...props}
            className={`${className || ''} ${open ? 'open' : ''}`.replace(
                /^\s*|\s*$/g,
                ''
            )}
            onMouseDown={(e) => {
                toggle()

                if (typeof onMouseDown === 'function') {
                    onMouseDown(e)
                }
            }}
            role="button"
            tabIndex={0}
        >
            <Inner>{children}</Inner>
            <Badge>Tap!</Badge>
        </BurgerRoot>
    )
}

const BurgerRoot = styled(Parent)`
    height: 140px;
    margin: 0 auto;
    outline: 0 !important;
    position: relative;
    width: 140px;
`

const Inner = styled.div`
    height: 50%;
    position: relative;
    top: 25%;
`

export function Bills(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <Burger {...props}>
            <BurgerComponent
                cid="bills-shadow"
                at={0.67}
                dy={0.08}
                animateBy={0.0}
                src={BurgerElement.SHADOW_1}
                shadow
            />
            <BurgerComponent
                cid="bills-0"
                at={0.66}
                dy={0.08}
                animateBy={1.74}
                src={BurgerElement.BUN_BOTTOM_1}
            />
            <BurgerComponent
                cid="bills-1"
                at={0.48}
                dy={0.08}
                animateBy={1.56}
                src={BurgerElement.PICKLES}
            />
            <BurgerComponent
                cid="bills-2"
                at={0.42}
                dy={0.08}
                animateBy={1.1}
                src={BurgerElement.PATTY_1}
            />
            <BurgerComponent
                cid="bills-3"
                at={0.38}
                dy={0.08}
                animateBy={0.74}
                src={BurgerElement.CHEESE_1}
            />
            <BurgerComponent
                cid="bills-4"
                at={0.32}
                dy={0.08}
                animateBy={0.46}
                src={BurgerElement.TOMATO_1}
            />
            <BurgerComponent
                cid="bills-5"
                at={0.3}
                dy={0.08}
                animateBy={0.08}
                src={BurgerElement.BACON}
            />
            <BurgerComponent
                cid="bills-6"
                at={0.2}
                dy={0.08}
                animateBy={-0.34}
                src={BurgerElement.BEETROOT}
            />
            <BurgerComponent
                cid="bills-7"
                at={0.06}
                dy={0.08}
                animateBy={-0.7}
                src={BurgerElement.PINEAPPLE}
            />
            <BurgerComponent
                cid="bills-8"
                at={0.0}
                dy={0.08}
                animateBy={-1.1}
                src={BurgerElement.EGG}
            />
            <BurgerComponent
                cid="bills-9"
                at={-0.08}
                dy={0.08}
                animateBy={-1.46}
                src={BurgerElement.LETTUCE}
            />
            <BurgerComponent
                cid="bills-10"
                at={-0.5}
                dy={0.08}
                animateBy={-1.74}
                src={BurgerElement.BUN_TOP}
            />
        </Burger>
    )
}

export function Theo(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <Burger {...props}>
            <BurgerComponent
                cid="theo-shadow"
                at={0.75}
                dy={0.0}
                animateBy={0.0}
                src={BurgerElement.SHADOW_1}
                shadow
            />
            <BurgerComponent
                cid="theo-0"
                at={0.74}
                dy={0.0}
                animateBy={1.76}
                src={BurgerElement.BUN_BOTTOM_1}
            />
            <BurgerComponent
                cid="theo-1"
                at={0.56}
                dy={0.0}
                animateBy={1.66}
                src={BurgerElement.PICKLES}
            />
            <BurgerComponent
                cid="theo-2"
                at={0.52}
                dy={0.0}
                animateBy={1.1}
                src={BurgerElement.PATTY_4}
            />
            <BurgerComponent
                cid="theo-3"
                at={0.48}
                dy={0.0}
                animateBy={0.74}
                src={BurgerElement.CHEESE_2}
            />
            <BurgerComponent
                cid="theo-4"
                at={0.44}
                dy={0.0}
                animateBy={0.4}
                src={BurgerElement.BACON}
            />
            <BurgerComponent
                cid="theo-5"
                at={0.22}
                dy={0.0}
                animateBy={0.1}
                src={BurgerElement.PATTY_3}
            />
            <BurgerComponent
                cid="theo-6"
                at={0.14}
                dy={0.0}
                animateBy={-0.36}
                src={BurgerElement.CHEESE_1}
            />
            <BurgerComponent
                cid="theo-7"
                at={0.06}
                dy={0.0}
                animateBy={-0.74}
                src={BurgerElement.TOMATO_1}
            />
            <BurgerComponent
                cid="theo-8"
                at={-0.02}
                dy={0.0}
                animateBy={-1.1}
                src={BurgerElement.BACON}
            />
            <BurgerComponent
                cid="theo-9"
                at={-0.04}
                dy={0.0}
                animateBy={-1.56}
                src={BurgerElement.LETTUCE}
            />
            <BurgerComponent
                cid="theo-10"
                at={-0.5}
                dy={0.0}
                animateBy={-1.84}
                src={BurgerElement.BUN_TOP}
            />
        </Burger>
    )
}

export function VegeDenise(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <Burger {...props}>
            <BurgerComponent
                cid="vegeDenise-shadow"
                at={0.41}
                dy={0.34}
                animateBy={0.0}
                src={BurgerElement.SHADOW_1}
                shadow
            />
            <BurgerComponent
                cid="vegeDenise-0"
                at={0.4}
                dy={0.34}
                animateBy={1.28}
                src={BurgerElement.BUN_BOTTOM_1}
            />
            <BurgerComponent
                cid="vegeDenise-1"
                at={0.22}
                dy={0.34}
                animateBy={1.18}
                src={BurgerElement.PICKLES}
            />
            <BurgerComponent
                cid="vegeDenise-2"
                at={0.16}
                dy={0.34}
                animateBy={0.66}
                src={BurgerElement.PATTY_5}
            />
            <BurgerComponent
                cid="vegeDenise-3"
                at={0.15}
                dy={0.34}
                animateBy={0.18}
                src={BurgerElement.CHEESE_1}
            />
            <BurgerComponent
                cid="vegeDenise-4"
                at={0.04}
                dy={0.34}
                animateBy={-0.18}
                src={BurgerElement.TOMATO_2}
            />
            <BurgerComponent
                cid="vegeDenise-5"
                at={-0.12}
                dy={0.34}
                animateBy={-0.36}
                src={BurgerElement.PEPPERS}
            />
            <BurgerComponent
                cid="vegeDenise-6"
                at={-0.08}
                dy={0.34}
                animateBy={-0.92}
                src={BurgerElement.LETTUCE}
            />
            <BurgerComponent
                cid="vegeDenise-7"
                at={-0.5}
                dy={0.34}
                animateBy={-1.28}
                src={BurgerElement.BUN_TOP}
            />
        </Burger>
    )
}
