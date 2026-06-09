import {useEffect, useState} from 'react';
import {getGuestPassCode} from '../utils/guestPass';

export function useGuestPassCode() {
  const [code, setCode] = useState('NSC-2048');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGuestPassCode().then(value => {
      setCode(value);
      setLoading(false);
    });
  }, []);

  return {code, loading};
}
