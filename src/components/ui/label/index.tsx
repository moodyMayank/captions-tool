interface LabelProps {
  labelFor: string;
  labelName: string;
}

const Label = ({ labelFor, labelName }: LabelProps) => {
  return <label htmlFor={labelFor}>{labelName}</label>;
};

export default Label;
