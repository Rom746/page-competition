export interface IChildClass {
    children?: React.ReactNode;
    className? : string;
}

export interface ParagraphProps extends IChildClass {
  type?: 'caption' | 'primary' | 'secondary';
}

export interface ButtonProps extends IChildClass {
  type?: 'main-primary' | 'main-secondary' | 'additional';
}

