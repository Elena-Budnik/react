import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur ex officia et, repellat exercitationem earum eos
                voluptates vitae cum corrupti, veritatis deserunt. Nisi, sit!
                Illum assumenda dolorem provident eos esse?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                nesciunt fugiat, quisquam inventore rem quos velit accusantium
                natus neque commodi consequatur vero qui delectus sed, ipsam
                nobis, eveniet pariatur eaque.
            </p>
        </>
    )
}
function App() {
    return (
        <React.Fragment>
            <Title />
            <Content />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
