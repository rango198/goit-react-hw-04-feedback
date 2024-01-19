import { HiOutlineHandThumbUp, HiOutlineHandThumbDown } from 'react-icons/hi2';
import { MdSentimentNeutral } from 'react-icons/md';
import { StyledBtn, WrapBtn } from './FeedbackOption.styled';

const icons = {
  good: <HiOutlineHandThumbUp />,
  bad: <HiOutlineHandThumbDown />,
  neutral: <MdSentimentNeutral />,
};

export const FeedbackOptions = ({ options, onHandleFeedback }) => {
  return (
    <WrapBtn>
      {options.map(option => (
        <StyledBtn
          type="button"
          key={option}
          onClick={() => onHandleFeedback(option)}
        >
          {icons[option]} {option}
        </StyledBtn>
      ))}
    </WrapBtn>
  );
};
