import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import store from '@store';
import './index.scss';

export default function Home() {

  useEffect(() => {
    store.addCount();
    setTimeout(() => {
      store.setName('cclr-cli');
    }, 1000)
  }, []);
  return (
    <Detail
      store={store}
    />
  )
}
const Detail = observer((props) => {
  const { store } = props;
  return (
    <div>{store.name}</div>
  )
})
