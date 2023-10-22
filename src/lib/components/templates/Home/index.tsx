import { ListCards } from '../../organisms/ListCards';
import { Panel } from '../../organisms/Panel';

export default function HomeTemplate() {
  return (
    <div>
      <Panel>
        <ListCards />
      </Panel>
    </div>
  );
}
