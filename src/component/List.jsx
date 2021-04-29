import React,{Fragment} from 'react'

export const List = ({todo, deleteTodo}) => {
  const arr = [{title:"1"}, {title:"2"}]

  return (
    <div>
      {todo.map((value, index) => (
        <Fragment key={index}>
          <div style={{display:"flex"}}>
          <div key={index}>
            {value.text}
          </div>
          <button onClick={() => deleteTodo(index)}>削除</button>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
