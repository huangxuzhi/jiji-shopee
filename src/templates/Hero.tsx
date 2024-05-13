import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type IHeroProps = {
  handleButtonClick?: () => void;
};

const Hero = (props: IHeroProps) => {
  return (
    <>
      <Background color="bg-orange-100">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}> </NavbarTwoColumns>
        </Section>
        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title="专业Shopee货代"
            description="专业团队、高效流程，为您提供贴心周到的货运解决方案。"
            button={
              <Button xl handleClick={props.handleButtonClick}>
                去发货
              </Button>
            }
          />
        </Section>
      </Background>
    </>
  );
};

export { Hero };
