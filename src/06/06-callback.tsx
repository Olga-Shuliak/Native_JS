import {ChangeEvent, MouseEvent} from 'react'

export const User = () => {

  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    //alert('user deleted');
    console.log(`you pressed "${event.currentTarget.name}" button`)
  }
  const saveUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert('user saved');
    console.log(`you pressed "${event.currentTarget.name}" button`)
  }

  const onChangeHandler = () => {
    console.log('something change')
  }
  const onBlurHandler = () => {
    console.log('focus lost')
  }
const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(`age changed to: ${event.currentTarget.value}`)
}

  return (
      <div>
        <div>
          <textarea onChange={onChangeHandler} onBlur={onBlurHandler}>Olia</textarea>
        </div>
        <div>
          <button name='delete' onClick={deleteUser}>Delete</button>
          <button name='save' onClick={saveUser}>Save</button>
        </div>
        <div>
          <input type="number" onChange={onAgeChange}/>
        </div>
      </div>
  )
}
