import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm just desperate to be Happy and Successful
      </SectionText>
      <Button onClick={() => window.location='https://github.com/CrAzYJOKR'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;