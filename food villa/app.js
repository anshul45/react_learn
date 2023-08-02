import React from 'react';
import  ReactDOM  from 'react-dom/client';

const Title = () => (
        <h1>
                Food Villa
        </h1>
)

const HeaderComponent = () => {
        return (
                        <div>
                                <h1>Namaste React</h1>
                        </div>
                )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />)
