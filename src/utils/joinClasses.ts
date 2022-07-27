type JoinClassesProps = any[];

const joinClasses = (...classes: JoinClassesProps) => {

  if (classes[2]) {
    classes[2] = [classes[0], classes[2]].join('--');
  }
  
  return classes.filter(cl => cl).join(' ');
}

export default joinClasses;