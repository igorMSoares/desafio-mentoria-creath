import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';

export default function Home() {
  return (
    <CentralizedContainer>
      <CardBox>
        <CardTitle title="Login" />
        <Button label="Login" />
      </CardBox>
    </CentralizedContainer>
  );
}
