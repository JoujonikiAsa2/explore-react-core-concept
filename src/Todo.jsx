// export default function Todo(props) {
//     return (
//         <li>Task: {props.task} Done: {props.isDone}</li>
//     )
// }

// export default function Todo({task, isDone}) {
//     return (
//         <li>Task: {task} Done: {isDone}</li>
//     )
// }


// conditional rendering option-1
// export default function Todo({task,isDOne}) {
//     if(isDOne === true) {
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

//conditional rendering option 2
// export default function Todo({ task, isDOne }) {
//     if (isDOne === true) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

// Conditional rendering option-3

// export default function Todo({ task, isDOne }) {
//     return (
//     <li>{isDOne ? "FInished" : "Work on"} : {task}</li>
//     )
// }

// Conditional rendering option-4: &&

// export default function Todo({ task, isDOne }) {
//     return (
//     // <li>{task} {isDOne && ': Done'}</li>
//     <li>{task} {isDOne || ': Done'}</li>  //option-5
//     )
// }

// option-6
export default function Todo({ task, isDOne }) {
    let name = 'Ashik'
    return (
    // <li>{task} {isDOne && ': Done'}</li>
    <li>{task} {isDOne ? name + ' Done' : 'Not Done Yet'}</li>  //option-5
    )
}