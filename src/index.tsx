import React from 'react'
import ReactDOM from 'react-dom/client'
import {Content} from './Content'
import {Title} from './Title'



// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt totam id molestias eaque numquam alias, fugit, voluptatem cupiditate amet aperiam veniam tenetur commodi placeat maiores, vero possimus? Unde, itaque deleniti.
function App() {
    return (
        <React.Fragment>
            <Title text="React" />
            <Title text="TS" />
            <Content
                text1={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt totam id molestias eaque numquam alias, fugit, voluptatem cupiditate amet aperiam veniam tenetur commodi placeat maiores, vero possimus? Unde, itaque deleniti.'}
                text2={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt totam id molestias eaque numquam alias, fugit, voluptatem cupiditate amet aperiam veniam tenetur commodi placeat maiores, vero possimus? Unde, itaque deleniti.'}
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
