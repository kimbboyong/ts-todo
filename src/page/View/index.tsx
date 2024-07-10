import { useEffect, useRef, useState } from "react";
import {
  Inner,
  ViewButton,
  ViewForm,
  ViewInput,
  ViewLi,
  ViewSubmit,
  ViewUl,
} from "./view-style";

interface TodoType {
  id: number;
  text: string;
}

const View = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [todoValue, setTodoValue] = useState("");
  const [todoData, setTodoData] = useState<TodoType[]>([]);
  const [updateText, setUpdateText] = useState("");
  const [updateId, setUpdateId] = useState<number | null>(null);

  // onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodoValue(value);
  };

  // onSubmit
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoValue === "") {
      alert("빈값 ㅈㅅ");
      return;
    }

    const plusId = todoData.length ? todoData[todoData.length - 1].id + 1 : 1;
    const newTodoData = {
      id: plusId,
      text: todoValue,
    };
    const localData = [...todoData, newTodoData];
    setTodoData(localData);
    setTodoValue("");
    inputRef.current && inputRef.current.focus();
    localStorage.setItem("textData", JSON.stringify(localData));
  };

  // Delete
  const handleDelete = (id: number) => {
    const filterItem = todoData.filter((item) => item.id !== id);

    setTodoData(filterItem);
    localStorage.setItem("textData", JSON.stringify(filterItem));
  };

  // Update
  const handleUpdate = (id: number) => {
    const updateItem = todoData.find((item) => item.id === id);
    if (updateItem) {
      setUpdateId(updateItem.id);
    }
  };

  // ChangeSave
  const ChangeSave = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUpdateText(value);
  };

  // handleSave
  const handleSave = (id: number) => {
    const changeData = todoData.map((item) =>
      item.id === id ? { ...item, text: updateText } : item
    );

    setTodoData(changeData);
    setUpdateId(null);
    setUpdateText("");
    localStorage.setItem("textData", JSON.stringify(changeData));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("textData");
    if (storedData) {
      setTodoData(JSON.parse(storedData));
    }
  }, []);

  return (
    <Inner>
      <ViewForm onSubmit={onSubmit}>
        <ViewInput
          type="text"
          value={todoValue}
          onChange={onChange}
          ref={inputRef}
        ></ViewInput>
        <ViewSubmit>추가</ViewSubmit>
      </ViewForm>

      <ViewUl>
        {todoData.map((item) => (
          <ViewLi key={item.id}>
            {item.id === updateId ? (
              <input type="text" onChange={ChangeSave} />
            ) : (
              <span>{item.text}</span>
            )}
            <ViewButton>
              {item.id === updateId ? (
                <em className="update" onClick={() => handleSave(item.id)}>
                  완료
                </em>
              ) : (
                <em className="update" onClick={() => handleUpdate(item.id)}>
                  수정
                </em>
              )}

              <em className="delete" onClick={() => handleDelete(item.id)}>
                삭제
              </em>
            </ViewButton>
          </ViewLi>
        ))}
      </ViewUl>
    </Inner>
  );
};

export default View;
