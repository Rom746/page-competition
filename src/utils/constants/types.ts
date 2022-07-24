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

export interface AccentTitleProps extends IChild{
  type: 'need' | 'plan' | 'diplom';
}

export interface AccentLinkProps extends IChild {
  type: 'main-primary' | 'main-secondary' | 'additional-primary' | 'additional-secondary';
  src: string;
}

export interface BenefitItemProps extends IChild {
  src: string;
  text: string;
}

