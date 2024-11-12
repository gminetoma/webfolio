export const clickOutside = (node: HTMLElement, callBack: () => void) => {
  const handleClick = (event: MouseEvent) => {
    const contains = event.target && node.contains(event.target as Node);
    if (!contains) callBack();
  };

  const destroy = () => document.removeEventListener('click', handleClick, true);

  document.addEventListener('click', handleClick, true);

  return { destroy };
};

export const sleep = async (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
