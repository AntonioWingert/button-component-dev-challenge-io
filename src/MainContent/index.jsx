import { Button } from '../Button';
import { Container } from './styles';

export function MainContent() {
  return (
    <Container>
      <div>
        <h1>Buttons</h1>
      </div>
      <div>
        <p>{'<Button />'}</p>
        <Button />
      </div>
      <div>
      <p>{'<Button variant="outline" />'}</p>
        <Button variant='outline'/>
      </div>
      <div>
      <p>{'<Button variant="text" />'}</p>
        <Button variant="text" />
      </div>
      <div>
      <p>{'<Button disableShadow/>'}</p>
        <Button color='primary' disabledShadow/>
      </div>
      <div className='groupButtons'>
        <div>
          <p>{'<Button disabled/>'}</p>
          <p>{'<Button variant="text" disabled/>'}</p>
        </div>
        <div>
          <Button disabled>
            Disabled
          </Button>
          <Button variant='text' disabled>
            Disabled
          </Button>
        </div>
      </div>
      <div  className='groupButtons'>
      <div>
        <p>{'<Button startIcon />'}</p>
        <p>{'<Button endIcon />'}</p>
      </div>
      <div>
        <Button color='primary' startIcon/>
        <Button color='primary' endIcon/>
      </div>
      </div>
      <div className='groupButtons'>
      <div>
        <p>{'<Button size="sm" />'}</p>
        <p>{'<Button size="md" />'}</p>
        <p>{'<Button size="lg" />'}</p>
      </div>
          <div>
          <Button color='primary' size='sm'/>
          <Button color='primary' size='md'/>
          <Button color='primary' size='lg'/>
        </div>
      </div>
      <div className='groupButtons'>
        <div>
          <p>{'<Button color="default" />'}</p>
          <p>{'<Button color="primary" />'}</p>
          <p>{'<Button color="secondary" />'}</p>
          <p>{'<Button color="danger" />'}</p>
        </div>
        <div>
          <Button />
          <Button color={'primary'}>Primary</Button>
          <Button color={'secondary'}>Secondary</Button>
          <Button color={'danger'}>Danger</Button>
        </div>
      </div>
    </Container>
  );
}
