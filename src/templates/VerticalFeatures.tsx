import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="我们的优势" description="">
    <VerticalFeatureRow
      title="拆包验货"
      description="每个包裹均拆包验货，如果不符，立即反馈，符合就打包并贴面单。"
      image="/assets/images/feature1.svg"
      imageAlt="拆包验货"
    />
    <VerticalFeatureRow
      title="订单检查"
      description="每天都检查取消的订单和急单，取消的订单提前发消息提醒，杜绝订单取消率"
      image="/assets/images/feature2.svg"
      imageAlt="取消订单检查"
      reverse
    />
    <VerticalFeatureRow
      title="及时送仓"
      description="当天到当天送仓，如果有订单是因为没有及时送仓导致取消的按订单金额赔付"
      image="/assets/images/feature3.svg"
      imageAlt="及时送仓"
    />
    <VerticalFeatureRow
      title="错发赔偿"
      description="发错货，贴错单，漏发少发的直接赔偿不拖拉"
      image="/assets/images/feature4.svg"
      imageAlt="发错直接赔偿"
      reverse
    />
    <VerticalFeatureRow
      title="全天服务"
      description="上班时间全天在线服务，急单可以优先处理"
      image="/assets/images/feature5.svg"
      imageAlt="全天在线服务"
    />
    <VerticalFeatureRow
      title="监控打包"
      description="全天监控打包，高清出入库面单可用于订单申诉"
      image="/assets/images/feature6.svg"
      imageAlt="监控打包"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
