import { FunctionalComponent, h, Fragment }  from 'preact'

// import * as style from './style.scss';

type Props = {
  text: string;
  id: string;
  isCompleted: boolean;
  OnEditTodo: (id: string) => void;
  OnDeleteTodo: (id: string) => void;
  onToggleCompleted: (id: string) => void;
}

const index = () => {
  return (
    <div>index</div>
  )
}

export default index