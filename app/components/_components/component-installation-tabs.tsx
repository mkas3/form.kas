'use client';

import { useEffect } from 'react';

import { Tabs } from '@/components/ui/tabs';
import { usePackageManagerStore } from '@/stores/package-manager.store';

type ComponentInstallationTabsProps = React.ComponentPropsWithoutRef<typeof Tabs>;

export const ComponentInstallationTabs = ({ ...props }: ComponentInstallationTabsProps) => {
  const { currentPackageManager, setCurrentPackageManager, initializePackageManager }
    = usePackageManagerStore();

  useEffect(() => {
    initializePackageManager();
  }, [initializePackageManager]);

  const handleValueChange = (value: string) => {
    setCurrentPackageManager(value);
  };

  return <Tabs value={currentPackageManager} onValueChange={handleValueChange} {...props} />;
};
