import { Notification } from '../Notification/Notification';
import {
  StatisticItem,
  StatisticList,
  StatisticValue,
  StatisticWrap,
} from './Statistics.styled';

export const Statistics = ({
  goodCounter,
  neutralCounter,
  badCounter,
  total,
  positivePercentage,
}) => {
  return total ? (
    <StatisticWrap>
      <StatisticList>
        <StatisticItem>Good: {goodCounter}</StatisticItem>
        <StatisticItem>Neutral: {neutralCounter}</StatisticItem>
        <StatisticItem>Bed: {badCounter}</StatisticItem>
      </StatisticList>
      <StatisticValue>Total feedbacks: {total}</StatisticValue>
      <StatisticValue>
        Positive Feedbacks: {positivePercentage} %
      </StatisticValue>
    </StatisticWrap>
  ) : (
    <Notification msg="There is no feedback" />
  );
};
