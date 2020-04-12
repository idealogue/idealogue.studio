// @flow

import React, { type Node } from 'react'
import Module, { Styles as ModuleStyles } from '../Module'
import styles from './codeEditor.module.css'

type LineProps = {
    children?: Node,
    indent?: number,
    number: number,
}

function Line({ children, indent, number }: LineProps) {
    return (
        <div className={styles.line}>
            <span className={styles.lineNumber}>
                {number < 10 && ' '}
                {number}
            </span>
            {!!indent && (
                <span className={styles.indentation}>
                    {Array(...Array(indent)).map(() => ' ').join('')}
                </span>
            )}
            {children}
        </div>
    )
}

type CommentProps = {
    children: string,
}

function Comment({ children }: CommentProps) {
    return (
        <span className={styles.comment}>
            {'// '}
            {children}
        </span>
    )
}

type KeywordProps = {
    children: string,
}

function Keyword({ children }: KeywordProps) {
    return (
        <span className={styles.keyword}>
            {children}
        </span>
    )
}

type Props = {
    title?: ?string,
}

function CodeEditor({ title, ...props }: Props) {
    return (
        <Module {...props} className={styles.root} title={title || 'CodeEditor'}>
            <div className={ModuleStyles.body}>
                <div className={styles.body}>
                    <Line number={1}>
                        <Comment>Define inputs and outputs here</Comment>
                    </Line>
                    <Line number={2}>
                        <Comment>TimeSeriesInput input = new TimeSeriesInput(this,&quot;in&quot;);</Comment>
                    </Line>
                    <Line number={3}>
                        <Comment>TimeSeriesOutput output = new TimeSeriesOutput(this,&quot;out&quot;);</Comment>
                    </Line>
                    <Line number={4} />
                    <Line number={5}>
                        <Keyword>public</Keyword>
                        {' '}
                        <Keyword>void</Keyword>
                        {' '}
                        <span>{'initialize() {'}</span>
                    </Line>
                    <Line indent={4} number={6}>
                        <Comment>Initialize local variables</Comment>
                    </Line>
                    <Line number={7}>{'}'}</Line>
                    <Line number={8} />
                    <Line number={9}>
                        <Keyword>public</Keyword>
                        {' '}
                        <Keyword>void</Keyword>
                        {' '}
                        <span>{'sendOutput() {'}</span>
                    </Line>
                    <Line indent={4} number={10}>
                        <Comment>Write your module code here</Comment>
                    </Line>
                    <Line number={11}>{'}'}</Line>
                    <Line number={12} />
                    <Line number={13}>
                        <Keyword>public</Keyword>
                        {' '}
                        <Keyword>void</Keyword>
                        {' '}
                        <span>{'clearState() {'}</span>
                    </Line>
                    <Line indent={4} number={14}>
                        <Comment>Clear internal state</Comment>
                    </Line>
                    <Line number={15}>{'}'}</Line>
                </div>
                <div className={ModuleStyles.vWedge} />
                <div className={ModuleStyles.footer}>
                    <div />
                    <div className={ModuleStyles.buttons}>
                        <div className={ModuleStyles.button}>
                            Show Debug
                        </div>
                        <div className={ModuleStyles.button}>
                            Apply
                        </div>
                        <div className={ModuleStyles.button}>
                            Close
                        </div>
                    </div>
                </div>
            </div>
        </Module>
    )
}

export default CodeEditor
