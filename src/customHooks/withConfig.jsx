import React, { useEffect, useState } from 'react';

export default () => {
  const [config, setConfig] = useState({})

  useEffect(() => {
    const item = localStorage.getItem("config")
    const newConfig = JSON.parse(item)
    setConfig(newConfig)
  }, []);

  return {
    config
  };
};