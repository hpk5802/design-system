import { useState } from 'react';

function useToggle(initialState: boolean = false) {
  const [isActive, setIsActive] = useState(initialState);

  const toggleActive = () => setIsActive((prev) => !prev);

  return { isActive, toggleActive };
}

export default useToggle;
