import React, {useState} from 'react';



const List = () => {

    const [list, setList] = useState([
        "walk the dog",
        "buy the milk",
        "learn some code"
      ]);
  return (
    <div>
        {List}
    </div>
  )
}

export default List