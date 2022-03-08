import './SideBar.css';
import { useState } from 'react';
import { Drawer, Burger } from '@mantine/core';


function SideBar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
        position='bottom'
      >
        <navbar>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>

        </navbar>
      </Drawer>

    <Burger opened={opened} onClick={() => setOpened(true)}>Open Drawer</Burger>
    </>
  );
}

export default SideBar;
