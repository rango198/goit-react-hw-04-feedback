import { SectionWrap, TitleSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionWrap>
  );
};
