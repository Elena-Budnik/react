import React from 'react'
import ReactDOM from 'react-dom/client'

interface ITitleProps {
    text: string
}
type ContentProps = {
    text1: string
    text2: string
    year: number
}

const Title = (props: ITitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

const Content = (props: ContentProps) => {
    return (
        <>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div>Year : {props.year}</div>
        </>
    )
}
function App() {
    return (
        <React.Fragment>
            <Title text="React" />
            <Title text="TS" />
            <Content
                text1={'Hello World 1'}
                text2={'Hello World 2'}
                year={2023}
            />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
