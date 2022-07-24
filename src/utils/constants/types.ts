export interface IChild {
  children?: React.ReactNode;
}

export interface IChildClass extends IChild{
    className? : string;
}

export interface ParagraphProps extends IChildClass {
  type?: 'caption' | 'primary' | 'secondary';
}

export interface ButtonProps extends IChildClass {
  type?: 'main-primary' | 'main-secondary' | 'additional';
}

export interface AccentTextProps extends IChild{
  type?: 'primary' | 'secondary';
}