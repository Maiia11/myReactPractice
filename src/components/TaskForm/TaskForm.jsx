import { Button } from '../Button/Button';
import css from './TaskForm.module.css';
// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { addTask } from "../../redux/tasksSlice";


export const TaskForm = () => {

  const dispatch = useDispatch();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // Викликаємо генератор екшену 
    // та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
