import React from 'react'

const Tabs = (props) => {
    const { todos  , selectedTab , setSelectedTab } = props;  // Default to an empty array if todos is not provided
    const tabs = ["All", "Open", "Completed"];
    
    return (
        <nav className='tab-container'>
            {
                tabs.map((tab, index) => {
                    let numberOfTasks;
                    switch (tab) {
                        case "All":
                            numberOfTasks = todos.length;
                            break;
                        case "Open":
                            numberOfTasks = todos.filter(todo => !todo.complete).length;
                            break;
                        default :
                            numberOfTasks = todos.filter(todo => todo.complete).length;
                            break;

                    }
                    return (
                        <button onClick={
                            ()=>{
                                setSelectedTab(tab)
                            }
                        }  key={index} className={'tab-button'+(tab === selectedTab ?"tab-selected" :"")}>
                            <h4>{tab} <span>({numberOfTasks})</span></h4>
                        </button>
                    )
                })
            }
        </nav>
    )
}

export default Tabs
