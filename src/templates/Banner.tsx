import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

type IHeroProps = {
  handleButtonClick?: () => void;
};

const Banner = (props: IHeroProps) => (
  <Section>
    <CTABanner
      title="服务至上，您的满意是我们的最大动力"
      subtitle="现在联系我们还能免费试发5单"
      button={<Button handleClick={props.handleButtonClick}>去发货</Button>}
    />
  </Section>
);

export { Banner };
