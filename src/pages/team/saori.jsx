import React from 'react'
import styled from 'sc'
import Layout from '$team/Layout'
import Image from '$team/Image'
import Person from '$shared/Person'

const UnstyledSaori = () => (
    <Layout personImage={Image.SAORI}>
        <div>
            <Person.OtherLink to="/team/matt" opposite>
                Matt
            </Person.OtherLink>
        </div>
        <Layout.Wedge />
        <Person>
            <Person.Head>
                <Person.Name>
                    Saori Kajiwara
                </Person.Name>
                <Person.Role>
                    UI/UX Designer
                </Person.Role>
            </Person.Head>
            <Person.Body>
                <Person.Desc>
                    A native of Shizuoka, Japan, Saori holds a degree in Communication Design from
                    Swinburne Design School, Melbourne. She has worked as an illustrator and designer
                    in&nbsp;Melbourne and&nbsp;Tokyo.
                </Person.Desc>
                <Person.Desc>
                    One of her projects, Email-san, was acquired by Google Japan. She has been
                    a regular contributor to Tokyo digital culture magazine Brain. She is most
                    comfortable when building animations and prototypes with her toolkit
                    of Sketch, Figma, and&nbsp;Invision.
                </Person.Desc>
            </Person.Body>
            <Person.Footer empty>
                &zwnj;
            </Person.Footer>
        </Person>
    </Layout>
)

const Saori = styled(UnstyledSaori)`
    ${Layout.Cover} {
        background-position: bottom left;
    }
`

export default Saori
