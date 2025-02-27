import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Button, Main } from 'components';
import { API } from 'api';
import { handleError } from 'utils';
import { toast } from 'react-toastify';
import { BaseItem, Item } from 'types';
import * as css from './styles.scss';

const HomePage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  const addItem = async (item: BaseItem) => {
    setLoading(true);
    try {
      const response = await axios.post(API.addItem, item);
      toast.success(response.data);
      getItems();
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const getItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Item[]>(API.items);
      setItems(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (item: Item) => {
    setLoading(true);
    try {
      const response = await axios.patch(API.updateItem(item.id), item);
      if (response) {
        toast.success(response.data.message);
        getItems();
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: number) => {
    setLoading(true);
    try {
      const response = await axios.delete(API.deleteItem(id));
      if (response) {
        toast.info(response.data);
        getItems();
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Main className={css.page} loading={loading}>
      <div className={css.content}>
        {items.map(({ id, name }) => (
          <div className={css.row} key={id}>
            {name}
          </div>
        ))}
        <Button text="Add new item" onClick={() => addItem({ name: 'Lorem' })} />
      </div>
    </Main>
  );
};

export default HomePage;
