import React from 'react';

const QnA = () => {
    return (
        <div className='text-center my-10'>
            <h2 className='text-fuchsia-600 text-5xl font-bold mb-10'>Learn More About React</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-fuchsia-500">
                    Props VS State
                </div>
                <div className="collapse-content"> 
                <p><span className='font-bold'>Props: </span> Props are a way to pass data from a parent component to a child component. Props are read-only and should not be modified by the child component. The parent component can pass any data it wants to the child component through props, such as strings, numbers, objects, functions, or even other components. Props are passed down the component tree and can be accessed by the child component using the props keyword.</p>
                <p><span className='font-bold'>State: </span> State, on the other hand, is used to manage data that is internal to a component and may change over time. Unlike props, state is mutable, which means that a component can change its own state. When a component's state changes, React will automatically re-render the component and any child components. State should be initialized in the constructor of a component and updated using the setState method.</p>
                </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-fuchsia-500">
                How useState() works?
                </div>
                <div className="collapse-content"> 
                    <p>In React, useState() is a hook that allows functional components to have state. useState() takes an initial value as its argument and returns an array with two elements: the current state value and a function that can be used to update the state.
                        <p>When a functional component that uses useState() is first rendered, React initializes the state value by calling the useState() function with the initial value.

                        The useState() function returns an array with two elements: the current state value and a function that can be used to update the state value. React also creates a reference to the state value and its associated update function.

                        When the component is rendered, the current state value is used to determine what content should be displayed on the screen.

                        If the component needs to update its state value, the update function returned by useState() is called with the new value. This triggers a re-render of the component.

                        When the component re-renders, the updated state value is used to determine what content should be displayed on the screen.

                        The process continues as the component is rendered and updated based on changes to its state.</p>
                    </p>
                </div>
                </div>


                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-fuchsia-500">
                    Except API data load in which work is done by useEffect()?
                </div>
                <div className="collapse-content"> 
                    <li>Component initialization</li>
                    <li>Component updates</li>
                    <li>Component unmounting</li>
                    <li>Side effects</li>
                    <li>Conditional effects</li>
                </div>
                </div>


                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-fuchsia-500">
                    How does React work?
                </div>
                <div className="collapse-content"> 
                    <p>When you build a React application, you create a tree-like hierarchy of components that represent the different parts of your UI. Each component is responsible for rendering a portion of the UI based on its current props and state. <br />

                    When a component's props or state changes, React automatically updates the UI to reflect those changes. This process is known as "reconciliation", and it involves comparing the current state of the UI to the previous state and making any necessary updates to the DOM. <br />

                    React uses a virtual DOM to perform reconciliation. The virtual DOM is a lightweight representation of the actual DOM, which allows React to update the UI more efficiently. When a component's state or props change, React updates the virtual DOM and compares it to the previous virtual DOM. It then computes the difference between the two and updates only the parts of the actual DOM that have changed.</p>
                </div>
                </div>

                
        </div>

        
    );
};

export default QnA;